import Head from "next/head";
import AuthLayout from "@/layout/AuthLayout";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import Button from "@/components/Buttons";




export default function Login() {
    return (
      <AuthLayout>
        <div className=" md:w-1/4  bg-white p-8 rounded-xl">
            <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
            <InputBox  type='email' label='Email' placeholder="jhon@gmail.com"/>
            <InputBox type='password'  label='Password' placeholder="•••••••••"/>
            <Button label="Login" width="w-full" />
            <div className="flex  justify-end" >
              <Link href={'/register'} className={`mt-2  hover:underline`}  >
                Signup Here
              </Link>
            </div>
            <div className="flex  justify-end" >
              <Link href={'/recover'} className={`mt-1  hover:underline`}  >
                Forgot Password
              </Link>
            </div>
              
        </div>
      </AuthLayout>
    )
  }