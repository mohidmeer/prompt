import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { MdStar } from 'react-icons/md';

const Enginers = () => {
  return (
    <div>
        <h2 className="lg:text-3xl md:text-2xl text-lg font-bold">Discover More</h2>

           <Swiper
          slidesPerView={4}
          spaceBetween={10}
          className="mt-4">
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
           <SwiperSlide className=" mb-4">
                <Item src='/images/gig.webp'  /> 
           </SwiperSlide>
    
          </Swiper>

    </div>
        
      
  )
}

export default Enginers



const Item = ({src}) => {
    return (
  
      <Link className="" href={''} >
        <div class="relative rounded-xl bg-dark p-1 border border-dark-2 overflow-hidden">
        <Image
            draggable="false"
            loading="lazy"
            class="  rounded-xl"
            src={src} width={300}  height={200}  />

            <div className='p-4'>
                <div className='flex justify-between '>
                    <div className='flex gap-2 items-center'>
                            <Image className='rounded-full' src={'/images/logo.png'} width={20} height={20}/>
                            <p className='text-sm font-bold'>Viad Hu</p>
                    </div>
                    <div className='text-red-800 px-2 bg-amber-200 text-sm font-bold'>
                        Top Rated
                    </div>


                </div>
                <div className='mt-2'>
                    <p className='font-bold text-gray-600'>I will create a gpt prompt for you </p>
                </div>
                <div className='flex items-center gap-1 mt-2'>
                    <MdStar/>
                    <p className='font-bold'>4.8</p>
                    <p className='text-gray-300 font-bold'>(23)</p>
                </div>
                <div className='font-bold flex gap-2 mt-2'>
                    <p>From </p><p>$100</p>
                </div>
          








            </div>
        </div>
      </Link>
    )
  }




         