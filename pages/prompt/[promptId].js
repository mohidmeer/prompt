import { getProduct } from '@/ApiRequests/explore';
import Head from 'next/head';
import PromptLayout from '@/layout/PromptLayout'
import { CldImage } from 'next-cloudinary';
import { BiDollar } from 'react-icons/bi';
import { MdVerified, MdVerifiedUser } from 'react-icons/md';
import { AiFillCopy, AiFillEye, AiFillHeart } from 'react-icons/ai';
import { IoIosShareAlt } from 'react-icons/io';
import { toast } from 'react-toastify';
import { AddToFavourites, buyThePrompt } from '@/ApiRequests/user';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { getServerAuthSession } from '../api/auth/[...nextauth]';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { BsCash, BsFlag, BsPlus } from 'react-icons/bs';
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
  const Buy = async (id)=>{
    if (session===null){
      toast.warn('You must login to purchase')
       return router.push('/login')
    }
   const st=  await buyThePrompt({id:id})
   window.location.href=st

  }

  return (
    <PromptLayout>
      <Head>
      <title>{Header.name}</title>
        <meta name="description" content={Header.description} />
      </Head>
      {loading ? <Loader/> :
      <>
        <Sidebar/>
        <div className='mt-8 p-4 lg:p-0 lg:w-1/2 mx-auto'>
          
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
            

            {/* {
              prompt.isPurchased ?  
              <button className='btn my-4' >
                Purchased
             </button>:
              <button className='btn' onClick={()=>{Buy(prompt._id)}}>
              Get This Prompt
             </button>

            } */}

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




const Sidebar  = () => {
  return (
    <div className=' fixed right-0 h-full w-1/5  bg-dark-light '>

      <div className='flex justify-between p-4 border-b border-dark-border '>
        <div className='flex items-center gap-2'>
          <Image className=" rounded-full" alt='UserProfile' src='https://lh3.googleusercontent.com/a/AAcHTtfefauh4g1E36pf7scajv8IcTfWKziUCdajwWHjl8s8igc=s96-c' width={32} height={32}/>
          <div className='text-dark-text'>
            <p className='text-sm'>Mohid Meer</p>
            <p className='text-xs'>2 days ago</p>
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <Share />
          <Report/>
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
                <IoIosShareAlt className=" text-white rounded-full text-3xl"/>
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
          <BsFlag className=" text-white  text-2xl"/>
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