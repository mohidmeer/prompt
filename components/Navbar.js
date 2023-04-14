import Link from 'next/link'
import React from 'react'
import NavLink from '@/components/NavLink'
import SearchBox from './SearchBox'
import { MdMenu } from 'react-icons/md'


const Navbar = () => {
  return (
    
<nav className="bg-white border-gray-200 border-b  dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-4 mx-auto p-4">
    <Link href="/" className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Prompt Works</span>
    </Link>
    <SearchBox/>

    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
     <MdMenu className='w-6 h-6'/>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <NavLink label='Home' href='/'/>
        <NavLink label='Explore' href='/explore'/>
        <NavLink label='Login' href='/login'/>
      </ul>

    </div>
  </div>
</nav>

  )
}

export default Navbar