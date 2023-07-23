import Button from "@/components/Buttons";
import PromptContainer from "@/components/user/PromptContainer";
import Hero from "@/components/user/hero";
import AppLayout from "@/layout/AppLayout";
import { useExplore } from "@/stores/explore";
import Head from "next/head";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
export default function Home() {

  const {products,fetchProductData}=useExplore();
  const [loading,setLoading]=useState();

  const prompts= [
    { id:1 , name: 'Architecture Design', stars:5  },
]

  useEffect(()=>{ fetchProductData().then(()=>{setLoading(false);console.log(products)  })},[])

  return (
    <AppLayout>
      <Head>
        <title>PromptWorks | Marketpalace</title>
        <meta name="description" content='' />
      </Head>
      <div className='grid grid-cols-4 gap-4'>
          {Array.from({ length: Math.ceil(prompts.length / 4) }).map((_, rowIndex) => (
            <div key={rowIndex} className='flex flex-col gap-4'>
              {prompts.slice(rowIndex * 4, rowIndex * 4 + 4).map((p, i) => (
                <div key={i} className='rounded bg-blue-600 h-32'>
                  dark {rowIndex * 4 + i}{'First loop'+ rowIndex}
                </div> 
              ))}
            </div>
          ))}
         </div>

      
    </AppLayout>
  )
}
