import Head from "next/head";
import AuthLayout from "@/layout/AuthLayout";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import Button from "@/components/Buttons";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useFormik } from "formik";
import register_validate from "@/lib/registerValidationHelper";
import axios from "axios";
import serverErrorHandler from "@/lib/serverErrorHandler";
import { useRouter } from "next/router";


export default function Register() {
  const router = useRouter();
  const formik = useFormik({

    initialValues:{ username:'',email:'',password:'',cpassword:''},
    onSubmit,
    validate:register_validate
  })
  async function onSubmit(values){
    axios.post('api/auth/register',values,{
      headers: {
        'Content-Type': 'application/json'
      },
    }
    )
    .then(function (response) {
      toast.success('Successfully created')
      router.push('/')
    })
    .catch(function (error) {
      serverErrorHandler(error.response.status)
      
    });

  }

    return (
      <AuthLayout>
        <div className=" sm:w-1/2 w-full  lg:w-1/4  bg-white p-8 rounded-xl">
            <h2 className="text-4xl font-bold text-center mb-6">Register</h2>
            <form onSubmit={formik.handleSubmit} >
            <div className="my-4">
              <label className="input-wrapper">Full Name</label>
                  <input className={`input-box  ${formik.errors.username && formik.touched.username ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                  type='text' id='username' placeholder="jhon Dhoe" {...formik.getFieldProps('username')}    />
                  {formik.errors.username && formik.touched.username ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.username}</div> : <></>}
            </div>
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
            <div className="my-4">
              <label className="input-wrapper">Confirm Password</label>
                  <input className={`input-box  ${formik.errors.cpassword && formik.touched.cpassword ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                  type='text' id='cpassword' placeholder="jhon Dhoe" {...formik.getFieldProps('cpassword')}    />
                  {formik.errors.cpassword && formik.touched.cpassword ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.cpassword}</div> : <></>}
            </div>                  
              <Button type='submit' label="Register" width="w-full" />

            </form>



            <div className="flex flex-col gap-2 mt-4">
                <Button label="Sign In with Google" inverted='true' width="w-full" ico={<FcGoogle className="w-6 h-6"  />} />
                <Button label="Sign In with Github" inverted='true' width="w-full" ico={<FaGithub className="w-6 h-6"  />} />
            </div>
            <div className="flex justify-end" >
              <Link href={'/login'} className={`mt-2  hover:underline`}  >
                <p className="">Already Have Account</p>
              </Link>
            </div>
            
              
        </div>
      </AuthLayout>
    )
  }