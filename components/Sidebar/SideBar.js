import AppContext from '@/context/context';
import Link from 'next/link';
import React, { useContext } from 'react'
import { BiSearch } from 'react-icons/bi';
import { FaDiscord, FaFacebook, FaInfinity, FaInstagram, FaLinkedin, FaPinterest, FaReddit, FaShareAlt, FaTwitter, FaYoutube } from 'react-icons/fa';

const SideBar = () => {
    const myContext = useContext(AppContext);
  return (

    <aside className={`sidebar h-screen sticky top-0 transition-all ease-out lg:w-64  ${myContext.sidebarstate ? 'lg:w-64': 'lg:w-20' }      `} >
    
    <div class={`flex flex-col gap-y-6  overflow-hidden py-4 px-3  rounded  lg:bg-transparent `}>
      <ul class="space-y-2  justify-between block lg:block md:block    ">


         <li className=' font-bold lg:flex hidden gap-x-1 text-gray-600    '>
           <span className={`${myContext.sidebarstate ? '': 'lg:hidden' }`}> 
            Explore
           </span>
            
         </li><hr className='lg:flex hidden bg-dark h-[2px] '/>
       

         <li className='ml-2' >
         <Link className='bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/explore' >
             <BiSearch className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
               <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }    ` }>Explore</span>
            </Link>
         </li>
      </ul>
      
      <div className={`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 grid `}>
      <Link href='' className='flex justify-center  '>
        <FaFacebook  className='text-facebook border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
      <Link href='' className='flex justify-center  '>
        <FaTwitter  className='text-twitter border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
      <Link href='' className='flex justify-center  '>
        <FaDiscord  className='text-discord border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
      <Link href='' className='flex justify-center  '>
        <FaYoutube  className='text-red-600 border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
      <Link href='' className='flex justify-center  '>
        <FaInstagram  className='text-instagram border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
         
      <Link href='' className='flex justify-center  '>
        <FaReddit className='text-reddit border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
      <Link href='' className='flex justify-center  '>
        <FaLinkedin className='text-blue-700 border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
      <Link href='' className='flex justify-center  '>
        <FaPinterest className='text-pintrest   border-gray-300 border-4 rounded-full text-4xl  ' />
      </Link>
         
    
      </div>
   </div>
   </aside>
  )
}

export default SideBar