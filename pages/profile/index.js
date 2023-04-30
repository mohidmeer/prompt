
import VendorLayout from '@/layout/VendorLayout'
import Navbar from '@/components/vendor/Navbar'
import Container from '@/components/vendor/Container'



export default function Dashboard() {
  return (
    <VendorLayout>
      <Navbar/>
        <Container label={'Profile'}>
        <div className=' grid grid-cols-4  gap-4'>
            
        </div> 
        </Container>
    </VendorLayout>
  )
}
