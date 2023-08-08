
import VendorLayout from '@/layout/VendorLayout'
import { AddEmotions, getUserFavourites } from '@/ApiRequests/user';
import { Fragment, useEffect, useState } from 'react';
import { useUserStore } from '@/stores/user/user';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { getServerAuthSession } from '../api/auth/[...nextauth]';
import Head from 'next/head';
export default function Dashboard({session}) {
      const { favourites,fetchFavourites,purchases,fetchPurchases}  = useUserStore();
      useEffect(()=>{
        fetchFavourites();
        fetchPurchases();
      },[])

  return (
    <VendorLayout>
      <Head>
        <title>Your Account</title>
      </Head>
      <div className='flex justify-end p-8'>
          {/* <Link  className='btn-inverted' href={'/profile'} >Public Profile</Link> */}
      </div>
        <MyTabs favourites={favourites} purchases={purchases} session={session}  />
    </VendorLayout>
  )
}
function MyTabs({favourites,purchases ,session}) {
  return (
      <Tab.Group >
      <Tab.List className={`flex gap-4  justify-center`}>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'blue-btn' : 'blue-btn !bg-dark-hover'
              }
            >
              Favourites
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'blue-btn' : 'blue-btn !bg-dark-hover  '
              }
            >
              Purchases
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Products  products={favourites} session={session} label={'Favourites'} />
        </Tab.Panel>
        <Tab.Panel>
          <Products  products={purchases} session={session}  label={'Purchases'} />
        </Tab.Panel>
      </Tab.Panels>
      </Tab.Group>
  )
}



const Products=({products,label ,session})=>{
  return(
      <div>
        <p className='font-bold text-2xl'>{label}</p>
        <div className='mt-4  bg-dark-border h-[1px]  '/>
        { products.length==0 ?
           <div className='flex justify-center items-center h-80' >
              <p className='text-2xl text-dark-text opacity-50 '>{`You don't have any ${label} `}</p> 
           </div>  
           : 
           ''
        }

        <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4 bg-black w-1/2   sm:w-full mx-auto">
            {products && 
            products.map((p, i) => (
              <div key={i} className="rounded border border-dark-border relative p-2 ">
                  <Details p={p} 
                  product_id={p._id} 
                  emotionsArray={p.EmotionId} 
                  user_id={session ? session.user.id : '123'} />
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
              ))
            } 
          </div>
      </div>
  );
}

const Details = ({ p, user_id, emotionsArray, product_id, session }) => {
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
    await AddEmotions(product_id, e).then((res) => {
      console.log(res.data)
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
    <p className="p-1 bg-dark-info  rounded  text-white">{p.model.replace(/-/g, ' ')}</p>
  </div>
  <div className=" absolute bottom-2 left-0 right-0 mx-auto flex justify-center ">
    <div className="relative" >
      <div className="absolute inset-0 bg-opacity-70 backdrop-blur-sm bg-black rounded-xl "></div>  
      <div className=" relative flex gap-2 text-sm  overflow-hidden px-2  ">
     <span className={`flex items-center gap-1 
     ${isFav ? 'bg-dark-info/60  hover:brightness-150' : 'hover:bg-dark-muted' }  p-1 rounded-md cursor-pointer`} 
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