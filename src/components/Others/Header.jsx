import React, { useState } from 'react'
import { setLocalStorage } from '../../Utils/LocalStorage'

const Header = ({data}) => {
  // const [userName, setUserName] = useState("")
  // if(!data){
  //   setUserName("Admin")
  // }
  // else{
  //   setUserName(data.firstName)
  // }
  const loggedOutUser = ()=>{
    localStorage.setItem("loggedInUser","")
    window.location.reload()

  }
  return (
    <div className='flex items-end justify-between bg-[#0F1B12] border-b border-white/5 p-5'>
      <h1 className='text-sm font-medium text-white'>
        Hello <br />
        <span className='text-2xl font-semibold bg-gradient-to-r from-[#C01062] via-[#7B2FF7] to-[#2196F3] bg-clip-text text-transparent'>
          userName </span>{' '}
  <span className='text-2xl'>👋</span>
        
      </h1>

      <button onClick={loggedOutUser} className='bg-gradient-to-r from-[#8a0e4d] to-[#4a2a80] hover:from-[#a01059] hover:to-[#5a34a0] transition-all duration-200 text-white font-medium px-5 py-2  shadow-[0_4px_20px_rgba(192,16,98,0.3)] hover:shadow-[0_4px_25px_rgba(192,16,98,0.5)] active:scale-[0.98]'>
        Log Out
      </button>
    </div>
  )
}

export default Header