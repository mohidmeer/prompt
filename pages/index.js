import Button from "@/components/Buttons";
import Enginers from "@/components/Landing/Engineeers/Enginers";
import Prompts from "@/components/Landing/prompts/Prompts";
import Navbar from "@/components/Navbar";
import Socialmint from "@/components/SocialmediaApi/Socialmint";
import PromptContainer from "@/components/user/PromptContainer";
import Hero from "@/components/user/hero";
import AppLayout from "@/layout/AppLayout";
import { useExplore } from "@/stores/explore";
import Head from "next/head";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
export default function Home() {

  const {featured,fetchFeatured}=useExplore();

  useEffect(()=>{fetchFeatured();},[])

  return (
    <AppLayout>
      <Head>
        <title>PromptWorks | Marketpalace</title>
        <meta name="description" content='' />
      </Head>
      <Hero/>
      <div className='lg:px-24 px-0 rounded-xl p-4 lg:pb-8  border-2 border-white  mt-8'>  <Socialmint/></div>

      <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Prompts title={'Midjourney'} /> </div>
      <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Prompts title={'Stable Diffusion'} /> </div>
      <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Prompts title={'Dalle'} /> </div>
      <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Prompts title={'Chat Gpt'} /> </div>
      <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Enginers/> </div>















      {/* <PromptContainer label={'Featured Prompts'} prompts={featured}  />
      <PromptContainer label={'Hotest Prompts'}  prompts={featured}   />
      <PromptContainer label={'Latest Prompts'}  prompts={featured}   /> */}
     

      {/* <PromptContainer label={'Newest GPT prompts'}  prompts={featured}          />
      <PromptContainer label={'Stable Diffusion prompts'} prompts={featured}     /> */}
      
    </AppLayout>
  )
}
