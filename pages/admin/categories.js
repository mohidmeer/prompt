import SideBar from "@/components/Admin/sidebar";
import Button from "@/components/Buttons";
import AdminLayout from "@/layout/AdminLayout";
import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import { useExplore } from "@/stores/explore";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
const dashboard = () => {
    const {fetchCategoryData}=useExplore();
    const formik =useFormik({
        initialValues:{ name:''},
    onSubmit,
    validate:(values)=>{
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } 
        return errors; }
    });

    async function onSubmit(values){
        axios.post('/api/admin/category',values,
        ).then((res)=>{  fetchCategoryData(); }
        ).catch((error)=>{serverErrorHandler(409)})
        
    }
    


  return (
    <AdminLayout>
         <form  onSubmit={formik.handleSubmit}>
         <div className="my-4 ">
              <label className="input-wrapper font-bold !text-2xl">Add New Category</label>
              <div className="flex items-center gap-4 lg:w-1/3">
                  <input className={`input-box  ${formik.errors.name && formik.touched.name ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                  type='text' id='name' placeholder="Animals " {...formik.getFieldProps('name')}    />
                  {formik.errors.name && formik.touched.name ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.name}</div> : <></>}
                  <button type="submit" className="px-4 py-2 bg-black text-white font-bold ">Save</button>
              </div>
            </div>
         </form>
        <Categories/>
    </AdminLayout>
  )
}

const Categories = () => {
    const {categories,fetchCategoryData}=useExplore();
    useEffect(() => {fetchCategoryData();},[])
    const deleteCategory=(id)=>{
        axios.put('/api/admin/category',{id:id})
        .then((res)=>{ console.log(res)})
        .catch(()=>{ console.error(id) })
        fetchCategoryData();
    }
  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Category name
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Category slug
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {categories.map((category)=>(
        <tr key={category._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {category.name}
                </th>
                <td className="px-6 py-4">
                    {category.slug}
                </td>
                <td className="px-6 py-4 flex gap-4">
                    <button  className="font-bold text-blue-600 hover:underline flex items-center gap-1"><MdEdit/>    Edit</button>
                    <button onClick={()=>{deleteCategory(category._id)}}  className="font-bold text-red-600 hover:underline flex items-center gap-1"><MdDelete/>   Delete</button>
                </td>    
        </tr>
        ))} 
        </tbody>
    </table>
    </div>
  )
}


export default dashboard