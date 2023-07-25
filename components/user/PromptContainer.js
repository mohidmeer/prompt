import Card from "./card"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";


const PromptContainer = ({label,prompts}) => {




  return (
    <div className="p-4 my-10">
        <h3 className="text-3xl font-bold">{label}</h3>
        <Swiper  spaceBetween={20} slidesPerView={5} navigation={true} onSlideChange={() =>{}} >        
        {prompts.map((p)=>(
        <SwiperSlide key={p._id}>
            <Card src={p.images[0]} alt={p.name} model={p.model} label={p.name}/>    
        </SwiperSlide>
        ))}
       
    </Swiper>
    </div>
  )
}

export default PromptContainer