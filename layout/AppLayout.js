import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
export default function AppLayout({children}){
    return (
        <div className={`${nunito.className} container mx-auto  `}>
         {children}
        </div>
      )
}