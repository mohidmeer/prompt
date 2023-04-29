import VendorLayout from '@/layout/VendorLayout'
import Navbar from '@/components/vendor/Navbar'
import Container from '@/components/vendor/Container'


export default function Reviews() {
  return (
    <VendorLayout>
      <Navbar/>
        <Container label={'Reviews'}>
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
