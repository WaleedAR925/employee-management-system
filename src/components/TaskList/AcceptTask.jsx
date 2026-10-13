import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({
  data,
  employee,
  setLoggedInUserData
}) => {

  const [userData, setUserData] = useContext(AuthContext)

  const markAsCompleted = () => {

    const updatedEmployees = userData.map((emp) => {

      if (emp.email === employee.email) {

        const updatedTasks = emp.tasks.map((task) => {

          if (
            task.taskTitle === data.taskTitle &&
            task.taskDate === data.taskDate
          ) {
            return {
              ...task,
              active: false,
              completed: true,
              newTask: false
            }
          }

          return task
        })

        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            ...emp.taskNumbers,
            active: emp.taskNumbers.active - 1,
            completed: emp.taskNumbers.completed + 1
          }
        }
      }

      return emp
    })

    const updatedEmployee = updatedEmployees.find(
      (emp) => emp.email === employee.email
    )

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    )

    setUserData(updatedEmployees)
    setLoggedInUserData(updatedEmployee)

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        data: updatedEmployee
      })
    )
  }


  const markAsFailed = () => {

    const updatedEmployees = userData.map((emp) => {

      if (emp.email === employee.email) {

        const updatedTasks = emp.tasks.map((task) => {

          if (
            task.taskTitle === data.taskTitle &&
            task.taskDate === data.taskDate
          ) {
            return {
              ...task,
              active: false,
              completed: false,
              failed: true,
              newTask: false
            }
          }

          return task
        })

        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers: {
            ...emp.taskNumbers,
            active: emp.taskNumbers.active - 1,
            failed: emp.taskNumbers.failed + 1
          }
        }
      }

      return emp
    })

    const updatedEmployee = updatedEmployees.find(
      (emp) => emp.email === employee.email
    )

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    )

    setUserData(updatedEmployees)
    setLoggedInUserData(updatedEmployee)

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        data: updatedEmployee
      })
    )
  }


  return (
    <div className='h-full w-75 bg-white border border-[#E5E7EB] flex-shrink-0 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]'>

      <div className='flex justify-between'>

        <h3 className='bg-[#2E6F95]/10 text-[#2E6F95] text-sm px-3 py-1 font-semibold rounded'>
          {data.category}
        </h3>

        <h4 className='text-[#6B7280] text-sm font-semibold'>
          {data.taskDate}
        </h4>

      </div>

      <div className='flex justify-center flex-col mt-5 gap-3 text-[#1A1A1A]'>

        <h2 className='text-2xl font-semibold'>
          {data.taskTitle}
        </h2>

        <p className='text-sm font-normal text-[#6B7280]'>
          {data.taskDescription}
        </p>

      </div>

      <div className='flex flex-col mt-2 gap-1'>

        <button
          onClick={markAsCompleted}
          className='bg-[#2E7D32] hover:bg-[#256428] transition-all duration-200 text-white font-bold px-7 py-2 text-sm shadow-[0_2px_8px_rgba(46,125,50,0.25)] active:scale-[0.98]'
        >
          Mark as Completed
        </button>

        <button
          onClick={markAsFailed}
          className='bg-[#B02A37] hover:bg-[#8f222c] transition-all duration-200 text-white font-bold px-7 py-2 text-sm shadow-[0_2px_8px_rgba(176,42,55,0.25)] active:scale-[0.98]'
        >
          Mark as Failed
        </button>

      </div>

    </div>
  )
}

export default AcceptTask