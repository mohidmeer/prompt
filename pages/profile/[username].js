import VendorLayout from "@/layout/VendorLayout";
import { getServerAuthSession } from "../api/auth/[...nextauth]";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AddEmotionsToProfile, followProfile, getUserPublicProfile } from "@/ApiRequests/user";
import moment from "moment/moment";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { BsDiscord, BsPlus } from "react-icons/bs";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/router";
import { AddEmotions } from "@/ApiRequests/user";
import { FaFacebookF } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import Head from "next/head";
import { useExplore } from "@/stores/explore";

export default function Index({ session ,Header}) {

  const [profile ,setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [Following, setFollowing] = useState(true);

  const router = useRouter();

   const fetchUserProfile = async() => {
    await getUserPublicProfile(router.query.username).then((d)=>{
      setProfile(d)
      setLoading(false)
      setFollowing(false);
    })
   
  
  }
   const handleFollowClick = async () => {
    if (!session){ return router.push('/login')}
    setFollowing(true)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await followProfile(profile.name, { type: "FOLLOW" });
    fetchUserProfile().then((r)=>{});
   }
  useEffect(()=>{
    fetchUserProfile();
  },[])

  return (
    <VendorLayout>
       <Head>
        <title>{Header.userId.name}</title>
        <meta name="description" content={Header.bio} />
      </Head>
      {!loading ? <div className="max-w-6xl mx-auto ">
            <div className="mt-2 p-2 flex justify-between">
              <div className="flex-col flex gap-4" >
                <Avatar name={profile.name} time={moment(profile.createdAt).fromNow()} src={profile.userId.avatar} />
                <Accounts profile={profile}/>
              </div>

              <div className="flex-col flex gap-4">
                <div className=" flex  items-center gap-4  ">
                  <p className="font-semibold ml-auto">{profile.followers} Followers</p>
                  
                        <button className={`flex px-4 py-1 ${profile.isFollowing  ? 'bg-red-600'  : 'bg-blue-600'  }
                          text-white text-sm rounded font-bold `} onClick={()=>{handleFollowClick()}}>
                        {Following ? <BtnLoader/> : '' }
                        {!session ? 'Sign in to Follow' :
                        <span>{profile.isFollowing ? 'Following'  : 'Follow'  }</span>
                        }
                        {/* <p>{JSON.stringify(profile.isFollowing)}</p> */}
                      </button>
                  
                </div>
                <Emotions 
                session={session} 
                user_id={session ? session.user.id : '123'}  
                e={profile.EmotionNumbers} 
                emotionsArray={profile.EmotionId} 
                profile_id={profile._id}  
                /> 
              </div>
            </div>
            <UserPrompts session={session} user_id={profile.userId._id} />

            </div>
       : <Loader/>  
      }
    </VendorLayout>
  )
}


const Emotions = ({e,emotionsArray,session,profile_id,user_id}) => {
  const router =useRouter()

  const [like,setLike]=useState(e.likes)
  const [dislike,setDislikes]=useState(e.dislikes)
  const [happy,setHappy]=useState(e.happy)
  const [sad,setSad]=useState(e.sad)
  const [favorite,setFavorite]=useState(e.favorites)

  const [isLiked,setIsLiked]=useState(emotionsArray.likes.includes(user_id))
  const [isDisliked,setIsDisliked]=useState(emotionsArray.dislikes.includes(user_id))
  const [isFav,setIsFav]=useState(emotionsArray.favorites.includes(user_id))
  const [isHappy,setIsHappy]=useState(emotionsArray.happy.includes(user_id))
  const [isSad,setIsSad]=useState(emotionsArray.sad.includes(user_id))

  const AddEmotionsToUserProfile = async(e)=>{
    if (!session){ return router.push('/login')}
    await AddEmotionsToProfile(profile_id,e).then((res)=>{
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
    <div className=" relative flex gap-2  text-sm  ">
      <span className={`flex  items-center gap-2   py-2 px-2 rounded-md 
      ${isFav ? 'bg-blue-500/40 hover:brightness-125  ' : 'hover:bg-dark-muted bg-dark-light ' } 
      cursor-pointer`} 
      onClick={()=>{AddEmotionsToUserProfile({emotionType:'Favorite'})}} >
        <p className='text-red-500 text-sm'>❤</p>
        <p>{favorite} </p>
      </span>
      <span className={`flex  items-center gap-2   py-2 px-2 rounded-md 
      ${isLiked ? 'bg-blue-500/40 hover:brightness-125  ' : 'hover:bg-dark-muted bg-dark-light' } cursor-pointer`}
      onClick={()=>{AddEmotionsToUserProfile({emotionType:'Like'})}}>
        <p className='text-sm'>👍</p>
        <p>{like}</p>
      </span>
      <span className={`flex  items-center gap-2   py-2 px-2 rounded-md 
      ${isDisliked ? 'bg-blue-500/40 hover:brightness-125 ' : 'hover:bg-dark-muted bg-dark-light' } cursor-pointer`} 
      onClick={()=>{AddEmotionsToUserProfile({emotionType:'Dislike'})}}>
        <p className='text-sm'>👎</p>
        <p>{dislike}</p>
      </span>
      <span className={`flex  items-center gap-2  py-2 px-2 rounded-md
      ${isHappy ? 'bg-blue-500/40 hover:brightness-125  ' : 'hover:bg-dark-muted bg-dark-light' }
      cursor-pointer`}
      onClick={()=>{AddEmotionsToUserProfile({emotionType:'Happy'})}} >
        <p className='text-sm'>😂</p>
        <p>{happy}</p>
      </span>
      <span className={`flex  items-center gap-2 
      ${isSad ? 'bg-blue-500/40 hover:brightness-125  ' : 'hover:bg-dark-muted bg-dark-light' } py-2 px-2 rounded-md cursor-pointer`}
      onClick={()=>{AddEmotionsToUserProfile({emotionType:'Sad'})}} >
        <p className='text-sm'>😥</p>
        <p>{sad}</p>
      </span>
    </div>
  )
}

const UserPrompts = ({ session ,user_id }) => {
  const {profileProducts,fetchProfileProductData}=useExplore(); 
  const [loading, setLoading] = useState(true);
  useEffect(() => { fetchProfileProductData(user_id).then(() => { setLoading(false) }) }, [])

  return (
    <div className="p-2 mt-4">
      <p className="font-bold text-2xl border-b  border-dark-border ">More prompts </p>
      {
        loading ? '' :
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4 bg-black p-2 w-1/2   sm:w-full mx-auto">
            {profileProducts.map((p, i) => (
              <div key={i} className="rounded border border-dark-border relative ">
                <Details p={p} product_id={p._id} emotionsArray={p.EmotionId} user_id={session ? session.user.id : '123'} />
                <Link href={'/prompt/' + p.slug}  >
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

const Details = ({ p, user_id, emotionsArray, product_id, session }) => {
  const router = useRouter()
  const [like, setLike] = useState(p.EmotionNumbers.likes)
  const [dislike, setDislikes] = useState(p.EmotionNumbers.dislikes)
  const [happy, setHappy] = useState(p.EmotionNumbers.happy)
  const [sad, setSad] = useState(p.EmotionNumbers.sad)
  const [favorite, setFavorite] = useState(p.EmotionNumbers.favorites)

  const [isLiked, setIsLiked] = useState(emotionsArray.likes.includes(user_id))
  const [isDisliked, setIsDisliked] = useState(emotionsArray.dislikes.includes(user_id))
  const [isFav, setIsFav] = useState(emotionsArray.favorites.includes(user_id))
  const [isHappy, setIsHappy] = useState(emotionsArray.happy.includes(user_id))
  const [isSad, setIsSad] = useState(emotionsArray.sad.includes(user_id))

  const AddEmotionsToPrompt = async (e) => {
    if (!session) { return router.push('/login') }
    await AddEmotions(product_id, e).then((res) => {
      switch (res.data.action) {
        case 'LIKE':
          if (res.status === 201) {
            setLike(like + 1)
            setIsLiked(true)
          } else if (res.status === 202) {
            setLike(like - 1)
            setIsLiked(false)
          }
          break;
        case 'DISLIKE':
          if (res.status === 201) {
            setDislikes(dislike + 1)
            setIsDisliked(true)
          } else if (res.status === 202) {
            setDislikes(dislike - 1)
            setIsDisliked(false)
          }
          break;
        case 'FAVORITE':
          if (res.status === 201) {
            setFavorite(favorite + 1)
            setIsFav(true)
          } else if (res.status === 202) {
            setFavorite(favorite - 1)
            setIsFav(false)
          }
          break;
        case 'HAPPY':
          if (res.status === 201) {
            setHappy(happy + 1)
            setIsHappy(true)
          } else if (res.status === 202) {
            setIsHappy(false)
            setHappy(happy - 1)
          }
          break;
        case 'SAD':
          if (res.status === 201) {
            setSad(sad + 1)
            setIsSad(true)
          } else if (res.status === 202) {
            setSad(sad - 1)
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
        <p className="p-1 bg-dark-info text-white rounded ">{p.model.replace(/-/g, ' ')}</p>
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

const Avatar = ({ time, name, flex, src = '' }) => {
  return (
    <div className={`flex items-center gap-2`}>
      <Image className=" rounded-full" alt='UserProfile' src={src} width={40} height={40} />
      <div className={`text-dark-text ${flex ? 'flex items-center  gap-2 ' : ''} `}>
        <p className='text-sm font-bold'>{name}</p>
        <p className={`text-xs ${flex ? 'font-extralight ' : ''} `}>{time}</p>
      </div>
    </div>
  )


}

const Accounts = ({profile}) => {

  return(
    <div className=" relative flex justify-between  text-sm p-2 gap-4   ">
      <Tippy content={profile.facebook} placement="bottom">
        <Link href={'https://'+profile.facebook}><FaFacebookF className="bg-dark-light p-2 cursor-pointer  rounded-md " size={40} /></Link>
      </Tippy>
      <Tippy content={profile.twitter} placement="bottom">
        <Link href={'https://'+profile.twitter}><AiOutlineTwitter className="bg-dark-light p-2 cursor-pointer  rounded-md " size={40} /></Link>
      </Tippy>
      <Tippy content={profile.instagram} placement="bottom">
        <Link href={'https://'+profile.instagram}><AiFillInstagram className="bg-dark-light p-2 cursor-pointer  rounded-md " size={40} /></Link>
      </Tippy>
      <Tippy content={profile.discord} placement="bottom">
        <Link href={'https://'+profile.discord}><BsDiscord className="bg-dark-light p-2 cursor-pointer  rounded-md " size={40} /></Link>
      </Tippy>
      <Tippy content={profile.youtube} placement="bottom">
        <Link href={'https://'+profile.youtube}><AiFillYoutube className="bg-dark-light p-2 cursor-pointer  rounded-md " size={40} /></Link>
      </Tippy>
      <Tippy content={profile.website} placement="bottom">
        <Link href={'https://'+profile.website}><BiGlobe className="bg-dark-light p-2 cursor-pointer  rounded-md " size={40} /></Link>
      </Tippy>
  </div>
  )
}




function BtnLoader(){
return(
  <svg aria-hidden="true" className="w-4 h-4 mt-[2px] mr-2 text-gray-400 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
)
}


function Loader() {
  return (
    <div className='flex justify-center h-screen items-center '>
        <div className='mt-2 p-4 mx-auto rounded-xl '>
            <div className=' rounded-xl'>
                <svg aria-hidden="true" className="w-20 h-20 mt-[2px] mr-2 text-gray-400 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            </div>
        </div>
      </div>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const Header = await getUserPublicProfile(params.username);
  let session = await getServerAuthSession(context.req, context.res)
  // If the data is not found, return a 404 page
  if (!Header) {
    return {
      notFound: true,
    };
  }
  session=JSON.parse(JSON.stringify(session))
  return {
    props: {
      session,Header
    },
  };
}