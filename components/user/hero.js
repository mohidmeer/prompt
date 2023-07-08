import Button from "../Buttons";
import Image from "next/image";
import Card from "./card";
import { useRouter } from 'next/navigation';
import Item from "../Hero/Item";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";
const Hero = () => {
  const router = useRouter();
  return (<>

    <section className=" p-8 my-4 ">
 
 <Swiper
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
 className="max-w-6xl justify-center border-2 border-dark rounded-xl   max-h-96  ">
     <SwiperSlide className=" mb-4">
        <Item description={'Prompt of the Day'} image={'/images/prompt.webp'}/>
     </SwiperSlide>
     <SwiperSlide className=" mb-4">
        <Item description={'Prompt of the Week'} image={'/images/prompt2.webp'}/>
     </SwiperSlide>
     <SwiperSlide className="mb-4">
        <Item description={'Prompt of the Month'} image={'/images/prompt3.webp'}/>
     </SwiperSlide>
    
   </Swiper>
    </section>



















    <section >
       <p className="text-3xl  font-extrabold text-red-700 -rotate-45 ml-32 mt-20 ">SECTION REMOVED ONLY FOR VIEWING PURPOSE</p>
      <div className="opacity-20  grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            DALL·E, GPT, Midjourney, Stable Diffusion, ChatGPT
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Find top prompts, produce better results, save on API costs, sell
            your own prompts.
          </p>
          <div className="flex gap-4 ">
            <Button label={"Find a Prompt"} onClick={() => router.push('/explore')} />
            <Button inverted={true} label={"Sell a prompt"} onClick={() => router.push('/account/prompts?create=true')} />
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:block">
          {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}

          <div className={`grid grid-cols-2 gap-8`}>
            <Card
              src={"Prompts/vsrakh5f2a4cydnbswmi"}
              alt="Cartoon Images"
              model={"Midjourney"}
              label={"Cartoon Prompt"}
            />
            <Card
              src={"Prompts/vsrakh5f2a4cydnbswmi"}
              alt="Rpg Games Set"
              model={"Midjourney"}
              label={"RPG Game Assets"}
            />
            <Card
              src={"Prompts/vsrakh5f2a4cydnbswmi"}
              alt="Cartoon Images"
              model={"Midjourney"}
              label={"Cartoon Prompt"}
            />
            <Card
              src={"Prompts/vsrakh5f2a4cydnbswmi"}
              alt="Cartoon Images"
              model={"Midjourney"}
              label={"Cartoon Prompt"}
            />
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Hero;
