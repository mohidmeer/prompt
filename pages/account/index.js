
import VendorLayout from '@/layout/VendorLayout'
import { getUserFavourites } from '@/ApiRequests/user';
import { Fragment, useEffect, useState } from 'react';
import { useUserStore } from '@/stores/user/user';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { getServerAuthSession } from '../api/auth/[...nextauth]';
export default function Dashboard() {
      const { favourites,fetchFavourites,purchases,fetchPurchases}  = useUserStore();
      useEffect(()=>{
        fetchFavourites();
        fetchPurchases();
      },[])

  return (
    <VendorLayout>
      <div className='flex justify-end p-8'>
          <Link  className='btn-inverted' href={'/profile'} >Public Profile</Link>
      </div>
        <MyTabs favourites={favourites} purchases={purchases}  />
    </VendorLayout>
  )
}
function MyTabs({favourites,purchases}) {
  return (
      <Tab.Group  >
      <Tab.List className={`flex gap-4 mt-8 justify-center`}>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'btn' : 'btn-inverted'
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
                selected ? 'btn' : 'btn-inverted'
              }
            >
              Purchases
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Products  products={favourites} label={'Favourites'} />
        </Tab.Panel>
        <Tab.Panel>
          <Products  products={purchases}  label={'Purchases'} />
        </Tab.Panel>
      </Tab.Panels>
      </Tab.Group>
  )
}



const Products=({products,label})=>{
  return(
      <div>
        <p className='font-bold text-2xl'>{label}</p>
        <hr className='mt-4'/>

      <div className="grid w-3/4 p-2  mx-auto sm:w-full sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 ">
        {products && products.map((p)=>(
          <Link key={p._id} href={'/prompt/'+p.slug}>
          <div className="  shadow-lg shadow-black/50
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
      </div>
   
  );
}





export async function getServerSideProps(context) {
  const session = await getServerAuthSession(context.req, context.res)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      
    },
  };
}