import { Menu } from "@headlessui/react"


const TopBar = () => {
  return (
    <div className="text-center  py-1 flex justify-center border-b-2 border-white">
      

      <Menu as="div" class=" ml-auto relative inline-block text-left mr-2">
        <div>
          <Menu.Button
            type="button"
            className=" inline-flex w-full justify-center text-sm font-medium  shadow-sm "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            English
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </Menu.Button>
        </div>

        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md  bg-dark shadow-lg  ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className=" block px-4 py-2 text-sm hover:bg-green "
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              한국어
            </a>
            <a
              href="#"
              className=" block px-4 py-2 text-sm hover:bg-green"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              日本語
            </a>
           
            
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default TopBar