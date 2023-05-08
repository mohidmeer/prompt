import Navbar from "@/components/vendor/Navbar";
import VendorLayout from "@/layout/VendorLayout";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "../api/auth/[...nextauth]";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import EditProfile from "@/components/Profile/EditProfile";
import { useState } from "react";

export default  function index({session}) {
  let [isOpen, setIsOpen] = useState(false)
  return (
    <VendorLayout>
      <Navbar/>
      <div className="max-w-6xl mx-auto ">
        <div className="bg-gray-300 rounded  h-[250px] mt-4 flex ">
            <div style={{backgroundImage:`url(${session.user.image})`}} className="bg-no-repeat bg-cover w-40 h-40 bg-gray-500 border-white border-4 rounded-full mt-40 ml-10  " ></div>
        </div>
        <div className="flex justify-end p-2 mt-4 gap-4">
          {/* <button className="btn">Edit Profile</button> */}
          <EditProfile isOpen={isOpen} setIsOpen={setIsOpen}/>
          {/* <button className="btn">Follow <MdPlusOne/></button> */}
          
        </div>
          <p className=" text-3xl font-bold">@{session.user.name}</p>
          <div className="flex gap-2 mt-4 font-bold">
            <p className="flex items-center gap-1"><AiFillEye/>{'0'}</p>
            <p className="flex items-center gap-1"><AiFillHeart/>{'0'}</p>
            <p className="flex items-center gap-1">Joined: Jan 9, 2023</p>
          </div>

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