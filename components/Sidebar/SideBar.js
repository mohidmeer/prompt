import AppContext from '@/context/context';
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaDiscord, FaFacebook, FaInfinity, FaInstagram, FaLinkedin, FaPinterest, FaReddit, FaShareAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiCollection } from "react-icons/hi";
import { ImCalendar } from "react-icons/im";
import { RiAuctionFill} from "react-icons/ri";
import { BiCollection, BiListPlus, BiSearch} from "react-icons/bi";
import {  BsFillBookmarkFill,BsListUl} from "react-icons/bs";
import {MdCollectionsBookmark,MdPhonere, MdCelebration, MdPhotoAlbum} from "react-icons/md";
import { IoIosRocket,IoIosCreate} from "react-icons/io";
import {  AiFillQuestionCircle} from "react-icons/ai";
import { GrAssistListening } from "react-icons/gr";

const SideBar = () => {
    const myContext = useContext(AppContext);
  return (

    <aside className={`sidebar h-screen sticky hrefp-0 transition-all ease-out lg:w-64  ${myContext.sidebarstate ? 'lg:w-64': 'lg:w-20' }      `} >
    
    <div class={`flex flex-col gap-y-6  overflow-hidden py-4 px-3  rounded  lg:bg-transparent `}>
    <ul class="space-y-2  justify-between block lg:block md:block    ">


<li className=' font-bold lg:flex hidden gap-x-1 text-gray-600    '>
  <span className={`${myContext.sidebarstate ? '': 'lg:hidden' }`}> 
  Communities
  </span>
   
</li><hr className='lg:flex hidden bg-dark h-[2px] '/>


    <li className='ml-2' >
         <Link className='bg-dark flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/explore' >
             <BiSearch className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
               <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }    ` }>Explore</span>
            </Link>
         </li>


<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/communities' >
    <FaInfinity className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }    ` }>Social Communities</span>
        
   </Link        >

</li>
<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'  smooth       href='/socialmint-share' >
    <FaShareAlt className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }  ` }>Social Mint Share</span>
        
   </Link        >

</li>
<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/discord' >
    <FaDiscord className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    } />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' }  ` }>Mint Messenger</span>
   
   </Link        >

</li>



<li className=' font-bold  gap-x-1 lg:flex hidden text-gray-600  mt-1 '>

<span className={`${myContext.sidebarstate ? '': 'lg:hidden' }`}> 
   Marketplace
  </span>
</li><hr className='bg-dark h-[2px] lg:flex hidden '/>

<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/collection' >
    <MdCollectionsBookmark className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Our Collections</span>
                   </Link>

</li>
<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/collection-t#trending' >
    <HiCollection className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Trending Collections</span>
                   </Link>

</li>
<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/collection-b#trending' >
    <MdPhotoAlbum className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Blue Chips</span>
                   </Link>

</li>
<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/collection-c#trending' >
    <MdCelebration className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Celebrity</span>
                   </Link>

</li>
<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/watchlist' >
    <BsFillBookmarkFill className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
      <span class={`ml-3 hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Watchlist</span>
</Link>

</li>



<li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
<span className={`${myContext.sidebarstate ? '': 'lg:hidden' }`}> 
   Creahrefr
  </span>
</li><hr className='bg-dark h-[2px] lg:flex hidden '/>

<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/create-collection' >
<IoIosCreate className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Create Collection</span>
  
   </Link>
</li>
<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' href="/list-collection">
<BsListUl className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3  hidden lg:block font-bold  ${myContext.sidebarstate ? '': 'lg:hidden' } `}>List Collection</span>
   </Link>
   {/* previous href='/list' */}
</li>


<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/createwhitelist' >
<BiListPlus className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Create Whitelist</span>
  
   </Link>
</li>
<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/whitelist' >
<BiCollection className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Whitelist Register</span>
  
   </Link>
</li>


<li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
<span className={`${myContext.sidebarstate ? '': 'lg:hidden' }`}> 
   Launch
  </span>
</li><hr className='bg-dark h-[2px] lg:flex hidden '/>

{/* <li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/create-collection' >
<IoIosCreate className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>List Collection</span>
  
   </Link>
</li> */}

<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' href="/auctions">
<RiAuctionFill className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3  hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Auction</span>
   </Link>
</li>

<li className='ml-2'>
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark' href="/drops">
<ImCalendar className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3  hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Drop</span>
   </Link>
</li>


<li className=' font-bold lg:flex hidden gap-x-1 text-gray-600  mt-1 '>
<span className={`${myContext.sidebarstate ? '': 'lg:hidden' }`}> 
   Support
  </span>
</li><hr className='bg-dark h-[2px] lg:flex hidden '/>
<li className='ml-2' >
<a className={`flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark `} href='https://www.youtube.com'  >
<FaYoutube className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Youtube</span>
  
   </a>
</li>
<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/artist-assist' >
<GrAssistListening className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Artist Services</span>
   </Link>
</li>
<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lg  hover:bg-dark'        href='/launch-services' >
<IoIosRocket className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `    }  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Marketing Services</span>
   </Link>
</li>
<li className='ml-2' >
<Link className= 'flex items-center p-1 text-xs font-normal  rounded-lgext-orange-600  hover:bg-dark'        href='/hints' >
<AiFillQuestionCircle className={`flex-shrink-0 w-6 h-6    transition duration-75 group-hover: dark:text-gray-400 dark:group-hover:  ${myContext.sidebarstate ? '': 'ml-1' } `}  />
 <span class={`ml-3   hidden lg:block font-bold ${myContext.sidebarstate ? '': 'lg:hidden' } `}>Hints & Tips</span>
   </Link>
</li>







</ul>
      {/* <ul class="space-y-2  justify-between block lg:block md:block    ">


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
      </ul> */}
      
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