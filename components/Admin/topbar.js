import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import NavLink from '@/components/NavLink'
import { MdMenu } from 'react-icons/md'
import { signOut, useSession } from 'next-auth/react'


const Topbar = () => {

  const {data:session}=useSession();
  return (   
<nav className="bg-white border-gray-200 border-b  dark:bg-gray-900 sticky top-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-4 mx-auto p-4">
    <Link href="/" className="hidden items-center gap-2 sm:flex   ">
        <div className='w-10 h-10 bg-black rounded-tr-xl rounded-bl-xl '></div>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Prompt Works</span>
    </Link>
    {session && <UserProfile  name={session.user.name} email={session.user.email}  />}
  </div>
</nav>

  )
}
export default Topbar


const UserProfile = ({name,email}) => {

  const [isOpen,setIsOpen]=useState(false)
  const menuRef = useRef(null);
 const  openMenu = () => {
  setIsOpen(!isOpen)
  }

  const genarateUserAvatar=()=>{
    let userNameInitials= name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    return userNameInitials
 }
 useEffect(() => {
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener('click', handleOutsideClick);

  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}, [menuRef]);



  return (
    <div className='relative' ref={menuRef}>
    <button type="button" 
     onClick={openMenu}
    className="flex  mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
        <span className="sr-only">Open user menu</span>
        <div className='w-8 h-8 flex justify-center font-bold items-center text-white'>{genarateUserAvatar()}</div>
      </button>
      
      <div 
      className={`${isOpen?'':'hidden'} z-20 -left-10 absolute 
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
          
        </ul>
      </div>
    
    </div>
  )
}

