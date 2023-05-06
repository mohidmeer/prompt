import { getProduct } from '@/ApiRequests/explore';
import Head from 'next/head';
import Navbar from '@/components/Navbar'
import AppLayout from '@/layout/AppLayout'
import { CldImage } from 'next-cloudinary';
import { BiDollar } from 'react-icons/bi';
import { MdVerified, MdVerifiedUser } from 'react-icons/md';
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { AddToFavourites } from '@/ApiRequests/user';
import { useRouter } from 'next/router';
export default  function Prompt({prompt}){


  const router = useRouter();

  const  AddToFav = async (id,name)=>{
      AddToFavourites(id)
      console.log(prompt)
      router.replace(router.asPath);
  }
  
  return (
    <AppLayout>
      <Head>
        <title>{prompt.name }</title>
        <meta name="description" content={prompt.description} />
      </Head>
        <Navbar/>
        <div className='mt-4 w-1/2'>
          
            <div className='relative  shadow-xl shadow-gray-500/50 w-fit shad'>
              <CldImage src={prompt.images[0]}
              width={700}
              height={300}
              sizes="50w"
              crop="fill"
              draggable='false'
              unselectable='off' 
              />
              <p className='absolute top-4 left-2 p-1 bg-black/70 text-white font-bold text-sm'>{prompt.model}</p>
            </div>
            <div className='my-4 flex gap-8 text-lg font-bold text-gray-500 '>
              <p>{prompt.description.length} words </p>
              <p className='flex items-center gap-1'>Tested <MdVerified/></p>
              <p className='flex items-center gap-1'>320<AiFillEye/></p>
              <p onClick={()=>AddToFav(prompt._id)} 
              className={ `${prompt.isFav ? 'text-black ':'' } flex items-center gap-1 `}>
                <AiFillHeart  />{prompt.favourites}</p>
            </div>
            <div className='flex gap-8 text-sm font-bold text-gray-500  '>
               <p className='flex items-center gap-1 cursor-pointer'>@profilename <MdVerifiedUser/></p>
            </div>
            <hr className='mr-10  bg-black'/>

            <div className='mt-10 pr-10'>
            <p classname='text-xl font-bold truncate'>
              {prompt.description}
            </p>
            </div>
            <h3 className='text-4xl font-bold my-4 text-gray-600 flex items-center '><span className='text-xl'><BiDollar/> </span> {prompt.price }</h3>

            <button className='btn' onClick={()=>{toast.success('Waiting For Stripe integration')}}>
              Get This Prompt
            </button>

        </div>
    </AppLayout>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;
  let prompt = await getProduct(query.promptId);
  console.log(prompt)
  return {
    props: {
      prompt
    }
  };
}

