import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({
  changeUser,
  data,
  setLoggedInUserData
}) => {

  return (
    <div className="h-screen flex flex-col">

      <Header
        changeUser={changeUser}
        data={data}
      />

      <TaskListNumbers
        data={data}
      />

      <TaskList
        data={data}
        setLoggedInUserData={setLoggedInUserData}
      />

    </div>
  )
}

export default EmployeeDashboard