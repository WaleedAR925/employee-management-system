import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData] =  useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("")
  
  const submitHandler = (e) => {
  e.preventDefault()

  const task = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active: true,
    newTask: true,
    completed: false,
    failed: false
  }

  const data = JSON.parse(localStorage.getItem("employees"))

  data.forEach((elem) => {
    if (assignTo === elem.firstName) {
      elem.tasks.push(task)
      elem.taskNumbers.active += 1
      elem.taskNumbers.newTask += 1
    }
  })
  console.log("Ali tasks:", data[0].tasks)
console.log("Ali task count:", data[0].tasks.length)

  localStorage.setItem("employees", JSON.stringify(data))
  setUserData(data)

  setTaskTitle("")
  setTaskDescription("")
  setTaskDate("")
  setAssignTo("")
  setCategory("")
  
}
  return (
    <div className='text-[#1A1A1A] '>
        <div className='  w-full'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex justify-between' >
        <div className='flex flex-col  gap-3 w-1/2   p-5'>
            <div>
        <h3 className='text-[#6B7280] text-sm mb-1'>Task Title</h3>
        <input className='w-8/10 h-9 outline-none border border-[#E5E7EB] bg-white  py-2 px-2 text-[#1A1A1A] placeholder-[#9CA3AF] focus:border-[#1E3A5F] transition-all rounded' type="text" placeholder='Text'
        value={taskTitle}
        onChange={(e)=>{
          setTaskTitle(e.target.value)
        }}/>
        </div>
        <div>
        <h3 className='text-[#6B7280] text-sm mb-1'>Date</h3>
        <input className='w-8/10 h-9 outline-none border border-[#E5E7EB] bg-white  py-2 px-2 text-[#1A1A1A] placeholder-[#9CA3AF] focus:border-[#1E3A5F] transition-all rounded' type="date" name="" id="" placeholder='Text'
        value={taskDate}
        onChange={(e)=>{
          setTaskDate(e.target.value)}}/>
        </div>
        <div>
        <h3 className='text-[#6B7280] text-sm mb-1'>Asign to</h3>
        <input className='w-8/10 h-9  bg-white border border-[#E5E7EB] outline-none py-2 px-2 text-[#1A1A1A] placeholder-[#9CA3AF] focus:border-[#1E3A5F] transition-all rounded' type="text" placeholder='Text'
        value={assignTo}
        onChange={(e)=>{
          setAssignTo(e.target.value)}} />
        </div>
        <div>
        <h3 className='text-[#6B7280] text-sm mb-1'>Category</h3>
        <input className='w-8/10 h-9  bg-white border border-[#E5E7EB] outline-none py-2 px-2 text-[#1A1A1A] placeholder-[#9CA3AF] focus:border-[#1E3A5F] transition-all rounded'  type="text" placeholder='Text'
        value={category}
        onChange={(e)=>{
          setCategory(e.target.value)}}/>
        </div>
        </div>
        <div className='w-1/2  flex flex-col  p-5  '>
        <h3 className='ml-32 text-[#6B7280] text-sm mb-1'>Description</h3>
        <textarea className='h-50 ml-32 w-8/10 rounded  bg-white border border-[#E5E7EB] outline-none py-2 px-2 text-[#1A1A1A] placeholder-[#9CA3AF] focus:border-[#1E3A5F] transition-all' name="" id=""
        value={taskDescription}
        onChange={(e)=>{
          setTaskDescription(e.target.value)}} ></textarea>
        <button className='bg-[#1E3A5F] hover:bg-[#254a77] text-white transition-all duration-200 ml-32 w-8/10 py-3 mt-2 font-bold rounded shadow-[0_4px_14px_rgba(30,58,95,0.25)] hover:shadow-[0_4px_18px_rgba(30,58,95,0.35)] active:scale-95'>Create Task</button>

      </div>
      </form>
      
      </div>
    </div>
  )
}

export default CreateTask