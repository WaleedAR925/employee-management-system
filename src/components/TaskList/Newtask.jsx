import React from 'react'

const Newtask = () => {
  return (
     <div className='h-full w-75 bg-gradient-to-br from-[#C01062] via-[#8a1470] to-[#3a1268]  flex-shrink-0 p-5 shadow-[0_8px_30px_rgba(192,16,98,0.35)] '>
        <div className='flex justify-between '>
          <h3 className='bg-green-500 text-sm px-3 py-1 font-semibold rounded text-white'>High</h3>
        <h4 className='text-white text-sm font-semibold '>24 Aug 2026</h4>
        </div>
        <div className='flex justify-center flex-col mt-5 gap-3  text-white'>
        <h2 className='text-2xl font-semibold'>Complete React Project</h2>
        <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic vel ipsam iure suscipit. Facere.</p>
        </div>
        <div className='flex justify-center items-center mt-2'>
            <button className='bg-gradient-to-r from-[#8a0e4d] to-[#4a2a80] hover:from-[#a01059] hover:to-[#5a34a0] transition-all duration-200 text-white font-bold px-7 py-2 text-sm shadow-[0_4px_20px_rgba(192,16,98,0.3)] hover:shadow-[0_4px_25px_rgba(192,16,98,0.5)] active:scale-[0.98] w-full'>Accept Task</button>
        </div>
       </div>
  )
}

export default Newtask
