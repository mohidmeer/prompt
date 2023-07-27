import { getProduct } from '@/ApiRequests/explore';
import { getServerAuthSession } from '../api/auth/[...nextauth]';
import Head from 'next/head';
import PromptLayout from '@/layout/PromptLayout'
import { CldImage } from 'next-cloudinary';
import { BiDollar } from 'react-icons/bi';
import { MdOutlineCancel, MdVerified, MdVerifiedUser } from 'react-icons/md';
import { AiFillCopy, AiFillEye, AiFillHeart, AiFillLike } from 'react-icons/ai';
import { IoIosShareAlt } from 'react-icons/io';
import { toast } from 'react-toastify';
import { AddToFavourites, buyThePrompt } from '@/ApiRequests/user';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import {  BsFillHeartFill, BsFlag, BsPlus } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import InputBox from '@/components/InputBox';
export default function Prompt({Header,session}){

  const router = useRouter();
  const [prompt,setprompt]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
     if(router.query.promptId===undefined){
      return;
     }
      getProduct(router.query.promptId)
      .then((d)=>{
        setprompt(d); setLoading(false);})
     
  },[router.query,prompt])

  const  AddToFav = async (id)=>{
      AddToFavourites(id)
      getProduct(router.query.promptId).then((d)=>{setprompt(d) ;setLoading(false);});
  }
  

  return (
    <PromptLayout>
      <Head>
      <title>{Header.name}</title>
        <meta name="description" content={Header.description} />
      </Head>
      {loading ? <Loader/> :
      <>
        <Sidebar prompt={prompt} session={session}/>
        <div className='mt-8 p-4 mx-auto sm:w-1/2      '>
          
            <div className='relative w-fit '>
              <CldImage src={prompt.images[0]}
              className='border border-dark-border rounded-md'
              width={800}
              height={1000}
              sizes="50w"
              crop='fit'
              alt={prompt.name}
       
              unselectable='off' 
              />
              {/* <p className='absolute top-4 left-2 p-1 bg-black/70 text-white font-bold text-sm'>{prompt.model}</p> */}
            </div>
            {/* <div className='my-4 flex gap-8 text-lg font-bold  '>
              <p>{prompt.description.length} words </p>
              <p className='flex items-center gap-1'>Tested <MdVerified/></p>
              <p className='flex items-center gap-1'>320<AiFillEye/></p>
              <p onClick={()=>AddToFav(prompt._id)} 
              className={ `${prompt.isFav ? 'text-black ':'' } flex items-center gap-1 `}>
                <AiFillHeart className=' cursor-pointer'  />{prompt.favourites}</p>
            </div> */}
            {/* <div className='flex gap-8 text-sm font-bold   '>
               <p className='flex items-center gap-1 cursor-pointer'>@profilename <MdVerifiedUser/></p>
            </div>
            <hr className='mr-10  bg-black'/>

            <div className='mt-10 pr-10'>
              <h3 className='font-bold text-2xl'>Description</h3>
            <p className=' font-bold text-gray-600 '>
              {prompt.description}
            </p>
              {
                prompt.isPurchased ?
                <>
                <h3 className='font-bold text-2xl mt-4'>Instructions</h3>
                <p className=' font-bold text-gray-600 '>
                 {prompt.instructions}
                </p>
                </>:
               <h3 className='text-4xl font-bold my-4 text-gray-600 flex items-center '><span className='text-xl'><BiDollar/> </span> {prompt.price }</h3>
              }
            </div> */}

        </div>
      </>
      }
    </PromptLayout>
  )
}

 function Loader() {
  return (
    <PromptLayout>
      <div className='mt-4 w-1/2 animate-pulse'>
        <div className='shadow-xl  shad bg-gray-200 w-full h-[350px] card-shadow   relative'>
          <p className='absolute top-4 left-2 px-8 p-2 bg-black/30 text-white font-bold text-sm'></p>
        </div>
        <div className='my-4 flex gap-8 text-lg font-bold  '>
              <p className='flex items-center gap-1 bg-gray-300 w-8 h-2'></p>
              <p className='flex items-center gap-1 bg-gray-300 w-8 h-2'></p>
              <p className='flex items-center gap-1 bg-gray-300 w-8 h-2'></p>
             
            </div>

            <div className='mt-5 flex flex-col gap-2 '>
              <div className='bg-gray-200   h-6'></div>
              <div className='bg-gray-200   h-6'></div>
              <div className='bg-gray-200   h-6'></div>
              <div className='bg-gray-200   h-6'></div>
            </div> 
            <h3 className='text-4xl font-bold my-4 text-gray-600 flex items-center '><span className='text-xl'><BiDollar/> </span></h3>
            <button className='btn !text-transparent !bg-gray-300'>
              Get This Prompt
            </button>

      </div>

    </PromptLayout>
  )
}




const Sidebar  = ({prompt,session}) => {
  const router = useRouter();
  return (
    <div className=' fixed right-0 h-full  z-10 md:block  bg-dark-light border-l border-dark-border hidden  max-w-sm '>

      <div className='flex justify-between p-4 border-b border-dark-border '>
        <Avatar time={'2 days ago'} name={'Mohid Meer'}/>
        <div className='flex gap-4 items-center'>
          <Share />
          <Report/>
          <MdOutlineCancel onClick={()=>{router.back()}} className='text-2xl cursor-pointer'/>
        </div>
      </div>
      
      <div className=' h-full overflow-y-auto '>
          <Emotions/>
          <div className='p-4 bg-dark-background  text-dark-body flex flex-col gap-8'>
            <hr className=" relative text-center hr-text  -mx-4" data-content="Comments"/>
              <AddComment/>
              <CommentsContainer />
          </div>
          <hr className=" relative  text-center hr-text mt-4  -mx-4" data-content="Genaration Data"/>
          <div className='p-4 '>
            <PromptDescription description={prompt.description} />
            <PromptInstructions session={session} id={prompt._id}  purchased={prompt.isPurchased} instructions={prompt.instructions} />
          </div>
      </div>


    </div>
  )
}






const Share = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button >    
                <IoIosShareAlt className=" text-white rounded-full text-2xl"/>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="
            absolute right-0  z-10
            mt-2 w-32  
            divide-y divide-dark-border
            text-gray-300   
            rounded-md 
            bg-dark-light  shadow-lg 
            ring-1 ring-black 
            ring-opacity-5 ">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button  onClick={()=>{navigator.clipboard.writeText(window.location.href);toast.info('Copied')}}
                      className={`${
                        active ? 'bg-dark-hover ' : ''
                      } group flex flex-col w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                     >
                       <AiFillCopy className="text-2xl"/> 
                      <span>Copy</span>
                    </button>
                  )}
                </Menu.Item>
              </div>             
            </Menu.Items>
          </Transition>
        </Menu>
  )
}

const Report =()=>{
  return(
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button >    
          <BsFlag className=" text-white  text-xl"/>
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="
      absolute right-0  z-10
      mt-2 w-32  
      divide-y divide-dark-border
      text-gray-300   
      rounded-md 
      bg-dark-light  shadow-lg 
      ring-1 ring-black 
      ring-opacity-5 ">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button  onClick={()=>{navigator.clipboard.writeText(window.location.href);toast.info('Copied')}}
                className={`${
                  active ? 'bg-dark-hover ' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
               >
                <span>Mature Content</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button  onClick={()=>{navigator.clipboard.writeText(window.location.href);toast.info('Copied')}}
                className={`${
                  active ? 'bg-dark-hover ' : ''
                } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
               >
                <span>TOS Violation</span>
              </button>
            )}
          </Menu.Item>
        </div>             
      </Menu.Items>
    </Transition>
  </Menu>
  )
}

const Avatar = ({time,name})=>{

  return (

    <div className='flex items-center gap-2'>
    <Image className=" rounded-full" alt='UserProfile' src='https://lh3.googleusercontent.com/a/AAcHTtfefauh4g1E36pf7scajv8IcTfWKziUCdajwWHjl8s8igc=s96-c' width={32} height={32}/>
    <div className='text-dark-text'>
      <p className='text-sm'>{name}</p>
      <p className='text-xs'>{time}</p>
    </div>
  </div>
  )


}

const AddComment = ()=>{
  return (
    <>
      <div className='flex items-start gap-2'>
        <Avatar/>
        <textarea  className='input-box rounded-md resize-y border focus:outline-none focus:ring-2 focus:ring-blue-500' 
         style={{  overflowY: 'hidden' }}
         placeholder='Type your comment' />
      </div>    
    </>
  )
}

const CommentsContainer=()=>{
 return(
  <div className='relative'>
    <Avatar name={'Mr candy'} time={'2 minutes ago'}/>
      <p className='text-sm ml-10 mt-2 text-dark-text        '>Curious about how I created this image?
      If you're an art enthusiast and love exploring the creative process, I extend a warm invitation to join my Discord community. 
      Together, we'll delve into the world of art, share our creations, discover new trends, and support each other in our artistic journeys.
      </p>
  </div>
 )

}

const Emotions=()=>{
  return(
    <div className=" relative flex gap-7  text-sm p-4 border-b border-dark-border">
          <span className="flex flex-col items-center gap-1 hover:bg-dark-muted px-2 rounded-md cursor-pointer ">
            <p className='text-red-500 text-2xl'>❤</p>
            <p >1.6k</p>
          </span>
          <span className="flex flex-col items-center gap-1   hover:bg-dark-muted px-2 rounded-md cursor-pointer ">
            <p className='text-2xl'>👍</p>
            <p>1.2k</p>
          </span>
          <span className="flex flex-col items-center gap-1   hover:bg-dark-muted px-2 rounded-md cursor-pointer ">
            <p className='text-2xl'>👎</p>
            <p>2.1k</p>
          </span>
          <span className="flex flex-col items-center gap-1   hover:bg-dark-muted px-2 rounded-md cursor-pointer ">
            <p className='text-2xl'>😂</p>
            <p>300</p>
          </span>
          <span className="flex flex-col items-center gap-1   hover:bg-dark-muted px-2 rounded-md cursor-pointer ">
            <p className='text-2xl'>😥</p>
            <p>20</p>
          </span>
        </div>
)}

const PromptDescription=({description})=>{
  return(
  <div className=''>
    <p className='text-dark-text '>Description</p>
     <div className='bg-dark-border rounded-md text-sm  font-mono  max-h-[400px] overflow-y-auto p-2 mt-2 '>
         {description}
     </div>
  </div>
)}

const PromptInstructions=({session,id,purchased,instructions})=>{

  const Buy = async ()=>{
    if (session===null){
      toast.warn('You must login to purchase')
       return router.push('/login')
    }
   const st=  await buyThePrompt({id:id})
   window.location.href=st
  }
 return(
  <div className='mt-4 relative'>
    <div className='flex justify-between items-center'>
    <p className='text-dark-text '>Instructions</p>
      {purchased && <AiFillCopy className='cursor-pointer ' onClick={()=>{navigator.clipboard.writeText(instructions);toast.info('Copied')}}/> }
    </div>
    {purchased ? <div className='bg-dark-border rounded-md text-sm  font-mono  max-h-[300px] overflow-y-auto p-2 mt-2 mb-4   select-none '>{instructions}</div> :
        <>
            <div className='bg-dark-border rounded-md text-sm  font-mono  max-h-[300px] overflow-y-auto p-2 mt-2 mb-4 blur-sm  select-none '>
            Lorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typuLorem Ipsum i and scrsponic typuLorem Ipsum is sd typesetting industry. Ls own  and scrsponic typunchain the 1ntaining Loremgre recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <button className='btn  rounded-md  absolute top-[30%] left-[25%] mx-auto  z-10' onClick={()=>{Buy()}}>
                      Get This Prompt
            </button>
        </>
    }
    <div className='h-[150px]'></div>
</div>
 )
}






export async function getServerSideProps(context) {
  const { params } = context;
  const Header = await getProduct(params.promptId);
  let session = await getServerAuthSession(context.req, context.res)

  // If the data is not found, return a 404 page
  if (!Header) {
    return {
      notFound: true,
    };
  }
  session=JSON.parse(JSON.stringify(session))
  // Otherwise, return the data as props
  return {
    props: {
      Header,session
    },
  };
}