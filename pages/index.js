import { AddEmotions } from "@/ApiRequests/user";
import Button from "@/components/Buttons";
import PromptContainer from "@/components/user/PromptContainer";
import Hero from "@/components/user/hero";
import AppLayout from "@/layout/AppLayout";
import { useExplore } from "@/stores/explore";
import { CldImage } from "next-cloudinary";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { AiFillEye, AiFillLike } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
export default function Home() {

  const {products,fetchProductData}=useExplore();
  const [loading,setLoading]=useState();  

  const Heights=[480,450,520,420]
  function getRandomHeight() {
    const randomIndex = Math.floor(Math.random() * Heights.length);
    return Heights[randomIndex];
  }

  useEffect(()=>{ fetchProductData().then(()=>{setLoading(false);})},[])
  // useEffect(()=>{},[loading])








  return (
    <AppLayout>
      <Head>
        <title>PromptWorks | Marketpalace</title>
        <meta name="description" content='' />
      </Head>
      { loading ?  '' :
      
      <div className='grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4 bg-black p-2 w-1/2   sm:w-full mx-auto  '  >
          {Array.from({ length: Math.ceil(products.length / 5) }).map((_, rowIndex) => (
            <div key={rowIndex} className='flex flex-col gap-4'>
              {products.slice(rowIndex * 5, rowIndex * 5 + 5).map((p, i) => (
                <div key={i} className="rounded border border-dark-border relative ">
                  <Details p={p} i={i} row={rowIndex}/>
                <Link href={'/prompt/'+p.slug}  >
                  <CldImage src={p.images[0]}
                      width={300}
                      height={getRandomHeight()}
                      crop="fill"
                      alt={p.name}
                      draggable='false'
                      unselectable='off' 
                      />
                </Link> 
                </div>
              ))}
            </div>
          ))}
         </div>
      }

      
    </AppLayout>
  )
}


const Details = ({p,i,row}) => {

  const [like,setLike]=useState(p.EmotionNumbers.likes)
  const [dislike,setDislikes]=useState(p.EmotionNumbers.dislikes)
  const [happy,setHappy]=useState(p.EmotionNumbers.happy)
  const [sad,setSad]=useState(p.EmotionNumbers.sad)
  const [favorite,setFavorite]=useState(p.EmotionNumbers.favorites)

 

  return (
    <>
      <div className="absolute top-2 left-2 text-xs backdrop-blur-md ">
        <p className="p-1 bg-dark-info font-bold rounded ">{p.model.replace(/-/g, ' ')}</p>
      </div>
      <div className=" absolute bottom-0 w-full  ">
         <div class="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
        <p className="relative z-10 text-white px-1  ">{p.name}</p>

        <div className="relative" >
      <div class="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
      <div class="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
      <div className=" relative flex gap-2  text-sm p-2">
      <span className="flex items-center gap-1 hover:bg-dark-muted px-2 rounded-md cursor-pointer" onClick={()=>{AddEmotions(p._id,{emotionType:'Favorite'})}}>
            <p className='text-red-500'>❤</p>
            <p>{favorite}</p>
          </span>
          <span className="flex items-center gap-1 hover:bg-dark-muted px-2 rounded-md cursor-pointer"     onClick={()=>{AddEmotions(p._id,{emotionType:'Like'})}}>
            <p>👍</p>
            <p >{like}</p>
          </span>
          <span className="flex items-center gap-1   hover:bg-dark-muted px-2 rounded-md cursor-pointer"   onClick={()=>{AddEmotions(p._id,{emotionType:'Dislike'})}}>
            <p>👎</p>
            <p >{dislike}</p>
          </span>
          <span className="flex items-center gap-1   hover:bg-dark-muted px-2 rounded-md cursor-pointer"   onClick={()=>{AddEmotions(p._id,{emotionType:'Happy'})}}>
            <p>😂</p>
            <p >{happy}</p>
          </span>
          <span className="flex items-center gap-1   hover:bg-dark-muted px-2 rounded-md cursor-pointer"    onClick={()=>{AddEmotions(p._id,{emotionType:'Sad'})}}>
            <p>😥</p>
            <p>{sad}</p>
          </span>
        </div>

      </div>
      </div>
      
    
    </>
  )
}
