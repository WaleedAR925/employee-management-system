import React from 'react'

const TasksGiven = () => {
  return (
    <div className='h-40 mt-2 w-full p-3 flex flex-col flex-nowrap overflow-auto text-white font-bold gap-2'>
      <div className='bg-red-500 flex justify-between h-12 p-2 items-center rounded'>
        <h3>Waleed</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
       <div className='bg-amber-400 flex justify-between h-12 p-2 items-center rounded'>
        <h3>Waleed</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
      <div className='bg-green-600 flex justify-between h-12 p-2 items-center rounded'>
        <h3>Waleed</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
      <div className='bg-blue-600 flex justify-between h-12 p-2 items-center rounded'>
        <h3>Waleed</h3>
        <h3>Make a UI</h3>
        <h3>Status</h3>
      </div>
    </div>
  )
}

export default TasksGiven
