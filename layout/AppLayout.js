import SideBar from '@/components/Sidebar/SideBar'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
export default function AppLayout({children}){
    return (
        <div className={`${nunito.className} `}>
            <TopBar/>
            <Navbar/>
            <div className='flex sm:flex lg:flex md:flex '>
            <SideBar/>
            <div className='container mx-auto  h-full app-text'>
                 {children}
            </div>
       </div> 
        </div>
      )
}