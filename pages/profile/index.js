import Navbar from "@/components/vendor/Navbar";
import VendorLayout from "@/layout/VendorLayout";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "../api/auth/[...nextauth]";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import EditProfile from "@/components/Profile/EditProfile";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/ApiRequests/explore";
import { useUserStore } from "@/stores/user/user";
import moment from "moment/moment";
import Tippy from "@tippyjs/react";

export default  function Index({session}) {
  let [isOpen, setIsOpen] = useState(false)

  const {profile,fetchProfile}= useUserStore();
  const [loading,setLoading]= useState(true)

  useEffect(()=>{
    fetchProfile().then(()=>{setLoading(false)})
  },[]);


  return (
    <VendorLayout>
      <Navbar/>
      <div className="max-w-6xl mx-auto ">
        <div className="bg-gray-300 rounded  h-[250px] mt-4 flex ">
            <div style={{backgroundImage:`url(${session.user.image})`}} className="bg-no-repeat bg-cover w-40 h-40 bg-gray-500 border-white border-4 rounded-full mt-40 ml-10  " ></div>
        </div>
        <div className="flex justify-end p-2 mt-4 gap-4">
          {/* <button className="btn">Edit Profile</button> */}
          <EditProfile p={profile} isOpen={isOpen} setIsOpen={setIsOpen}/> 

          <Tippy  content={'Share your prompts across Social Media Platforms'} placement="right">
          <button className="!p-0">
            <img src="./images/smintlogo.png"  width={120}/>  
          </button>
          </Tippy>
          {/* <button className="btn">Follow <MdPlusOne/></button> */}
          </div>
         {loading ? <ProfileLoader/>:
        <>
         <p className=" text-3xl font-bold">@{profile.name}</p>
         <p className="font-bold text-sm my-2 text-gray-600">{profile.bio || "Welcome to where imagination knows no bounds. I'm a professional artist, on a journey to unleash the boundless potential of creativity. I strive to create high-resolution prompts that unleash the imagination of my clients."}</p>
         <div className="flex gap-4 mt-4 font-bold text-gray-600 text-sm justify-end">
           <p className="flex items-center gap-1"><AiFillEye/>{profile.views}</p>
           <p className="flex items-center gap-1"><AiFillHeart/>{profile.likes || 0}</p>
           <p className="flex items-center gap-1">{moment.utc(profile.createdAt).format("MMMM Do YYYY")}</p>
         </div>
         <div className="font-bold text-gray-600 text-sm flex gap-6 justify-end">
           <p>{profile.followers} Followers</p>
           <p>{profile.following || 0} Following</p>
          </div>  
         </>
         }



          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Popular Prompts</h2>
            <hr/>
              <Loader/>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Latest Prompts </h2>
            <hr/>
              <Loader/>
          </div>
      </div>
      
      
    </VendorLayout>
  )
}


const Loader = () => {
  const numberOfTimes = 9;
  const renderComponets = () => {
    const components = [];
    for (let i = 0; i < numberOfTimes; i++) {
      components.push(
        <div
          key={i}
          className="bg-gray-200 w-full h-[200px] card-shadow  animate-pulse relative flex flex-col justify-end  "
        >
          <div className="absolute top-2 left-2 w-16 h-5 bg-black/30"></div>
          <div className="w-full h-7 bg-black/30 justify-end"></div>
        </div>
      );
    }
    return components;
  };
  return (
    <div className="grid w-3/4 p-2  mx-auto sm:w-full sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 ">
      {renderComponets()}
    </div>
  );
};

const ProfileLoader =()=>{
  return(
    <div className=" animate-pulse">
    <p className=" text-2xl font-bold bg-gray-200 h-8 w-1/6"></p>
    <div className="flex gap-2 mt-2 font-bold text-gray-600 text-sm">
      <div className="text-2xl font-bold bg-gray-200 h-8 w-1/6"></div>
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