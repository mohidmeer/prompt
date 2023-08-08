import VendorLayout from '@/layout/VendorLayout'
import Container from '@/components/vendor/Container'
import { useUserStore } from '@/stores/user/user'
import { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteProduct } from '@/ApiRequests/user';
import AddProducts from '@/components/vendor/AddProducts';
import UpdateProducts from '@/components/vendor/UpdateProducts';
import { useRouter } from 'next/router';
import { getServerAuthSession } from '../api/auth/[...nextauth]';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import Head from 'next/head';


export default function Products({session}) {
  
      const { products,fetchProductData } = useUserStore();
      const router = useRouter();
      const { create } = router.query;
      const [loading ,setLoading] =useState(true)
      const [editProduct,setEditProduct]=useState();
      let [isOpen, setIsOpen] = useState(false)
      const handleDelete =(id)=>{
        deleteProduct(id).then(()=>{fetchProductData()})
      }
      
      const handleEdit=(product)=>{
        setEditProduct(product)
        setIsOpen(true)
      }

  
      useEffect(()=>{fetchProductData().then(()=>setLoading(false))},[])

  
  return (
    <VendorLayout>
      <Head>
        <title>Your Prompts</title>
      </Head>
        <Container label={'Prompts'}>
          <AddProducts Open={create==='true'?true:false}  />

          {isOpen &&  <UpdateProducts isOpen={isOpen} setIsOpen={setIsOpen} product={editProduct}   /> }
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left bg-dark-light">
          <thead className="text-xs   bg-dark-light">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product)=>(
            <tr key={product._id} className=" border-b border-dark-border ">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    <Link href={'/prompt/'+product.slug}  className='flex items-center gap-2' >
                      <CldImage
                        className='rounded-full '
                        src={product.images[0]}
                        width={42}
                        height={42}
                        crop="thumb"
                        alt={product.name}
                        draggable='false'
                        unselectable='off' 
                      />
                      <div>
                      <p className='font-bold'>{product.name}</p>
                      <p className='text-xs mt-1 first-letter:capitalize'>{product.category}</p>
                      </div>
                    </Link>
                </th>
                <td className="px-6 py-4">
                    {product.price}
                </td>
                <td className="px-6 py-4">
                    {product.model}
                </td>
                
                <td className="px-6 py-4">
                    {product.status==='PENDING'&& <p className="bg-orange-800 px-4 py-[2px] rounded-full w-fit text-xs text-white">{product.status.toLowerCase()}</p>}
                    {product.status==='APPROVED'&& <p className="bg-green-800 px-4 py-[2px] rounded-full w-fit text-xs text-white">{product.status.toLowerCase()}</p>}
                    {product.status==='REJECTED'&& <p className="bg-red-900 px-4 py-[2px] rounded-full w-fit  text-xs text-white">{product.status.toLowerCase()}</p>}
                </td>
                <td className="px-6 py-4 ">
                   <div className='flex gap-2'>
                      <button onClick={()=>handleEdit(product)}          className="font-bold text-lg text-blue-600 hover:underline flex items-center gap-1"><MdEdit/> </button>
                      <button onClick={()=>{handleDelete(product._id) }} className="font-bold text-lg text-red-600 hover:underline flex items-center gap-1"><MdDelete/> </button>
                   </div>
                </td>    
            </tr>
            ))}
          </tbody>
        </table>
      </div>
            
        </Container>
    </VendorLayout>
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
  if (!session.user.payment) {
    return {
      redirect: {
        destination: '/stripe',
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