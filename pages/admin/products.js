import SideBar from "@/components/Admin/sidebar";
import AdminLayout from "@/layout/AdminLayout";
import product_validate from "@/lib/productValidationHelper";
import { useCategory } from "@/stores/categories";
import { useFormik } from "formik";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
const dashboard = () => {
  return (
    <AdminLayout>
        <Addproducts/>
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
        {/* {categories.map((category)=>(
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
        ))}  */}
        </tbody>
    </table>
    </div>
    </AdminLayout>
  )
}

const Addproducts = () => {

    const {categories,fetchCategoryData}=useCategory();
    const [uploadedImages,setuploadedImages ]=useState([])

    const formik =useFormik({
        initialValues:{ 
        name:'',
        price:'',
        category:'Select a Category',
        description:'',
        instruction:'',
        model:'Select a Model'},
        onSubmit,
        validate:product_validate
    })

    async function onSubmit(values){
        console.log(values)
        
    }

    useEffect(() => {fetchCategoryData();},[])



  return (
    <form className="p-4 flex flex-col " onSubmit={formik.handleSubmit}>
        <h3 className="text-3xl text-center ">Add New Prompt</h3>
        <div className="grid grid-cols-4 gap-4 ">
                <div className="my-4">
                    <label className="input-wrapper">Name</label>
                        <input className={`input-box  ${formik.errors.name && formik.touched.name ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                        type='text' id='name' placeholder="High Contrast Geometry" {...formik.getFieldProps('name')}    />
                        {formik.errors.name && formik.touched.name ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.name}</div> : <></>}
                </div>
                
                <div className="my-4">
                <label className="input-wrapper">Select a Category</label>
                        <select id="category" {...formik.getFieldProps('category')} className={`input-box  ${formik.errors.category && formik.touched.category ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}>
                            <option>Select a Category</option>
                            {categories.map((category)=> 
                            <option key={category._id} value={category.name}>{category.name}</option>)}
                        </select>
                        {formik.errors.category && formik.touched.category ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.category}</div> : <></>} 
                        
                </div>
                <div className="my-4">
                <label className="input-wrapper">Model</label>
                        <select id="model" {...formik.getFieldProps('model')} className={`input-box  ${formik.errors.model && formik.touched.model ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `}>
                            <option>Select a Model</option>
                            <option value='midjourney'>MidJourney</option>
                            <option value='stable-diffusion'>Stable Diffusion</option>
                            <option value='gpt-4'>GPT 4</option>
                            
                        </select>
                        {formik.errors.model && formik.touched.model ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.model}</div> : <></>} 
                        
                </div>

                <div className="my-4 col-start-1">
                    <label className="input-wrapper">Price</label>
                        <input className={`input-box  ${formik.errors.price && formik.touched.price ? 'focus:ring-rose-600 focus:border-rose-600' : ''} `} 
                        type='number' id='price' placeholder="3$" {...formik.getFieldProps('price')}    />
                        {formik.errors.price && formik.touched.price ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.price}</div> : <></>}
                </div>
                <div className="my-4 col-span-2 col-start-1 relative">
                    <WordCounter text={formik.values.description}/>
                <label className="input-wrapper">Description</label>
                    <textarea id='description' placeholder="Describes what your prompt does to a potential buyer. A more detailed description will increase your sales."
                    {...formik.getFieldProps('description')}
                    className={`input-box  ${formik.errors.description && formik.touched.description ? 'focus:ring-rose-600 focus:border-rose-600' : ''}`} rows="4" cols="50"/>
                    {formik.errors.description && formik.touched.description ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.description}</div> : <></>}
                </div>
                <div className="my-4 col-span-2 col-start-1 ">
                <label className="input-wrapper">Prompt Instructions</label>
                    <textarea id='instruction' placeholder="Create captivating Tokens for fantasy characters ...."
                    {...formik.getFieldProps('instruction')}
                    className={`input-box  ${formik.errors.instruction && formik.touched.instruction ? 'focus:ring-rose-600 focus:border-rose-600' : ''}`} rows="4" cols="50"/>
                    {formik.errors.instruction && formik.touched.instruction ? <div className='mt-2 font-bold text-sm text-rose-500'>{formik.errors.instruction}</div> : <></>}
                </div>
                <div className="col-span-full ">
                <label className="input-wrapper">Upload Images</label>
                   <div className="flex  items-center gap-4">
                    {uploadedImages.map((image)=>
                            <CldImage
                            width="100"
                            height="100"
                            key={image}
                            src={image}
                            alt="Description of my image"
                        />
                    
                    )}
                <CldUploadWidget onUpload={(res)=>{  setuploadedImages(val=>[...val,res.info.public_id]); console.log(uploadedImages)}} uploadPreset="pol2eluw">
                    {({ open }) => {
                        function handleOnClick(e) {
                        e.preventDefault();
                        open();
                        }
                        return (
                        <button className="p-8 border-2 border-gray-400 text-2xl font-bold mt-4 mb-4 border-dashed flex justify-center items-center" onClick={handleOnClick}>
                            +
                        </button>
                        );
                    }}
                </CldUploadWidget>
                </div>
                </div>
                
        </div>


     <button type="submit" className="btn w-1/4">Add</button>
    </form>
  )
}





const WordCounter = ({text}) => {
  return (
    <div className={`${text.length<80 ? 'text-red-600':'text-green-600'}   absolute bottom-0 right-2 font-bold text-sm text-gray-600`}>{text.length}</div>
  )
}



export default dashboard