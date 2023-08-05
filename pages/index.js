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

  const {products,ProductLoading,PaginationLoading}=useExplore(); 
  return (
    <AppLayout>
      <Head>
        <title>PromptWorks | Marketpalace</title>
        <meta name="description" content='' />
      </Head>
      { ProductLoading ?  '' :
      
            <div className='grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4 bg-black p-2 w-1/2   sm:w-full mx-auto  '  >
              {products.map((p, i) => (
                <div key={i} className="rounded border border-dark-border relative ">
                  <Details p={p} product_id={p._id} session={session}  emotionsArray={p.EmotionId} user_id={session ? session.user.id :'123' } />
                <Link href={'/prompt/'+p.slug}  >
                  <CldImage src={p.images[0]}
                      width={400}
                      height={500}
                      crop="fill"
                      alt={p.name}

                      draggable='false'
                      unselectable='off' 
                      />
                </Link> 
                </div>
              ))}
            </div>
          
            
            
      }
   

      {PaginationLoading && <Loader/>}
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
      <div className=" absolute bottom-2 left-0 right-0 mx-auto flex justify-center ">
        <div className="relative" >
          <div className="absolute inset-0 bg-opacity-70 backdrop-blur-sm bg-black rounded-xl "></div>  
          <div className=" relative flex gap-2 text-sm  overflow-hidden px-2  ">
         <span className={`flex items-center gap-1 
         ${isFav ? 'bg-dark-info/40  hover:brightness-150' : 'hover:bg-dark-muted' }  p-1 rounded-md cursor-pointer`} 
         onClick={()=>{AddEmotionsToPrompt({emotionType:'Favorite'})}}>
            <p className='text-red-500'>❤</p>
            <p className="text-xs" >{favorite}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isLiked ? 'bg-dark-info/40   hover:brightness-150' : 'hover:bg-dark-muted' }   p-1 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Like'})}}   >
            <p>👍</p>
            <p className="text-xs" >{like}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isDisliked ? 'bg-dark-info/40   hover:brightness-150' : 'hover:bg-dark-muted' }   p-1 rounded-md cursor-pointer`} 
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Dislike'})}}  >
            <p>👎</p>
            <p className="text-xs" >{dislike}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isHappy ? 'bg-dark-info/40   hover:brightness-150' : 'hover:bg-dark-muted' }   p-1 rounded-md cursor-pointer`}  
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Happy'})}} >
            <p>😂</p>
            <p className="text-xs" >{happy}</p>
          </span>
          <span className={`flex items-center gap-1 
          ${isSad ? 'bg-dark-info/40   hover:brightness-150' : 'hover:bg-dark-muted' }  p-1 rounded-md cursor-pointer`}  
          onClick={()=>{AddEmotionsToPrompt({emotionType:'Sad'})}}  >
            <p>😥</p>
            <p className="text-xs">{sad}</p>
          </span>
        </div>

      </div>
      </div>
      
    
    </>
  )
}


function Loader(){

  return(
        <div className="flex justify-center items-center my-8">
            <svg aria-hidden="true" className="w-14 h-14 mt-[2px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        </div>
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