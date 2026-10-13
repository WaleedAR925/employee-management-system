import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TasksGiven = () => {

  const [authData] = useContext(AuthContext)

  if (!authData) {
    return null
  }

  return (
    <div className='mt-2 w-full p-3 flex flex-col flex-nowrap text-[#1A1A1A] font-bold gap-2'>

      <div className='bg-[#1E3A5F] shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex justify-between h-12 p-2 items-center text-white'>

        <h3 className='w-1/5'>Employee Name</h3>
        <h3 className='w-1/5'>Active task</h3>
        <h3 className='w-1/5'>New Task</h3>
        <h3 className='w-1/5'>Completed Task</h3>
        <h3 className='w-1/5'>Failed Task</h3>

      </div>

      <div className='h-[80%] overflow-auto'>

        {authData.map(function(e, idx) {

          return (
            <div
              key={idx}
              className='bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex justify-between h-12 p-2 mt-2 items-center'
            >

              <h3 className='w-1/5'>
                {e.firstName}
              </h3>

              <h3 className='w-1/5 px-6 text-[#2E6F95]'>
                {e.taskNumbers.active}
              </h3>

              <h3 className='w-1/5 px-6 text-[#6B7280]'>
                {e.taskNumbers.newTask}
              </h3>

              <h3 className='w-1/5 px-6 text-[#2E7D32]'>
                {e.taskNumbers.completed}
              </h3>

              <h3 className='w-1/5 px-6 text-[#B02A37]'>
                {e.taskNumbers.failed}
              </h3>

            </div>
          )

        })}

      </div>

    </div>
  )
}

export default TasksGiven