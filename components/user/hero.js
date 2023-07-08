import Button from "../Buttons";
import Image from "next/image";
import Card from "./card";
import { useRouter } from 'next/navigation';
import Item from "../Landing/Hero/Item";
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
        <Item description={'Hire a Prompt Engineer'} image={'/images/prompt.webp'}/>
     </SwiperSlide>
     <SwiperSlide className=" mb-4">
        <Item description={'Hire a Prompt Engineer'} image={'/images/prompt2.webp'}/>
     </SwiperSlide>
     <SwiperSlide className="mb-4">
        <Item description={'Hire a Prompt Engineer'} image={'/images/prompt3.webp'}/>
     </SwiperSlide>
    
   </Swiper>
    </section>
</>
  );
};

export default Hero;
