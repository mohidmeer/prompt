import Navbar from "@/components/Navbar";
import Card from "@/components/user/card";
import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { MdLayers } from "react-icons/md";
import { RiSailboatFill } from "react-icons/ri";
import ExploreLayout from "@/layout/ExploreLayout";
import { BiPaint } from "react-icons/bi";

import SideBar from "@/components/ExplorePage/SideBar";
import { useRouter } from "next/router";
import { CldImage } from "next-cloudinary";
import Link from 'next/link'
import { useExplore } from "@/stores/explore";
import Head from "next/head";

export default function Explore() {
  const router= useRouter();
  const [loading,setLoading]=useState(true)
  const {products,fetchProductData}= useExplore()
  const [promptQuery,setPromptQuery]=useState()
  const [ model, setModel ] = useState('all');
  
  
  const removeQueryParam = (param) => {
    const query = new URLSearchParams(router.query)
    query.delete(param)
    router.push({
      pathname: router.pathname,
      search: query.toString(),
    })
  }

  useEffect(()=>{
    if (router.query['model']){
      setModel(router.query['model'])
      console.log(router.query['model'])
    }
  },[router.query.model])

  useEffect(()=>{
    
    if (model==='all'){
        removeQueryParam('model')
    }else{
        router.query.model=model
        router.push({ pathname: router.pathname,query:router.query})
        
    }
    setPromptQuery(window.location.href)
    
   
   },[model])


   useEffect(()=>{
      // axios.get('/api/products'+'?'+window.location.href.split('?')[1])
      fetchProductData(window.location.href.split('?')[1]).then(()=>setLoading(false))
      console.log('EXECUTED FETCH PRODUCTS')
      // setLoading(false)
   },[router])
  
  return (
    <ExploreLayout>
      <Head>
      <title>Explore</title>
        <meta name="description" content='Browse All The Prompts' />
      </Head>
      <Navbar />
      <div className="border-gray-300 border-b flex md:justify-end items-center p-2 my-6 sticky top-0 bg-white z-10 ">
        <ModelFilter plan={model} set={setModel} />
      </div>
      <SideBar pq={promptQuery} spq={setPromptQuery} />
      <div className="p-4 sm:ml-60">

        {loading ? <Loader/>  :    
         <Products products={products} />   }
      </div>
    </ExploreLayout>
  );
}

const Loader = () => {
  const numberOfTimes = 20;
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

const ModelFilter = ({ plan, set }) => {
  return (
    <RadioGroup
      value={plan}
      onChange={set}
      className={`
    flex
    gap-4 my-2 border-2 
    border-black cursor-pointer
    overflow-x-auto 
    `}
    >
      <RadioGroup.Option value="all">
        {({ checked }) => (
          <span
            className={`${checked ? "bg-black text-white " : ""
              } flex p-4  font-bold items-center gap-2 `}
          >
            <MdLayers className="text-2xl" /> All
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="midjourney">
        {({ checked }) => (
          <span
            className={`${checked ? "bg-black text-white " : ""
              } p-4 flex font-bold items-center gap-2  `}
          >
            <RiSailboatFill className="text-2xl"/> Midjourney
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="chat-gpt">
        {({ checked }) => (
          <span
            className={`${checked ? "bg-black text-white " : ""
              } p-4 flex font-bold items-center gap-2  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 671.194 680.2487"
            >
              <path
                fill={`${checked ? "#ffff" : "#000"}`}
                d="M626.9464,278.4037a169.4492,169.4492,0,0,0-14.5642-139.187A171.3828,171.3828,0,0,0,427.7883,56.9841,169.45,169.45,0,0,0,299.9746.0034,171.3985,171.3985,0,0,0,136.4751,118.6719,169.5077,169.5077,0,0,0,23.1574,200.8775,171.41,171.41,0,0,0,44.2385,401.845,169.4564,169.4564,0,0,0,58.8021,541.0325a171.4,171.4,0,0,0,184.5945,82.2318A169.4474,169.4474,0,0,0,371.21,680.2454,171.4,171.4,0,0,0,534.7642,561.51a169.504,169.504,0,0,0,113.3175-82.2063,171.4116,171.4116,0,0,0-21.1353-200.9ZM371.2647,635.7758a127.1077,127.1077,0,0,1-81.6027-29.5024c1.0323-.5629,2.8435-1.556,4.0237-2.2788L429.13,525.7575a22.0226,22.0226,0,0,0,11.1306-19.27V315.5368l57.25,33.0567a2.0332,2.0332,0,0,1,1.1122,1.568V508.2972A127.64,127.64,0,0,1,371.2647,635.7758ZM97.3705,518.7985a127.0536,127.0536,0,0,1-15.2074-85.4256c1.0057.6037,2.7624,1.6768,4.0231,2.4012L221.63,514.01a22.04,22.04,0,0,0,22.2492,0L409.243,418.5281v66.1134a2.0529,2.0529,0,0,1-.818,1.7568l-136.92,79.0534a127.6145,127.6145,0,0,1-174.134-46.6532ZM61.7391,223.1114a127.0146,127.0146,0,0,1,66.3545-55.8944c0,1.1667-.067,3.2329-.067,4.6665V328.3561a22.0038,22.0038,0,0,0,11.1173,19.2578l165.3629,95.4695-57.2481,33.055a2.0549,2.0549,0,0,1-1.9319.1752l-136.933-79.1215A127.6139,127.6139,0,0,1,61.7391,223.1114ZM532.0959,332.5668,366.7308,237.0854l57.25-33.0431a2.0455,2.0455,0,0,1,1.93-.1735l136.934,79.0535a127.5047,127.5047,0,0,1-19.7,230.055V351.8247a21.9961,21.9961,0,0,0-11.0489-19.2579Zm56.9793-85.7589c-1.0051-.6174-2.7618-1.6769-4.0219-2.4L449.6072,166.1712a22.07,22.07,0,0,0-22.2475,0L261.9963,261.6543V195.5409a2.0529,2.0529,0,0,1,.818-1.7567l136.9205-78.988a127.4923,127.4923,0,0,1,189.34,132.0117ZM230.8716,364.6456,173.6082,331.589a2.0321,2.0321,0,0,1-1.1122-1.57V171.8835A127.4926,127.4926,0,0,1,381.5636,73.9884c-1.0322.5633-2.83,1.5558-4.0236,2.28L242.0957,154.5044a22.0025,22.0025,0,0,0-11.1306,19.2566Zm31.0975-67.0521L335.62,255.0559l73.6488,42.51v85.0481L335.62,425.1266l-73.6506-42.5122Z"
              />
            </svg>
            ChatGpt
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="prompt">
        {({ checked }) => (
          <span
            className={`${checked ? "bg-black text-white " : ""
              } p-4 flex font-bold items-center gap-2  `}
          >
            <div
              className={`${checked ? " bg-white" : "bg-black"
                } w-6 h-6 rounded-tr-lg rounded-bl-lg`}
            ></div>
            PromptWorks
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="dalle">
        {({ checked }) => (
          <span
            className={`${checked ? "bg-black text-white " : ""
              } p-4 flex font-bold items-center gap-2  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 671.194 680.2487"
            >
              <path
                fill={`${checked ? "#ffff" : "#000"}`}
                d="M626.9464,278.4037a169.4492,169.4492,0,0,0-14.5642-139.187A171.3828,171.3828,0,0,0,427.7883,56.9841,169.45,169.45,0,0,0,299.9746.0034,171.3985,171.3985,0,0,0,136.4751,118.6719,169.5077,169.5077,0,0,0,23.1574,200.8775,171.41,171.41,0,0,0,44.2385,401.845,169.4564,169.4564,0,0,0,58.8021,541.0325a171.4,171.4,0,0,0,184.5945,82.2318A169.4474,169.4474,0,0,0,371.21,680.2454,171.4,171.4,0,0,0,534.7642,561.51a169.504,169.504,0,0,0,113.3175-82.2063,171.4116,171.4116,0,0,0-21.1353-200.9ZM371.2647,635.7758a127.1077,127.1077,0,0,1-81.6027-29.5024c1.0323-.5629,2.8435-1.556,4.0237-2.2788L429.13,525.7575a22.0226,22.0226,0,0,0,11.1306-19.27V315.5368l57.25,33.0567a2.0332,2.0332,0,0,1,1.1122,1.568V508.2972A127.64,127.64,0,0,1,371.2647,635.7758ZM97.3705,518.7985a127.0536,127.0536,0,0,1-15.2074-85.4256c1.0057.6037,2.7624,1.6768,4.0231,2.4012L221.63,514.01a22.04,22.04,0,0,0,22.2492,0L409.243,418.5281v66.1134a2.0529,2.0529,0,0,1-.818,1.7568l-136.92,79.0534a127.6145,127.6145,0,0,1-174.134-46.6532ZM61.7391,223.1114a127.0146,127.0146,0,0,1,66.3545-55.8944c0,1.1667-.067,3.2329-.067,4.6665V328.3561a22.0038,22.0038,0,0,0,11.1173,19.2578l165.3629,95.4695-57.2481,33.055a2.0549,2.0549,0,0,1-1.9319.1752l-136.933-79.1215A127.6139,127.6139,0,0,1,61.7391,223.1114ZM532.0959,332.5668,366.7308,237.0854l57.25-33.0431a2.0455,2.0455,0,0,1,1.93-.1735l136.934,79.0535a127.5047,127.5047,0,0,1-19.7,230.055V351.8247a21.9961,21.9961,0,0,0-11.0489-19.2579Zm56.9793-85.7589c-1.0051-.6174-2.7618-1.6769-4.0219-2.4L449.6072,166.1712a22.07,22.07,0,0,0-22.2475,0L261.9963,261.6543V195.5409a2.0529,2.0529,0,0,1,.818-1.7567l136.9205-78.988a127.4923,127.4923,0,0,1,189.34,132.0117ZM230.8716,364.6456,173.6082,331.589a2.0321,2.0321,0,0,1-1.1122-1.57V171.8835A127.4926,127.4926,0,0,1,381.5636,73.9884c-1.0322.5633-2.83,1.5558-4.0236,2.28L242.0957,154.5044a22.0025,22.0025,0,0,0-11.1306,19.2566Zm31.0975-67.0521L335.62,255.0559l73.6488,42.51v85.0481L335.62,425.1266l-73.6506-42.5122Z"
              />
            </svg>
            DALL·E
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="stable-diffusion">
        {({ checked }) => (
          <span
            className={`${checked ? "bg-black text-white " : ""
              } p-4 flex font-bold items-center gap-2  `}
          >
        <BiPaint/>
            StableDiff
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};


const Products=({products})=>{
  return(
    <div className="grid w-3/4 p-2  mx-auto sm:w-full sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 ">
        {products.map((p)=>(
          <Link key={p._id} href={'/prompt/'+p.slug}>
          <div className="shadow-lg shadow-black/50
          relative 
          cursor-pointer
          pop-up">
        
          <CldImage   
              src={p.images[0]}
              alt={p.name}
              width={500}
              height={250}
              sizes="50w"
              crop="fill"
              draggable='false'
              unselectable='off' 
              />
          <p  className="
              bg-black/80 
              absolute top-2 left-2 
              text-xs 
              rounded p-1 
              text-white 
              inline">{p.model}</p>
              <div className=" flex justify-between bg-black/50 ">
                  <p className=" px-2 text-white font-semibold line-clamp-1  ">{p.name}</p>
                  <p className=" px-2 text-white font-semibold">{p.price +'$'}</p>
              </div>
        
      </div>
          
          
          </Link>
        ))}
      </div>
  );
}



