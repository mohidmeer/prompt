import VendorLayout from '@/layout/VendorLayout'
import Navbar from '@/components/vendor/Navbar'
import Container from '@/components/vendor/Container'
import { useUserStore } from '@/stores/user/user'
import { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteProduct } from '@/ApiRequests/user';
import AddProducts from '@/components/vendor/AddProducts';
import UpdateProducts from '@/components/vendor/UpdateProducts';
import { useRouter } from 'next/router';
import { getServerAuthSession } from '../api/auth/[...nextauth]';


export default function Products({session}) {
  
      const { products,fetchProductData } = useUserStore();
      const router = useRouter();
      const { create } = router.query;

      const [editProduct,setEditProduct]=useState();
      let [isOpen, setIsOpen] = useState(false)
      
      useEffect(()=>{fetchProductData();})

      const handleDelete =(id)=>{
        deleteProduct(id).then(()=>{fetchProductData()})
      }
      
      const handleEdit=(product)=>{
        setEditProduct(product)
        setIsOpen(true)
      }

      

  
  return (
    <VendorLayout>
      <Navbar/>
        <Container label={'Prompts'}>
          <AddProducts Open={create==='true'?true:false} paymentEnabled={session.user.payment} />

          {isOpen &&  <UpdateProducts isOpen={isOpen} setIsOpen={setIsOpen} product={editProduct}   /> }
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                category
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product)=>(
            <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                </th>
                <td className="px-6 py-4">
                    {product.price}
                </td>
                <td className="px-6 py-4">
                    {product.model}
                </td>
                <td className="px-6 py-4">
                    {product.category}
                </td>
                <td className="px-6 py-4">
                    {product.status==='PENDING'&& <p className="bg-orange-400 px-4 py-[2px] rounded-full w-fit text-white">{product.status}</p>}
                    {product.status==='APPROVED'&& <p className="bg-green-600 px-4 py-[2px] rounded-full w-fit text-white">{product.status}</p>}
                    {product.status==='REJECTED'&& <p className="bg-red-600 px-4 py-[2px] rounded-full w-fit text-white">{product.status}</p>}
                </td>
                <td className="px-6 py-4 flex gap-4">
                    <button onClick={()=>handleEdit(product)}          className="font-bold text-blue-600 hover:underline flex items-center gap-1"><MdEdit/>    Edit</button>
                    {/* <button disabled={product.status==='APPROVED' && true} onClick={()=>{handleApprove(product._id)}} className="font-bold text-green-600 hover:underline flex items-center gap-1 disabled:hidden"> <MdApproval />Approve</button>  */}
                    {/* <button disabled={product.status==='REJECTED' && true}  onClick={()=>{handleReject(product._id)}}   className="font-bold text-red-600 hover:underline flex items-center gap-1 disabled:hidden"><FcCancel />Reject</button> */}
                    <button onClick={()=>{handleDelete(product._id) }} className="font-bold text-red-600 hover:underline flex items-center gap-1"><MdDelete/>   Delete</button>
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
  session=JSON.parse(JSON.stringify(session))
  return {
    props: {
      session
    },
  };
}