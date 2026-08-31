import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between screen gap-5 p-5  '>
      <div className='w-[45%] bg-transparent border-2  [border-image:linear-gradient(90deg,#C01062,#7B2FF7,#2196F3)_1] shadow-[0_0_25px_rgba(192,16,98,0.4)] px-10 py-5 mt-5 '>
        <h1 className='text-5xl font-semibold text-white'>{data.taskNumbers.newTask}</h1>
        <h3 className='text-xl font-semibold text-white'>New Task</h3>
      </div>
      <div className='w-[45%] bg-transparent border-2 [border-image:linear-gradient(90deg,#C01062,#7B2FF7,#2196F3)_1] shadow-[0_0_25px_rgba(192,16,98,0.4)] px-10 py-5 mt-5 '>
        <h1 className='text-5xl font-semibold text-white'>{data.taskNumbers.active}</h1>
        <h3 className='text-xl font-semibold text-white'>Active Task</h3>
      </div>
      <div className='w-[45%] bg-transparent border-2 [border-image:linear-gradient(90deg,#C01062,#7B2FF7,#2196F3)_1] shadow-[0_0_25px_rgba(192,16,98,0.4)] px-10 py-5 mt-5'>
        <h1 className='text-5xl font-semibold text-white'>{data.taskNumbers.completed}</h1>
        <h3 className='text-xl font-semibold text-white'>Completed Task</h3>
      </div>
      <div className='w-[45%] bg-transparent border-2 [border-image:linear-gradient(90deg,#C01062,#7B2FF7,#2196F3)_1] shadow-[0_0_25px_rgba(192,16,98,0.4)] px-10 py-5 mt-5 '>
        <h1 className='text-5xl font-semibold text-white'>{data.taskNumbers.failed}</h1>
        <h3 className='text-xl font-semibold text-white'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
