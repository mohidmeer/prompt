import { addNewProduct } from "@/ApiRequests/user";
import product_validate from "@/lib/client/productValidationHelper";
import { useCategory } from "@/stores/categories";
import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { Fragment, useEffect, useState } from "react";

const AddProducts = ({Open}) => {
    const { categories, fetchCategoryData } = useCategory();
    const [uploadedImages, setuploadedImages] = useState([]);
    let [isOpen, setIsOpen] = useState(Open)
    function closeModal() {
        setIsOpen(false)
      }
    const formik = useFormik({
      initialValues: {
        name: '',
        price: '',
        category: 'Select a Category',
        description: "",
        instruction: "",
        images: uploadedImages,
        model: "Select a Model",
      },onSubmit,
      validate: product_validate,
    });
    async function onSubmit(values) {
        addNewProduct(values)
      closeModal();
    }
  
    useEffect(() => {
      fetchCategoryData();
       formik.values.images=uploadedImages
    }, [uploadedImages]);
  
    return (
        <ModelProducts isOpen={isOpen} setIsOpen={setIsOpen}>
        <form className="p-4 flex flex-col " onSubmit={formik.handleSubmit}>
        
        <div className="grid grid-cols-4 gap-4 ">
          <div className="my-4">
            <label className="input-wrapper">Name</label>
            <input
              className={`input-box  ${
                formik.errors.name && formik.touched.name
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="name"
              placeholder="High Contrast Geometry"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.name}
              </div>
            ) : (
              <></>
            )}
          </div>
  
          <div className="my-4">
            <label className="input-wrapper">Select a Category</label>
            <select
              id="category"
              {...formik.getFieldProps("category")}
              className={`input-box  ${
                formik.errors.category && formik.touched.category
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
            >
              <option>Select a Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {formik.errors.category && formik.touched.category ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.category}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="my-4">
            <label className="input-wrapper">Model</label>
            <select
              id="model"
              {...formik.getFieldProps("model")}
              className={`input-box  ${
                formik.errors.model && formik.touched.model
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
            >
              <option>Select a Model</option>
              <option value="midjourney">MidJourney</option>
              <option value="stable-diffusion">Stable Diffusion</option>
              <option value="gpt-4">GPT 4</option>
            </select>
            {formik.errors.model && formik.touched.model ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.model}
              </div>
            ) : (
              <></>
            )}
          </div>
  
          <div className="my-4">
            <label className="input-wrapper">Price</label>
            <input
              className={`input-box  ${
                formik.errors.price && formik.touched.price
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="number"
              id="price"
              placeholder="3$"
              {...formik.getFieldProps("price")}
            />
            {formik.errors.price && formik.touched.price ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.price}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="my-4 col-span-2  relative">
            <WordCounter text={formik.values.description} />
            <label className="input-wrapper">Description</label>
            <textarea
              id="description"
              placeholder="Describes what your prompt does to a potential buyer. A more detailed description will increase your sales."
              {...formik.getFieldProps("description")}
              className={`input-box  ${
                formik.errors.description && formik.touched.description
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              }`}
              rows="4"
              cols="50"
            />
            {formik.errors.description && formik.touched.description ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.description}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="my-4 col-span-2 ">
            <label className="input-wrapper">Prompt Instructions</label>
            <textarea
              id="instruction"
              placeholder="Create captivating Tokens for fantasy characters ...."
              {...formik.getFieldProps("instruction")}
              className={`input-box  ${
                formik.errors.instruction && formik.touched.instruction
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              }`}
              rows="4"
              cols="50"
            />
            {formik.errors.instruction && formik.touched.instruction ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.instruction}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="col-span-full ">
            <label className="input-wrapper">Upload Images</label>
            <div className="flex  items-center gap-4">
              {uploadedImages.map((image) => (
                <CldImage
                  width="100"
                  height="100"
                  key={image}
                  src={image}
                  alt="Description of my image"
                />
              ))}
              <CldUploadWidget
                onUpload={(res) => {
                  setuploadedImages((val) => [...val, res.info.public_id]);
                }}
                uploadPreset="pol2eluw"
              >
                {({ open }) => {
                  function handleOnClick(e) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <button
                      className="p-8 border-2 border-gray-400 text-2xl font-bold mt-4 mb-4 border-dashed flex justify-center items-center"
                      onClick={handleOnClick}
                    >
                      +
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
          {uploadedImages.length===0  ? <div className='mb-2 font-bold text-sm text-rose-500'>Atlest One Image Required</div> : <></>}
        </div>
        
        <div className="flex justify-end">
            <button type='submit' className="btn w-1/3  disabled:bg-gray-600" disabled={!(formik.dirty)} >
            Add
            </button>
        </div>
      </form>
      </ModelProducts>
    );
  };
  
  const WordCounter = ({ text }) => {
    return (
      <div
        className={`${
          text.length < 80 ? "text-red-600" : "text-green-600"
        }   absolute bottom-0 right-2 font-bold text-sm text-gray-600`}
      >
        {text.length}
      </div>
    );
  };

  const ModelProducts = ({children,isOpen,setIsOpen }) => {
    
      function closeModal(){setIsOpen(false)}
      function openModal(){setIsOpen(true)}

    return (
        <>
      <div className="flex  justify-end  mt-4">
        <button
          type="button"
          onClick={openModal}
          className="btn mb-4"
        >
          Add New Prompt
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl text-center font-medium leading-6 text-gray-900"
                  >
                    Add New Prompt
                  </Dialog.Title>
                  {children}
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    )
  }
  






export default AddProducts