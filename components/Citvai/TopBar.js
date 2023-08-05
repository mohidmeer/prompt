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
import { getUserNotifications } from "@/ApiRequests/user"
import moment from "moment"

const TopBar = () => {
    const {data:session}=useSession();
    return (
        <div className="flex justify-between items-center px-10 py-4  gap-10 border-b border-dark-border bg-dark-background text-white sticky top-0 z-50 ">
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
            border border-dark-border">
                Sign in
            </Link>
            
            
            }
        
            
        </div>
    )
}
  
function Profile({session}) {
    return (
      <div className="flex gap-4">
        <Notifications/>
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
            absolute right-0  z-20
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
  
function Create({id}) {
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

function Notifications({id}){
  const [notifications,setNotifications] = useState([])
  const [Loading,setLoading] = useState(true);

  async function getData(id) {
    const n = await  getUserNotifications();
    setNotifications(n);
    setLoading(false)
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button >    
              <BsBell className="text-white rounded-full text-3xl"/>
          </Menu.Button>
        </div>
        <Transition as={Fragment}  enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
         
          <Menu.Items className="
          absolute right-0  z-20
          mt-2  w-96 border border-dark-border         
          divide-y divide-dark-border
          text-gray-300   
          rounded-md 
          bg-dark-light  shadow-lg 
          ring-1 ring-black 
          ring-opacity-5 ">
            <div className="px-1 py-1 ">
               {Loading ?  <Loader/>  :  
                notifications.length=== 0 ? <NoNotification key={1}/>:
                notifications.map((n)=>(
                  <SingleNotification key={n._id} n={n}  />
                ))
               }
              
            </div>             
          </Menu.Items>

        </Transition>
      </Menu>
    </div>
  )
}
  


const SingleNotification = ({n}) => {
  return (
    <Menu.Item>{({ active }) => (
        <Link  href=''  className={`${ active ? 'bg-dark-hover ' : '' } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
             <Avatar message={n.message} name={'Mohid Meer'} time={moment(n.createdAt).fromNow()}   />
        </Link>
               )}
     </Menu.Item>
  )
}
const NoNotification = () => {
  return (
    <Menu.Item>{({ active }) => (
        <div href=''  className={''}>
             <p className="text-center p-8">No Notifications</p>
        </div>
               )}
     </Menu.Item>
  )
}


const Avatar = ({message,time,name,src='https://lh3.googleusercontent.com/a/AAcHTtfefauh4g1E36pf7scajv8IcTfWKziUCdajwWHjl8s8igc=s96-c'})=>{

  return (
      <div className={`flex gap-4 items-start  `}>
      <Image className=" rounded-full mt-1 " alt='UserProfile' src={src} width={32} height={32}/>
        <div>
            <div className="flex gap-2">
              <p className='text-sm font-bold'>{name}</p>
              <p className={`text-xs font-extralight mt-[1px]`}>{time}</p>
            </div>
            <p className=" line-clamp-2 ">{message}</p>
        </div>
     </div>
  )
}


const Loader = () => { 
  return(
    <svg aria-hidden="true" className="w-4 h-4 mt-[2px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
  )
}