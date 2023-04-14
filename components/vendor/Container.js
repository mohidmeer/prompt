import React from 'react'

const Container = ({children ,label}) => {
  return (
    <div className='mt-8 p-4 rounded-2xl  max-w-5xl mx-auto border border-gray-300  '>
        <p className='font-bold text-xl mb-4'>{label}</p>
        <hr className='-mx-4 bg-slate-300 mb-8 '/>
        {children}
    </div>
  )
}

export default Container