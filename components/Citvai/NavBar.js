import { Listbox, Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { BiChevronDown } from "react-icons/bi"

const NavBar = () => {
  const router= useRouter();

  const active=true
  return (
    <div className="p-2 text-sm text-gray-300  ">
      <div className="flex justify-between">
        <div className="flex items-center">
            <Link  href='/ee'     className={` ${router.pathname==='/' ? 'bg-dark-border rounded-md text-white':'' }     p-1 px-3 border-r items-center border-dark-border font-bold`}>Images</Link> 
            <Link  href='/e'      className={` ${router.pathname==='/e' ? 'bg-dark-border rounded-md text-white':'' }    p-1 px-3 border-r items-center border-dark-border font-bold`}>Posts</Link> 
            
            
            <FilterMenu /> 
        </div>
        <Timefilter/>
        

      </div>

    </div>
  )
}

export default NavBar




function FilterMenu() {

  const people = [
    { id: 1, name: 'Latest'},
    { id: 2, name: 'Most Liked'},
    { id: 3, name: 'Most Sales'}
    
  ]
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
     <Listbox as={'div'} className='relative ml-4' value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className={'relative  w-40 cursor-pointer rounded-lg pl-8 text-lg font-extrabold gap-2 whitespace-nowrap flex items-center'}>
        {selectedPerson.name}
      <BiChevronDown className="text-xl"/>
      </Listbox.Button>
      <Listbox.Options    className={`absolute top-6 left-10 max-h-60 w-full overflow-auto rounded-md bg-dark-light shadow-lg sm:text-sm p-2 `}>
        {people.map((person) => (
          <Listbox.Option  className={'w-30  text-center hover:bg-dark-border p-1 hover:rounded-sm cursor-pointer border-b border-dark-border'}
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

function Timefilter() {

  const people = [
    { id: 1, name: 'Day'},
    { id: 2, name: 'Week'},
    { id: 3, name: 'Month'},
    { id: 4, name: 'All Time'}
    
  ]
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
     <Listbox as={'div'} className='relative ml-4' value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className={'relative  w-30 cursor-pointer rounded-lg pl-8 lg font-extrabold flex gap-2 whitespace-nowrap'}>
        {selectedPerson.name}
      <BiChevronDown className="text-xl"/>
      </Listbox.Button>
      <Listbox.Options className={`absolute top-5 left-10 max-h-60 w-full overflow-auto rounded-md bg-dark-light   shadow-lg sm:text-sm p-2 `}>
        {people.map((person) => (
          <Listbox.Option  className={'w-30 mt-2 text-center hover:bg-dark-border p-1 hover:rounded-sm cursor-pointer border-b border-dark-border'}
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}


