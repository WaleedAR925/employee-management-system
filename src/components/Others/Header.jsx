import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between bg-[#302D35]  p-5 '>
      <h1 className='text-smxl font-medium text-white'>Hello <br/> <span className='text-2xl font-medium text-white'>Waleed 👋</span></h1>
      <button className='bg-red-600 text-white font-medium px-5 py-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header
