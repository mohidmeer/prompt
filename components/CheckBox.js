import Tippy from "@tippyjs/react"

const CheckBox = ({label,selected,handle,value}) => {

  return (
    <div class="flex items-center mr-4">
          <input type="checkbox" 
          value={value}
          checked={selected===value}
          onChange={handle}
          className="w-4 h-4 bg-gray-100 border outline-2 border-gray-300 focus:outline-black accent-black flex-shrink-0 "
          />
          <Tippy content={label} placement="right">
             <label className="ml-2 text-sm font-bold text-gray-900 line-clamp-1">{label}</label>
          </Tippy>
    </div>
    
    )
}

export default CheckBox 