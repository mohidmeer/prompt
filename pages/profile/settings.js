import VendorLayout from '@/layout/VendorLayout'
import Navbar from '@/components/vendor/Navbar'
import Container from '@/components/vendor/Container'


export default function Settings() {
  return (
    <VendorLayout>
      <Navbar/>
        <Container label={'Settings'}>
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
