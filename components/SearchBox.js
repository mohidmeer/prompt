import React from 'react'
import { MdSearch} from 'react-icons/md'
import { FaSearch} from 'react-icons/fa'
const SearchBox = () => {
  return (
    <form className='w-full md:w-1/3 '>   
     <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
            <input type="search" id="default-search" 
            className=" border border-gray-300
            block w-full p-2 pl-5 text-sm 
            text-gray-900  bg-gray-50  outline-none focus:ring-2 focus:ring-black/30 " 
            placeholder="Search Prompts" required />
            <button type="submit" 
            className="
                hidden
                md:block
                text-white absolute 
                right-2.5 top-1
                bg-black focus:ring-2 focus:outline-none
                focus:ring-black/30   p-2  text-xs">
                    <FaSearch />  
                </button>
        </div>
    </form>
  )
}

export default SearchBox