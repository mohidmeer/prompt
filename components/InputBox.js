const InputBox = ({ id,type='text' ,label,value,placeholder='',onChange}) => {
  return (
     <div className="my-4">
        <label htmlFor="first_name" 
        className="block mb-2  text-sm font-medium 
        text-gray-900 dark:text-white">{label}</label>
     
        <input type={type}
               onChange={onChange}
               id={id}
               className="
               bg-gray-50 
                border
               border-gray-300 
               text-gray-900 text-sm 
               focus:ring-black  
               focus:ring-1
               focus:border-black
               block 
               w-full p-2.5 
               outline-none
               "
               value={value}
               placeholder={placeholder} 
                />

    </div>
  )
}
export default InputBox