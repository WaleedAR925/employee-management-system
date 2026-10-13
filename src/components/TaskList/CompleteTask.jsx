import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-75 bg-white border border-[#E5E7EB]  flex-shrink-0 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] '>
        <div className='flex justify-between '>
          <h3 className='bg-[#2E7D32]/10 text-[#2E7D32] text-sm px-3 py-1 font-semibold rounded'>{data.category}</h3>
        <h4 className='text-[#6B7280] text-sm font-semibold '>{data.taskDate}</h4>
        </div>
        <div className='flex justify-center flex-col mt-5 gap-3  text-[#1A1A1A]'>
        <h2 className='text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm font-normal text-[#6B7280]'>{data.taskDecription}</p>
        </div>
        <div className='flex justify-center items-center mt-2'>
            <button className='bg-[#2E7D32]/10 text-[#2E7D32] font-bold px-7 py-2 text-sm w-full cursor-default'>Completed</button>
        </div>
        
       </div>
  )
}

export default CompleteTask