import { AddEmotions } from "@/ApiRequests/user";
import AppLayout from "@/layout/AppLayout";
import { useExplore } from "@/stores/explore";
import { CldImage } from "next-cloudinary";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { getServerAuthSession } from "./api/auth/[...nextauth]";
export default function Home({session}) {

  const {products,fetchProductData}=useExplore();
  const [loading,setLoading]=useState();  

  const Heights=[480,450,520,420]
  function getRandomHeight() {
    const randomIndex = Math.floor(Math.random() * Heights.length);
    return Heights[randomIndex];
  }

  useEffect(()=>{ fetchProductData().then(()=>{setLoading(false);})},[])
  

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
                  <Details p={p} product_id={p._id} session={session}  emotionsArray={p.EmotionId} user_id={session ? session.user.id :'123' } />
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


const Details = ({p,user_id,emotionsArray,product_id,session}) => {
  const router =useRouter()
  const [like,setLike]=useState(p.EmotionNumbers.likes)
  const [dislike,setDislikes]=useState(p.EmotionNumbers.dislikes)
  const [happy,setHappy]=useState(p.EmotionNumbers.happy)
  const [sad,setSad]=useState(p.EmotionNumbers.sad)
  const [favorite,setFavorite]=useState(p.EmotionNumbers.favorites)

  const [isLiked,setIsLiked]=useState(emotionsArray.likes.includes(user_id))
  const [isDisliked,setIsDisliked]=useState(emotionsArray.dislikes.includes(user_id))
  const [isFav,setIsFav]=useState(emotionsArray.favorites.includes(user_id))
  const [isHappy,setIsHappy]=useState(emotionsArray.happy.includes(user_id))
  const [isSad,setIsSad]=useState(emotionsArray.sad.includes(user_id))

  const AddEmotionsToPrompt = async(e)=>{
    if (!session){ return router.push('/login')}
    await AddEmotions(product_id,e).then((res)=>{
      switch(res.data.action){
        case 'LIKE' :
          if (res.status===201){
            setLike(like+1)
            setIsLiked(true)
          }else if(res.status===202){
            setLike(like-1)
            setIsLiked(false)
          }
        break;
        case 'DISLIKE' :
          if (res.status===201){
            setDislikes(dislike+1)
            setIsDisliked(true)
          }else if(res.status===202){
            setDislikes(dislike-1)
            setIsDisliked(false)
          }
        break;
        case 'FAVORITE' :
          if (res.status===201){
            setFavorite(favorite+1)
            setIsFav(true)
          }else if(res.status===202){
            setFavorite(favorite-1)
            setIsFav(false)
          }
        break;
        case 'HAPPY' :
          if (res.status===201){
            setHappy(happy+1)
            setIsHappy(true)
          }else if(res.status===202){
            setIsHappy(false)
            setHappy(happy-1)
          }
        break;
        case 'SAD' :
          if (res.status===201){
            setSad(sad+1)
            setIsSad(true)
          }else if(res.status===202){
            setSad(sad-1)
            setIsSad(false)
          }
        break;
        default:
          toast.error('Client Error')
        }
    
    })
  }


  return (
    <>
      <div className="absolute top-2 left-2 text-xs backdrop-blur-md ">
        <p className="p-1 bg-dark-info font-bold rounded ">{p.model.replace(/-/g, ' ')}</p>
      </div>
      <div className=" absolute bottom-0 w-full  ">
         <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
        <p className="relative z-10 text-white px-1  ">{p.name}</p>

        <div className="relative" >
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
      <div className=" relative flex justify-between  text-sm p-2 overflow-hidden  ">
         <span className={`flex items-center gap-1 
         ${isFav ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }   px-2 py-1 rounded-md cursor-pointer`} 
         onClick={()=>{AddEmotionsToPrompt({emotionType:'Favorite'})}}>
            <p className='text-red-500'>❤</p>
            <p>{favorite}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isLiked ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }   px-2 py-1 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Like'})}}   >
            <p>👍</p>
            <p >{like}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isDisliked ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }   px-2 py-1 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Dislike'})}}  >
            <p>👎</p>
            <p >{dislike}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isHappy ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }   px-2 py-1 rounded-md cursor-pointer`}  
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Happy'})}} >
            <p>😂</p>
            <p >{happy}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isSad ? 'bg-dark-muted hover:brightness-150' : 'hover:bg-dark-muted' }  px-2 py-1 rounded-md cursor-pointer`}  
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Sad'})}}  >
            <p>😥</p>
            <p>{sad}</p>
          </span>
        </div>

      </div>
      </div>
      
    
    </>
  )
}




export async function getServerSideProps(context) {
  let session = await getServerAuthSession(context.req, context.res)

  session=JSON.parse(JSON.stringify(session))
  return {
    props: {
       session
    },
  };
}