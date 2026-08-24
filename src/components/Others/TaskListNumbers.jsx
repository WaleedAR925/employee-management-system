import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between screen gap-5 p-5  '>
      <div className='w-[45%] bg-blue-700 px-10 py-5 mt-5 rounded-2xl'>
        <h1 className='text-5xl font-semibold text-white'>0</h1>
        <h3 className='text-xl font-semibold text-white'>New Task</h3>
      </div>
      <div className='w-[45%] bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-10 py-5 mt-5 rounded-2xl'>
        <h1 className='text-5xl font-semibold text-white'>0</h1>
        <h3 className='text-xl font-semibold text-white'>New Task</h3>
      </div>
      <div className='w-[45%] bg-green-600 px-10 py-5 mt-5 rounded-2xl'>
        <h1 className='text-5xl font-semibold text-white'>0</h1>
        <h3 className='text-xl font-semibold text-white'>New Task</h3>
      </div>
      <div className='w-[45%] bg-amber-500 px-10 py-5 mt-5 rounded-2xl'>
        <h1 className='text-5xl font-semibold text-white'>0</h1>
        <h3 className='text-xl font-semibold text-white'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
