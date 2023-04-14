import Card from "./card"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const PromptContainer = ({label}) => {
  return (
    <div className="p-4 my-10">
        <h3 className="text-3xl font-bold">{label}</h3>
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
            navigation={true}
            onSlideChange={() => console.log('slide change')} >
        <SwiperSlide>
            <Card src={"/images/prompt5.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt4.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt3.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt2.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt3.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt4.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt5.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt5.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt3.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>
        <SwiperSlide>
            <Card src={"/images/prompt5.webp"} alt="Cartoon Images" model={"Midjourney"} label={"Cartoon Prompt"}/>    
        </SwiperSlide>

    </Swiper>
        




    </div>
  )
}

export default PromptContainer