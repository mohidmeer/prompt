import NavBar from '@/components/Citvai/NavBar'
import TagBar from '@/components/Citvai/TagBar'
import TopBar from '@/components/Citvai/TopBar'
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })


export default function promptLayout({children}){

    return (
        <div className={`${nunito.className} bg-dark-background text-white  `}>
        
          <TopBar/>
         
            {children}
        </div>
      )
}