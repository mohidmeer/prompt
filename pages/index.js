import Button from "@/components/Buttons";
import Navbar from "@/components/Navbar";
import PromptContainer from "@/components/user/PromptContainer";
import Hero from "@/components/user/hero";
import AppLayout from "@/layout/AppLayout";
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <AppLayout>
      <Navbar/>
      <Hero/>
      <PromptContainer label={'Featured Prompts'}   />
      <PromptContainer label={'Hotest Prompts'}     />
      <PromptContainer label={'Latest Prompts'}     />

      <div className="my-10 flex flex-col items-center fill-blue-500">
          <Button label={'Explore More'} width="w-1/6" onClick={() => router.push('/explore')} />
          <h2 className="text-5xl font-bold my-8 ">What is PromptWorks?</h2>
          <p className="max-w-5xl text-xl text-center">
              Prompts are becoming a powerful new way of programming AI models like DALL·E, Midjourney & GPT.
              <br/>
              However, it's hard to find good quality prompts online.<br/>
              If you're good at prompt engineering, there's also no clear way to make a living from your skills.
              PromptBase is a marketplace for buying and selling quality prompts that produce the best results, 
              and save you money on API costs.
          </p>

      </div>

      <PromptContainer label={'Newest GPT prompts'}           />
      <PromptContainer label={'Stable Diffusion prompts'}     />
      
    </AppLayout>
  )
}
