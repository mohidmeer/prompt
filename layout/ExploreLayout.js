import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
export default function ExploreLayout({children}){
    return (
        
        <div className={`${nunito.className} container-fluid relative   `}>
           
            {children}
            

        </div>
      )
}