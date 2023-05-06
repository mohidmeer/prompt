
import VendorLayout from '@/layout/VendorLayout'
import Navbar from '@/components/vendor/Navbar'
import Container from '@/components/vendor/Container'
import { getUserFavourites } from '@/ApiRequests/user';
import { useEffect, useState } from 'react';
import { useUserStore } from '@/stores/user/user';






export default function Dashboard() {
      const { favourites,fetchFavourites}  = useUserStore();
      useEffect(()=>{fetchFavourites()})
  return (
    <VendorLayout>
      <Navbar/>
        <Container label={'Profile'}>
        <div className=' grid grid-cols-4  gap-4'>
          <p>Favourites</p>
           {JSON.stringify(favourites)}
        </div> 
        </Container>
    </VendorLayout>
  )
}

