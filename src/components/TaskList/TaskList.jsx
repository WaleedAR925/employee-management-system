import React from 'react'

const TaskList = () => {
  return (
    <div  id='tasklist' className='h-[50%] w-full  mt-5 flex items-center justify-start flex-nowrap p-5 gap-5 overflow-x-auto'>
       <div className='h-full w-75 bg-red-700 rounded-2xl flex-shrink-0 flex justify-between items-start p-5'>
        <h3 className='bg-green-500 text-sm px-3 py-1 rounded text-white'>High</h3>
        <h4 className='text-white text-sm '>24 Aug 2026</h4>
         <div className='flex flex-col'>
         <h1 >Complete React Js full Course</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum suscipit ab officiis cupiditate tempora animi dolorum eligendi tempore saepe, provident perspiciatis facere asperiores labore autem obcaecati. Facere, temporibus a.</p>
       </div>
       </div>
      
        
    </div>
  )
}

export default TaskList
