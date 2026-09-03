import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const TasksGiven = () => {
  const authData = useContext(AuthContext)
  
  
  return (
    <div className=' mt-2 w-full p-3 flex flex-col flex-nowrap  text-white font-bold gap-2'>
      <div className='bg-gradient-to-br from-[#C01062] via-[#8a1470] to-[#3a1268] shadow-[0_8px_30px_rgba(192,16,98,0.35)] flex justify-between h-12 p-2 items-center '>
        <h3 className=' w-1/5'>Employee Name</h3>
        <h3 className=' w-1/5'>Active task</h3>
        <h3 className=' w-1/5'>New Task</h3>
        <h3 className=' w-1/5'>Completed Task</h3>
        <h3 className=' w-1/5'>Failed Task</h3>
      </div>
      <div className='h-[80%] overflow-auto'>
        {authData.employees.map(function(e,idx){
        return <div key={idx} className='bg-transparent border-2  [border-image:linear-gradient(90deg,#C01062,#7B2FF7,#2196F3)_1] shadow-[0_0_25px_rgba(192,16,98,0.4)] flex justify-between h-12 p-2 mt-2 items-center'>
        <h3 className=' w-1/5'>{e.firstName }</h3>
        <h3 className=' w-1/5 px-6'>{e.taskNumbers.active}</h3>
        <h3 className=' w-1/5 px-6 '>{e.taskNumbers.newTask}</h3>
        <h3 className=' w-1/5 px-6'>{e.taskNumbers.completed}</h3>
        <h3 className=' w-1/5 px-6'>{e.taskNumbers.failed}</h3>
      </div>
      })}
      </div>
       
    </div>
  )
}

export default TasksGiven
