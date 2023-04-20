import { Nunito } from 'next/font/google'


const nunito = Nunito({ subsets: ['latin'] })

export default function VendorLayout({children}){
    
  
    return (
        <div className={`${nunito.className}  container mx-auto `}>

            {children}
        </div>
      )
}