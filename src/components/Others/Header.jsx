import React from 'react'

const Header = ({ changeUser, data }) => {

  const loggedOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    changeUser("")
  }

  return (
    <div className='flex items-end justify-between bg-white border-b border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-5'>

      <h1 className='text-sm font-medium text-[#6B7280]'>
        Hello <br />

        <span className='text-2xl font-semibold text-[#1E3A5F]'>
          {data ? data.firstName : "Admin"}
        </span>

        <span className='text-2xl'>👋</span>
      </h1>

      <button
        onClick={loggedOutUser}
        className='bg-[#1E3A5F] hover:bg-[#254a77] transition-all duration-200 text-white font-medium px-5 py-2 shadow-[0_4px_14px_rgba(30,58,95,0.25)] hover:shadow-[0_4px_18px_rgba(30,58,95,0.35)] active:scale-[0.98]'
      >
        Log Out
      </button>

    </div>
  )
}

export default Header