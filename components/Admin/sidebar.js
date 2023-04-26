import Link from 'next/link'
import Topbar from './topbar'
import {RxDashboard} from 'react-icons/rx'
import {SlBag} from 'react-icons/sl'
import { useRouter } from 'next/router'
import { BiCategory } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'

const sidebar = () => {
    const router =useRouter();
  return (
    <>
    <Topbar/>
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

      <ul className="space-y-2 font-medium">
         <li>
            <Link href='/admin/dashboard' className={`flex items-center p-2   
             ${router.pathname=='/admin/dashboard' ? 'bg-black text-white':
             'hover:bg-gray-200 text-gray-900'} `}>
              <RxDashboard className='w-6 h-6'/>
               <span className="ml-3">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link href='/admin/products' className={`flex items-center p-2   
             ${router.pathname=='/admin/products' ? 'bg-black text-white':
             'hover:bg-gray-200 text-gray-900'} `}>
              <SlBag className='w-6 h-6'/>
               <span className="ml-3">Products</span>
            </Link>
         </li>
         <li>
            <Link href='/admin/categories' className={`flex items-center p-2   
             ${router.pathname=='/admin/categories' ? 'bg-black text-white':
             'hover:bg-gray-200 text-gray-900'} `}>
              <BiCategory className='w-6 h-6'/>
               <span className="ml-3">Categories</span>
            </Link>
         </li>
         <li>
            <Link href='/admin/vendors' className={`flex items-center p-2   
             ${router.pathname=='/admin/vendors' ? 'bg-black text-white':
             'hover:bg-gray-200 text-gray-900'} `}>
              <FaUsers className='w-6 h-6'/>
               <span className="ml-3">Vendors</span>
            </Link>
         </li>
      </ul>

   </div>
</aside>

    </>
  )
}

export default sidebar