import Head from "next/head";
import AuthLayout from "@/layout/AuthLayout";
import Link from "next/link";
import Button from "@/components/Buttons";
import { FcGoogle} from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import { useSession,signIn, getSession} from "next-auth/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import login_validate from "@/lib/client/loginValidationHelper";
import serverErrorHandler from "@/lib/server/serverErrorHandler";
import { getServerAuthSession } from "./api/auth/[...nextauth]";


export default function Login() {
   const router = useRouter();

  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validate:login_validate,
    onSubmit
  })
  async function onSubmit(values){
   const status=await signIn('credentials',{
    redirect:false,
    email:values.email,
    password:values.password,
    callbackUrl:'/'
   })
   if (status.ok){router.push(status.url)}
   if (status.error){serverErrorHandler(401,status.error);console.log(status)}
  }

    return (
      <AuthLayout >
        <div className="sm:w-1/2 w-full  lg:w-1/4  p-8 rounded-xl  bg-dark-light text-gray-400    ">
            <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={formik.handleSubmit}>
            <div className="my-4">
              <label className="input-wrapper">Email</label>
                  <input className={`input-box  ${formik.errors.email && formik.touched.email ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                  type='text' id='email' placeholder="jhon Dhoe" {...formik.getFieldProps('email')}    />
                  {formik.errors.email && formik.touched.email ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.email}</div> : <></>}
            </div>
            <div className="my-4">
              <label className="input-wrapper">Password</label>
                  <input className={`input-box  ${formik.errors.password && formik.touched.password ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                  type='text' id='password' placeholder="jhon Dhoe" {...formik.getFieldProps('password')}    />
                  {formik.errors.password && formik.touched.password ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.password}</div> : <></>}
            </div>
            
            <div className="flex  justify-end" >
              <Link href={'/recover'} className={`mt-1  hover:underline`}  >
                Forgot Password
              </Link>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <Button type='submit' label="Login" width="w-full"/>
                <Button type='button' label="Sign In with Google" onClick={()=>{signIn('google')}} inverted='true' width="w-full" ico={<FcGoogle className="w-6 h-6"  />} />
                <Button label="Sign In with Github" inverted='true' width="w-full" ico={<FaGithub className="w-6 h-6"  />} />
            </div>
            </form>
            

            <div className="flex  justify-center mt-4 items-center gap-2" >
              <p className="text-gray-400 text-sm">{"Don't have an account yet"}</p>
              <Link href={'/register'} className={` hover:underline`}  >
                Signup Here
              </Link>
            </div>
              
        </div>
      </AuthLayout>
    )
  }



  export async function getServerSideProps(context) {
    // let session = await getServerAuthSession(context.req, context.res)
    const session = await getSession(context);
    console.log
  
    if (session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    session=JSON.parse(JSON.stringify(session))
  
    return {
      props: {
         session
      },
    };
  }