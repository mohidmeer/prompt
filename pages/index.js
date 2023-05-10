import Button from "@/components/Buttons";
import Navbar from "@/components/Navbar";
import PromptContainer from "@/components/user/PromptContainer";
import Hero from "@/components/user/hero";
import AppLayout from "@/layout/AppLayout";
import { useExplore } from "@/stores/explore";
import Head from "next/head";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
export default function Home() {

  const {featured,fetchFeatured}=useExplore();

  // useEffect(()=>{fetchFeatured();},[])

  return (
    <AppLayout>
      <Head>
        <title>PromptWorks | Marketpalace</title>
        <meta name="description" content='' />
      </Head>
      <Navbar/>
      <Hero/>
      {/* <PromptContainer label={'Featured Prompts'} prompts={featured}   /> */}
      {/* <PromptContainer label={'Hotest Prompts'}  prompts={featured}    /> */}
      {/* <PromptContainer label={'Latest Prompts'}     /> */}

       <p>{process.env.NEXT_PUBLIC_API_URL}</p>

      <div className="my-10 flex flex-col items-center fill-blue-500">
          <Button label={'Explore More'} width="w-1/6" onClick={() => router.push('/explore')} />
          <h2 className="text-5xl font-bold my-8 ">What is PromptWorks?</h2>
          <p className="max-w-5xl text-xl text-center">
              Prompts are becoming a powerful new way of programming AI models like DALL·E, Midjourney & GPT.
              <br/>
              However, its hard to find good quality prompts online.<br/>
              If you good at prompt engineering, theres also no clear way to make a living from your skills.
              PromptBase is a marketplace for buying and selling quality prompts that produce the best results, 
              and save you money on API costs.
          </p>

      </div>

      <PromptContainer label={'Newest GPT prompts'}  prompts={featured}          />
      <PromptContainer label={'Stable Diffusion prompts'} prompts={featured}     />
      
    </AppLayout>
  )
}
