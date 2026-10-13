import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between screen gap-5 p-5  '>
      <div className='w-[45%] bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.06)] px-10 py-5 mt-5 '>
        <h1 className='text-5xl font-semibold text-[#6B7280]'>{data.taskNumbers.newTask}</h1>
        <h3 className='text-xl font-semibold text-[#1A1A1A]'>New Task</h3>
      </div>
      <div className='w-[45%] bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.06)] px-10 py-5 mt-5 '>
        <h1 className='text-5xl font-semibold text-[#2E6F95]'>{data.taskNumbers.active}</h1>
        <h3 className='text-xl font-semibold text-[#1A1A1A]'>Active Task</h3>
      </div>
      <div className='w-[45%] bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.06)] px-10 py-5 mt-5'>
        <h1 className='text-5xl font-semibold text-[#2E7D32]'>{data.taskNumbers.completed}</h1>
        <h3 className='text-xl font-semibold text-[#1A1A1A]'>Completed Task</h3>
      </div>
      <div className='w-[45%] bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.06)] px-10 py-5 mt-5 '>
        <h1 className='text-5xl font-semibold text-[#B02A37]'>{data.taskNumbers.failed}</h1>
        <h3 className='text-xl font-semibold text-[#1A1A1A]'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers