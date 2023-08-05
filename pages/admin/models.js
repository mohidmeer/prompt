
import Button from "@/components/Buttons";
import AdminLayout from "@/layout/AdminLayout";
import serverErrorHandler from "@/lib/server/serverErrorHandler";
import { useExplore } from "@/stores/explore";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { getServerAuthSession } from "../api/auth/[...nextauth]";
export default function  Cata(){
    const {fetchModelData}=useExplore();
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
        axios.post('/api/admin/model',values,
        ).then((res)=>{  fetchModelData(); }
        ).catch((error)=>{serverErrorHandler(409)})
        
    }
    


  return (
    <AdminLayout>
         <form  onSubmit={formik.handleSubmit}>
         <div className="my-4 ">
              <label className="input-wrapper font-bold !text-2xl">Add New Models</label>
              <div className="flex items-center gap-4 lg:w-1/3">
                  <input className={`input-box  ${formik.errors.name && formik.touched.name ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                  type='text' id='name' placeholder="Stable diffusion " {...formik.getFieldProps('name')}    />
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
    const {models,fetchModelData}=useExplore();
    useEffect(() => {fetchModelData();},[])
    const deleteModel=(id)=>{
        axios.put('/api/admin/model',{id:id})
        .then((res)=>{ console.log(res)})
        .catch(()=>{ console.error(id) })
        fetchModelData();
    }
  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Model name
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Model slug
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {models.map((category)=>(
        <tr key={category._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {category.name}
                </th>
                <td className="px-6 py-4">
                    {category.slug}
                </td>
                <td className="px-6 py-4 flex gap-4">
                    <button  className="font-bold text-blue-600 hover:underline flex items-center gap-1"><MdEdit/>    Edit</button>
                    <button onClick={()=>{deleteModel(category._id)}}  className="font-bold text-red-600 hover:underline flex items-center gap-1"><MdDelete/>   Delete</button>
                </td>    
        </tr>
        ))} 
        </tbody>
    </table>
    </div>
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
    if (session.user.role==='ADMIN'){

      return {
        props: {
          
        },
      }

    }
  
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }