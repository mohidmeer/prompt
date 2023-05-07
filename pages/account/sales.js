import VendorLayout from '@/layout/VendorLayout'
import Navbar from '@/components/vendor/Navbar'
import Container from '@/components/vendor/Container'
import { getServerAuthSession } from '../api/auth/[...nextauth]'


export default function Orders() {
  return (
    <VendorLayout>
      <Navbar/>
        <Container label={'Sales'}>
        <div className=' grid grid-cols-4  gap-4'>
          <div className='bg-gray-400 rounded p-10'></div>
          <div className='bg-gray-400 rounded p-10'></div>
          <div className='bg-gray-400 rounded p-10'></div>
          <div className='bg-gray-400 rounded p-10'></div>
        </div> 
        </Container>
    </VendorLayout>
  )
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