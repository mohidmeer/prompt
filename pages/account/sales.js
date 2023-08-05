import VendorLayout from '@/layout/VendorLayout'
import Container from '@/components/vendor/Container'
import { getServerAuthSession } from '../api/auth/[...nextauth]'
import { useUserStore } from '@/stores/user/user';
import { useEffect } from 'react';


export default function Orders() {

  const { sales,fetchSales } = useUserStore();

  useEffect(()=>{fetchSales();})
  return (
    <VendorLayout>
        <Container label={'Sales'}>
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
                Amount Received
              </th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale)=>(
            <tr key={sale._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {sale.productId.name}
                </th>
                <td className="px-6 py-4">
                    {sale.productId.price} $
                </td>
                <td className="px-6 py-4">
                    {sale.amount/100} $
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