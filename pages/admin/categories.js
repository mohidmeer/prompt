import SideBar from "@/components/Admin/sidebar";
import Button from "@/components/Buttons";
import AdminLayout from "@/layout/AdminLayout";
import { useFormik } from "formik";
import { MdDelete, MdEdit } from "react-icons/md";
const dashboard = () => {
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
        console.log(values)
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
  return (
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Category name
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Category slug
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Animals
                </th>
                <td class="px-6 py-4">
                    animals
                </td>
                <td class="px-6 py-4 flex gap-4">
                    <button  class="font-bold text-blue-600 hover:underline flex items-center gap-1"><MdEdit/>    Edit</button>
                    <button  class="font-bold text-red-600 hover:underline flex items-center gap-1"><MdDelete/>   Delete</button>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>
  )
}


export default dashboard