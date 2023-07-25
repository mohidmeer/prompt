import { getProduct } from '@/ApiRequests/explore';
import Head from 'next/head';
import PromptLayout from '@/layout/PromptLayout'
import { CldImage } from 'next-cloudinary';
import { BiDollar } from 'react-icons/bi';
import { MdVerified, MdVerifiedUser } from 'react-icons/md';
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { AddToFavourites, buyThePrompt } from '@/ApiRequests/user';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getServerAuthSession } from '../api/auth/[...nextauth]';
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
  console.log(session)
   
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
        <div className='mt-4 p-4 lg:p-0 lg:w-1/2 mx-auto'>
          
            <div className='relative w-fit'>
              <CldImage src={prompt.images[0]}
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