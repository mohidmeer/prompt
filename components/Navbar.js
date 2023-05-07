import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from '@/components/NavLink'
import SearchBox from './SearchBox'
import { MdMenu } from 'react-icons/md'
import { signOut, useSession } from 'next-auth/react'


const Navbar = () => {

  const {data:session}=useSession();
  return (   
<nav className="bg-white border-gray-200 border-b  dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-4 mx-auto p-4">
    <Link href="/" className="flex items-center gap-2">
        <div className='w-10 h-10 bg-black rounded-tr-xl rounded-bl-xl '></div>
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
        {session ?
          <NavLink label='Sell' href='/account/prompts?create=true'/>:
          <NavLink label='Login' href='/login'/>
          }
        
      </ul>
     
    </div>
    {session && <UserProfile  name={session.user.name} email={session.user.email}  />}
  </div>
  
</nav>

  )
}
export default Navbar


const UserProfile = ({name,email}) => {

  const [isOpen,setIsOpen]=useState(false)
 const  openMenu = () => {
  setIsOpen(!isOpen)
  }

  const genarateUserAvatar=()=>{
    let userNameInitials= name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    return userNameInitials
 }


  return (
    <div className='relative'>
    <button type="button" 
     onClick={openMenu}
    className="flex  mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
        <span className="sr-only">Open user menu</span>
        <div className='w-8 h-8 flex justify-center font-bold items-center text-white'>{genarateUserAvatar()}</div>
      </button>
      
      <div 
      className={`${isOpen?'':'hidden'} z-50 -left-10 absolute 
      my-4 text-base 
      list-none bg-white 
      divide-y divide-gray-100 
      rounded-lg shadow-xl  `}>
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{name}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
          </li>
          <li>
            <button  
            className="block px-4 py-2 text-sm w-full text-left
            text-gray-700 hover:bg-gray-100 
            dark:hover:bg-gray-600 dark:text-gray-200
            dark:hover:text-white" onClick={()=>{signOut()}} >Sign out</button>
          </li>
          
            <Link href='/account' 
            className="block px-4 py-2 text-sm w-full text-left
            text-gray-700 hover:bg-gray-100 
            dark:hover:bg-gray-600 dark:text-gray-200
            dark:hover:text-white">Account</Link>
        </ul>
      </div>
    
    </div>
  )
}




