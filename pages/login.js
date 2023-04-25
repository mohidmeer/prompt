import Head from "next/head";
import AuthLayout from "@/layout/AuthLayout";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import Button from "@/components/Buttons";
import { FcGoogle} from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import { useSession,signIn, getSession} from "next-auth/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";


export default function Login() {


  const formik = useFormik({

    initialValues:{
      email:'',
      password:''
    }
  })





  const { data: session } = useSession()
  const router = useRouter();
  if(session) {
      router.push('/')
  }
  
    return (
      <AuthLayout >
        <div className=" md:w-1/4  bg-white p-8 rounded-xl">
            <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
            <InputBox  type='email' label='Email' placeholder="jhon@gmail.com"/>
            <InputBox type='password'  label='Password' placeholder="•••••••••"/>
            <div className="flex  justify-end" >
              <Link href={'/recover'} className={`mt-1  hover:underline`}  >
                Forgot Password
              </Link>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <Button label="Login" width="w-full"/>
                <Button label="Sign In with Google" onClick={()=>{signIn('google')}} inverted='true' width="w-full" ico={<FcGoogle className="w-6 h-6"  />} />
                <Button label="Sign In with Github" inverted='true' width="w-full" ico={<FaGithub className="w-6 h-6"  />} />
            </div>
            

            <div className="flex  justify-center mt-4 items-center gap-2" >
              <p className="text-gray-400 text-sm">Don't have an account yet</p>
              <Link href={'/register'} className={` hover:underline`}  >
                Signup Here
              </Link>
            </div>
              
        </div>
      </AuthLayout>
    )
  }


  // export async function getServerSideProps(context) {
  //   const session = await getSession(context);
  //   if (session) {
  //     return {
  //       redirect: {
  //         destination: '/',
  //         permanent: false,
  //       },
  //     };
  //   }
  
  //   return {
  //     props: {},
  //   };
  // }