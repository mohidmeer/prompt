import { Updateprofile } from "@/ApiRequests/user";
import profile_validate from "@/lib/client/profileValidate";
import { Dialog, Transition } from "@headlessui/react"
import { useFormik } from "formik";
import { Fragment, useEffect, useState } from "react"
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter, } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { FaFacebookF, FaUser } from "react-icons/fa";

const EditProfile = ({isOpen,setIsOpen,p}) => {
    const [change,setChange]=useState(false)

    
    const formik = useFormik({
      initialValues: {
        name: p.name,
        facebook:p.facebook,
        twitter:p.twitter,
        youtube:p.youtube,
        discord:p.discord,
        instagram:p.instagram, 
        website:p.website,         
      },onSubmit,
      validate: profile_validate,
    });
    async function onSubmit(values) {
        Updateprofile(values)
      closeModal();
    }
   
  
  return (
    <div>
        <EditProfileModel isOpen={isOpen} setIsOpen={setIsOpen}  >
          <form className="p-4" onSubmit={formik.handleSubmit} >
            <div className="my-4">
            <label className="input-wrapper">Name</label>
            <div className="flex items-center gap-1">
              <FaUser size={32} />
            <input
              className={`input-box  ${
                formik.errors.name && formik.touched.name
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="name"
              placeholder='Jhon Doe'
              {...formik.getFieldProps("name")}
            />
            </div>
            {formik.errors.name && formik.touched.name ? (<div className="mt-2 font-bold text-sm text-rose-500">{formik.errors.name}</div>) : (<></>)}
            </div>
            
            <div className="my-4">
            <label className="input-wrapper">Facebook</label>
            <div className="flex items-center gap-1">
              <FaFacebookF className="text-facebook" size={32} />
            <input
              className={`input-box  ${
                formik.errors.facebook && formik.touched.facebook
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="facebook"
              placeholder='https://www.facebook.com/username'
              {...formik.getFieldProps("facebook")}
            />
            </div>
            {formik.errors.facebook && formik.touched.facebook ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.facebook}
              </div>
            ) : (
              <></>
            )}
            </div>
            <div className="my-4">

            <label className="input-wrapper">Twitter</label>
            <div className="flex items-center gap-1">
              <AiOutlineTwitter className="text-twitter" size={32} />
            <input
              className={`input-box  ${
                formik.errors.twitter && formik.touched.twitter
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="twitter"
              placeholder='https://www.twitter.com/username'
              {...formik.getFieldProps("twitter")}
            />
            </div>
            {formik.errors.twitter && formik.touched.twitter ? (
              <div classname="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.twitter}
              </div>
            ) : (
              <></>
            )}
            </div>
            <div className="my-4">
            <label className="input-wrapper">Instagram</label>
            <div className="flex items-center gap-1">
              <AiFillInstagram size={32} className="text-instagram " />
            <input
              className={`input-box  ${
                formik.errors.instagram && formik.touched.instagram
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="instagram"
              placeholder='https://www.instagram.com/username_here'
              {...formik.getFieldProps("instagram")}
            /></div>
            {formik.errors.instagram && formik.touched.instagram ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.instagram}
              </div>
            ) : (
              <></>
            )}
            </div>
            <div className="my-4">
            <label className="input-wrapper">Discord </label>
            <div className="flex items-center gap-1">
              <BsDiscord size={32} className="text-discord " />
            <input
              className={`input-box  ${
                formik.errors.discord && formik.touched.discord
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="discord"
              placeholder='https://www.discord.com/username_here'
              {...formik.getFieldProps("discord")}
            /></div>
            {formik.errors.discord && formik.touched.discord ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.discord}
              </div>
            ) : (
              <></>
            )}
            </div>
            <div className="my-4">
            <label className="input-wrapper">Youtube</label>
            <div className="flex items-center gap-1">
              <AiFillYoutube size={32} className="text-red-500" />
            <input
              className={`input-box  ${
                formik.errors.youtube && formik.touched.youtube
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="youtube"
              placeholder='https://www.youtube.com/@youtubecreators'
              {...formik.getFieldProps("youtube")}
            /></div>
            {formik.errors.youtube && formik.touched.youtube ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.youtube}
              </div>
            ) : (
              <></>
            )}
            </div>
            
            <div className="my-4">
            <label className="input-wrapper">Website</label>
            <div className="flex items-center gap-1">
              <BiGlobe size={32} />
            <input
              className={`input-box  ${
                formik.errors.website && formik.touched.website
                  ? "focus:ring-rose-600 focus:border-rose-600"
                  : ""
              } `}
              type="text"
              id="website"
              placeholder='yourwebsite.io'
              {...formik.getFieldProps("website")}
            /></div>
            {formik.errors.website && formik.touched.website ? (
              <div className="mt-2 font-bold text-sm text-rose-500">
                {formik.errors.website}
              </div>
            ) : (
              <></>
            )}
            </div>
            <button type='submit' className="btn !bg-dark-info w-full mt-4 disabled:cursor-not-allowed disabled:!bg-red-600" disabled={!formik.isValid || !formik.dirty}>Update</button>
          
          </form>      
        </EditProfileModel>
    </div>
  )
}

export default EditProfile

const EditProfileModel = ({children,isOpen,setIsOpen }) => {
    
    function closeModal(){setIsOpen(false)}
    function openModal(){setIsOpen(true)}

  return (
      <>
      <button
        type="button"
        onClick={openModal}
        className="flex px-4 py-1 bg-red-600 text-white text-sm rounded font-bold"
      >
        Edit 
      </button>

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
              <Dialog.Panel className="w-full max-w-2xl  transform overflow-hidden rounded-2xl bg-dark-light p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-3xl text-center font-medium leading-6 "
                >
                  Update Profile
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

