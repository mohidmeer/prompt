import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from '@/components/NavLink'
import SearchBox from './SearchBox'
import { MdManageAccounts, MdMenu } from 'react-icons/md'
import { signOut, useSession } from 'next-auth/react'
import TopBar from './TopBar'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "@headlessui/react";
import { BsCashCoin, BsPerson, BsPersonCircle, BsPersonFill, } from "react-icons/bs";
import { FaPersonBooth } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiStack } from "react-icons/gi";
import { RiFileSettingsFill, RiLogoutBoxFill, RiSettingsFill } from "react-icons/ri";
const Navbar = () => {
  // const myContext = useContext(AppContext);
  function toggle() {
    // myContext.setSideBarState(
    //   (myContext.sidebarstate = !myContext.sidebarstate)
    // );
  }

  const { data: session } = useSession();
  return (

    <div className="p-4 bg-app  flex  justify-between border-b-2 border-white">
      <Link href="/" className="flex items-center gap-2">
        <div className='w-10 h-10 bg-green rounded-tr-xl rounded-bl-xl '></div>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Prompt Works</span>
      </Link>

      <div className="w-1/3 hidden sm:block rounded-full  border border-green    ">
        <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-app overflow-hidden">
          <div className="grid place-items-center h-full w-12 ">
            <FaSearch />
          </div>

          <input
            className=" autofill:bg-slate-600    h-full w-full outline-none text-sm bg-app text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search Prompts.."
          />
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        <button onClick={toggle}>
          <GiHamburgerMenu className="  text-3xl" />{""}
        </button>
        {session ? <Profilebar session={session} name={session.user.name} email={session.user.email} />:
        <Link href='/login' className='btn !bg-green '>Login</Link>}
      </div>
    </div>

  )
}
export default Navbar



const Profilebar = ({ name, email, session }) => {
  const genarateUserAvatar = () => {
    let userNameInitials = name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    return userNameInitials
  }
  return (
    <Menu as="div" class="  relative inline-block text-left mr-2 mt-1">
      <Menu.Button
        type="button"
        className="   "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <BsPerson className="font-bold text-3xl" />
      </Menu.Button>

      <Menu.Items
        className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md  bg-dark shadow-lg  ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="flex m-4 space-x-2 items-center">
          <Link href="/profile" className=''>
            <div className='w-10 h-10 rounded-full flex justify-center font-bold items-center text-white bg-black'>{genarateUserAvatar()}</div>
          </Link>
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{name}</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{email}</span>
          </div>

        </div>

        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold   w-full hover:bg-app" href='/account'>
          <BsPersonFill />
          <span>Account</span>
        </Link>
        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold   w-full hover:bg-app" href='/account/prompts?create=true'>
          <BsCashCoin />
          <span>Sell</span>
        </Link>
        {session.user.role === 'ADMIN' ?
          <>
            <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
            <Link class="flex items-center space-x-4 p-4 font-semibold   w-full hover:bg-app" href='/admin'>
              <BsCashCoin />
              <span></span>
            </Link>
          </>
          : <></>}

        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <Link class="flex items-center space-x-4 p-4 font-semibold   w-full hover:bg-app" href='/profile'>
          <MdManageAccounts />
          <span>Profile Settings</span>
        </Link>




        <hr class="bg-gray-300 opacity-100 mx-2 h-px"></hr>
        <button class="flex items-center space-x-4 p-4 font-semibold w-full hover:bg-app" onClick={() => { signOut() }}>
          <RiLogoutBoxFill />
          <span>Sign Out</span>
        </button>



      </Menu.Items>
    </Menu>




  );
};
