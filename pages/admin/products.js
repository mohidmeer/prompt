import { deleteProduct } from "@/ApiRequests/admin";
import AddProducts from "@/components/Admin/AddProducts";
import AdminLayout from "@/layout/AdminLayout";
import { useProducts } from "@/stores/admin/products";
import { useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const Product = () => {

    const {products,fetchProductData}=useProducts();
    useEffect(() => {fetchProductData();},[])
    const deletep=(id)=>{
         deleteProduct(id).then(()=>{
            fetchProductData();
         })
        
    }

  return (
    <AdminLayout>
      <AddProducts/>
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
                    {product.isApproved}
                </td>
                <td className="px-6 py-4 flex gap-4">
                    <button  className="font-bold text-blue-600 hover:underline flex items-center gap-1"><MdEdit/>    Edit</button>
                    <button onClick={()=>{deletep(product._id)}}  className="font-bold text-red-600 hover:underline flex items-center gap-1"><MdDelete/>   Delete</button>
                </td>    
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

  

export default Product;
