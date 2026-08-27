import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <div className=' bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700  h-screen w-screen' >
      <Login/>
      {/*<EmployeeDashboard/> */}
      {/*<AdminDashboard/>*/}
    </div>
  )
}

export default App
