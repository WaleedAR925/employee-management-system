import React from 'react'
import CreateTask from '../Others/CreateTask'
import Header from '../Others/Header'
import TasksGiven from '../Others/TasksGiven'

const AdminDashboard = (props) => {
  return (
    <div>
        <Header changeUser = {props.changeUser}/>
      <CreateTask/>
      <TasksGiven/>
      
    </div>
  )
}

export default AdminDashboard
