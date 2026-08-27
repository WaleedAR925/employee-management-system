import React from 'react'

const CreateTask = () => {
  return (
    <div className='text-white '>
        <div className='  w-full'>
      <form className='flex justify-between' >
        <div className='flex flex-col  gap-3 w-1/2   p-5'>
            <div>
        <h3>Task Title</h3>
        <input className='w-8/10 h-9 outline-none border-2 bg-transparent border-[#4b4650] rounded' type="text" placeholder='Text'/>
        </div>
        <div>
        <h3>Date</h3>
        <input className='w-8/10 h-9 outline-none border-2 bg-transparent border-[#4b4650] rounded' type="date" name="" id="" placeholder='Text'/>
        </div>
        <div>
        <h3>Asign to</h3>
        <input className='w-8/10 h-9 outline-none bg-transparent border-2 border-[#4b4650] rounded' type="text" placeholder='Text' />
        </div>
        <div>
        <h3>Category</h3>
        <input className='w-8/10 h-9 outline-none bg-transparent border-2 border-[#4b4650] rounded' type="text" placeholder='Text'/>
        </div>
        </div>
        <div className='w-1/2  flex flex-col  p-5  '>
        <h3 className='ml-32'>Description</h3>
        <textarea className='h-50 ml-32 w-8/10 rounded  bg-transparent border-2 border-[#4b4650]' name="" id="" ></textarea>
        <button className='bg-green-500 ml-32 w-8/10 py-3 mt-2 rounded font-bold active:scale-95'>Create Task</button>

      </div>
      </form>
      
      </div>
    </div>
  )
}

export default CreateTask
