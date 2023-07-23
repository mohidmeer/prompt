import TopBarAdmin from '@/components/Admin/TopBarAdmin'
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })



export default function ExploreLayout({children}){
    return (
        
        <div className={`${nunito.className} container-fluid relative   `}>
            <TopBarAdmin/>
            <div className="p-4 ">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
                    
                    {children}
            
        
                </div>
            </div>
            
            

        </div>
      )
}

