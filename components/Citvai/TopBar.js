import Image from "next/image"
import {BsBell, BsCash, BsGraphUp, BsHeart, BsPlus, BsSearch} from "react-icons/bs"
import {BiChevronDown, BiLinkExternal, BiLogOut, BiPurchaseTag, BiUser} from "react-icons/bi"       
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {RxAvatar} from "react-icons/rx"
import {VscAccount} from "react-icons/vsc"
import { signOut, useSession } from 'next-auth/react'
import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder, MdOutlineCollections } from "react-icons/md"

const TopBar = () => {
    const {data:session}=useSession();


    return (
        <div className="flex justify-between items-center px-10 py-4  gap-10 border-b border-dark-border bg-dark-background text-white">
            <Logo  />
            <Search/>
            <RightMenu session={session}/>
        </div>
    )
}
export default TopBar

function Logo() {
    return (
        <Link href={'/'} className="flex items-center gap-2 ">
            <div className=" w-10 h-10 rounded-tr-xl rounded-bl-xl bg-white md:hidden "></div>
            <p className="text-2xl md:block hidden whitespace-nowrap">Prompt Works</p>
            <Actions/>
        </Link>
    )
}

function Search() {
    return (
     
            <form className="w-full lg:w-1/2 sm:block hidden">
                <div className="relative">
                <input className=" block w-full p-2 pl-12 outline-none bg-dark-light border-dark-border border rounded-md placeholder-dark-muted " placeholder="Search Prompts" />
                    <BsSearch className="text-2xl absolute  left-2 top-2 text-gray-500 "/>
                </div>
            </form>

    )
}

function Actions(){
    return(
        <div className="flex gap-2">
            <Create/>
            <BsHeart className="text-dark-success text-3xl"/>
        </div>

    )
}

function RightMenu({session}){

    return(
        <div className="flex gap-2 items-center justify-center ">
            {session ? <Profile session={session}/>
            :
            <Link href={'/login'}
            className="inline-flex w-full 
            justify-center rounded-md 
            bg-dark-border bg-opacity-20 px-4 py-2 
            text-sm font-medium 
            hover:bg-opacity-30 
            focus-visible:ring-2
          focus-visible:ring-white 
            focus-visible:ring-opacity-75">
                Sign in
            </Link>
            
            
            }
        
            
        </div>
    )
}
  
function Profile({session}) {
    return (
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button >    
                <Image className=" rounded-full" alt='UserProfile' src={session.user.avatar} width={32} height={32} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="
            absolute right-0  z-10
            mt-2 w-56 origin-top-right 
            divide-y divide-dark-border
            text-gray-300   
            rounded-md 
            bg-dark-light  shadow-lg 
            ring-1 ring-black 
            ring-opacity-5 ">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link  href='/profile'
                      className={`${
                        active ? 'bg-dark-hover ' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm  gap-2`}
                     >
                       <BiUser className="text-xl text-green-600"/>
                     <span>Profile</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/account'
                      className={`${
                        active ? 'bg-dark-hover ' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                     >
                        <MdFavoriteBorder className="text-xl text-pink-600"/>
                      <span>Favourites</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/account?Purchases'
                            className={`${
                            active ? 'bg-dark-hover ' : ''
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                        >
                        <BiPurchaseTag className="text-xl text-red-600"/>
                      <span>Purchases</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/account'
                            className={`${
                            active ? 'bg-dark-hover ' : ''
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                        >
                        <VscAccount className="text-xl text-pink-600"/>  
                      <span>Account</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/account/prompts'
                            className={`${
                            active ? 'bg-dark-hover ' : ''
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                        >
                      <MdOutlineCollections className="text-xl text-indigo-600"/>  
                      <span>Your prompts</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/account/sales'
                            className={`${
                            active ? 'bg-dark-hover ' : ''
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                        >
                          <BsGraphUp className="text-xl text-green-600"/>  
                      <span>Sales</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/stripe'
                            className={`${
                            active ? 'bg-dark-hover ' : ''
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                        >
                            <BsCash className="text-xl text-green-600"/>  
                      <span>Payments</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={()=>{signOut()}}
                      className={`${
                        active ? 'bg-dark-hover ' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                     >
                  <BiLogOut className="text-xl text-pink-600"/>  
                      <span>Logout</span>
                    </button>
                  )}
                </Menu.Item>
                
               
              </div>
              
              
             
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }
  
function Create() {
    return (
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button >    
                <BsPlus className="bg-dark-success text-white rounded-full text-3xl"/>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="
            absolute left-0  z-10
            mt-2 w-48  
            divide-y divide-dark-border
            text-gray-300   
            rounded-md 
            bg-dark-light  shadow-lg 
            ring-1 ring-black 
            ring-opacity-5 ">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link  href='/account/prompts?create=true'
                      className={`${
                        active ? 'bg-dark-hover ' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                     >
                       <BsCash className="text-green-600 text-2xl"/> 
                      <span>Create a prompt</span>
                    </Link>
                  )}
                </Menu.Item>
              </div>             
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }
  