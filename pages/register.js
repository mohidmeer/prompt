import Head from "next/head";
import AuthLayout from "@/layout/AuthLayout";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import Button from "@/components/Buttons";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";




export default function Register() {
    return (
      <AuthLayout>
        <div className=" md:w-1/4  bg-white p-8 rounded-xl">
            <h2 className="text-4xl font-bold text-center mb-6">Register</h2>
            <InputBox  type='text' label='Fullname' placeholder="jhon Dhoe"/>
            <InputBox  type='email' label='Email' placeholder="jhon@gmail.com"/>
            <InputBox type='password'  label='Password' placeholder="•••••••••"/>
            <InputBox type='password'  label='Confirm Password' placeholder="•••••••••"/>
            <Button label="Register" width="w-full" />
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