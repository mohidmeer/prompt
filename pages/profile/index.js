import VendorLayout from "@/layout/VendorLayout";
import { getServerAuthSession } from "../api/auth/[...nextauth]";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import EditProfile from "@/components/Profile/EditProfile";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/ApiRequests/explore";
import { useUserStore } from "@/stores/user/user";
import moment from "moment/moment";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/router";
import { AddEmotions } from "@/ApiRequests/user";

export default  function Index({session}) {

  let [isOpen, setIsOpen] = useState(false)
  const {profile,fetchProfile}= useUserStore();
  const [loading,setLoading]= useState(true)
  
  useEffect(()=>{fetchProfile().then(()=>{setLoading(false)})},[]);


  return (
    <VendorLayout>
      <div className="max-w-6xl mx-auto ">
        {/* <div className="bg-dark-light  rounded  h-[250px] mt-4 flex items-center justify-center ">
         <button className="font-extralight  text-xl border-dark-border border p-2  text-dark-text hover:brightness-125">Add Banner Image</button>
        </div> */}
        <div className="mt-2 p-2 flex justify-between " >
          <div className="flex-col flex gap-4" >
              <Avatar name={session.user.name} time={moment(profile.createdAt).fromNow()}/>
              
              
          </div>
          
          <div className="flex-col flex gap-4">
              <div className=" flex  items-center gap-4  ">
                <p className="font-semibold ml-auto">1.2k Followers</p>
                {/* <button className="flex px-4 py-1 bg-blue-600 text-white text-sm rounded font-bold ">
                  <span>Follow</span>
                </button> */}
                <EditProfile p={profile} isOpen={isOpen} setIsOpen={setIsOpen}/> 
              </div>
              <Emotions/>
           </div>
        </div>
        <UserPrompts session={session}/>

      </div>
    </VendorLayout>
  )
}



const Emotions=()=>{
  const [like,setLike]=useState(0)
  const [dislike,setDislikes]=useState(0)
  const [happy,setHappy]=useState(0)
  const [sad,setSad]=useState(0)
  const [favorite,setFavorite]=useState(0)



  return(
    <div className=" relative flex gap-2  text-sm  ">
          <span className={`flex  items-center gap-2 bg-dark-muted   py-2 px-2 rounded-md cursor-pointer`} >
            <p className='text-red-500 text-sm'>❤</p>
            <p>{favorite} </p>
          </span>
          <span className={`flex  items-center gap-2 bg-dark-muted   py-2 px-2 rounded-md cursor-pointer`} >
            <p className='text-sm'>👍</p>
            <p>{like}</p>
          </span>
          <span className={`flex  items-center gap-2 bg-dark-muted   py-2 px-2 rounded-md cursor-pointer`} >
            <p className='text-sm'>👎</p>
            <p>{dislike}</p>
          </span>
          <span className={`flex  items-center gap-2 bg-dark-muted  py-2 px-2 rounded-md cursor-pointer`} >
            <p className='text-sm'>😂</p>
            <p>{happy}</p>
          </span>
          <span className={`flex  items-center gap-2 bg-dark-muted   py-2 px-2 rounded-md cursor-pointer`} >
            <p className='text-sm'>😥</p>
            <p>{sad}</p>
          </span>
        </div>
)}


const UserPrompts =({prompts,session})=>{

  const {products,fetchProductData}= useUserStore();
  const [loading,setLoading]= useState(true);
  useEffect(()=>{fetchProductData().then(()=>{ setLoading(false)})},[])


  
  return (
  <div className="p-2">
    <p className="font-bold text-2xl border-b  border-dark-border ">Prompts</p>
     { 
      loading ? '' :
      <div className="grid-cols-4 grid gap-4 mt-4">
        {products.map((p,i)=>(
            <div key={i} className="rounded border border-dark-border relative ">
              <Details p={p} product_id={p._id}   emotionsArray={p.EmotionId} user_id={session ? session.user.id :'123' } />
            <Link href={'/prompt/'+p.slug}  >
              <CldImage src={p.images[0]}
                  width={300}
                  height={400}
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

     </div>
  );

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
      console.log(res.data)
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
         <div class="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
        <p className="relative z-10 text-white px-1  ">{p.name}</p>

        <div className="relative" >
      <div class="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
      <div class="absolute inset-0 bg-opacity-50 backdrop-blur-sm bg-black "></div>  
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



const Avatar = ({time,name,flex,src='https://lh3.googleusercontent.com/a/AAcHTtfefauh4g1E36pf7scajv8IcTfWKziUCdajwWHjl8s8igc=s96-c'})=>{
  return (
    <div className={`flex items-center gap-2`}>
      <Image className=" rounded-full" alt='UserProfile' src={src} width={40} height={40}/>
    <div className={`text-dark-text ${flex ? 'flex items-center  gap-2 ' : ''} `}>
      <p className='text-sm font-bold'>{name}</p>
      <p className={`text-xs ${flex ? 'font-extralight ' : ''} `}>{time}</p>
    </div>
  </div>
  )


}




export async function getServerSideProps(context) {
  let session = await getServerAuthSession(context.req, context.res)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  session=JSON.parse(JSON.stringify(session))

  return {
    props: {
       session
    },
  };
}