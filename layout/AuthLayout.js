import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
export default function AuthLayout({children}){
    return (
        <div className={`${nunito.className} flex h-screen justify-center items-center  bg-gray-100  `}>

         {children}
        </div>
      )
}