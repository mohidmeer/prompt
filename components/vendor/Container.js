import React from 'react'

const Container = ({children ,label}) => {
  return (
    <div className='mt-8 p-4 rounded-2xl  max-w-5xl mx-auto border border-dark-border  '>
        <p className='font-bold text-xl mb-4 text-gray-200'>{label}</p>
        <div className='-mx-4  mb-8 bg-dark-border h-[2px]'></div>
        {children}
    </div>
  )
}

export default Container