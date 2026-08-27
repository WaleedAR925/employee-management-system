import React, { useState } from 'react'
import { Mail } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   const submitHamdler=(e)=>{
    e.preventDefault();
      console.log("Form Submitted");
      
    }
  return (
   
    <div className='h-screen w-screen flex justify-center items-center'>
     <div className=' p-20'>
      <form onSubmit={(e)=>{
        submitHamdler(e);
      }}
       action="submit" className='flex flex-col gap-2'>
        <img className='h-35 w-35 self-center ' src="src/assets/user (1).png" alt="" />
        <h1 className='text-4xl self-center mb-5 text-amber-50 font-light'>User Login</h1>
        <div className='flex justify-center items-center gap-1'>
         
        <input required className='border-b bg-transparent border-[#A6E1FA] py-3  w-85 outline-none placeholder:text-gray-600' 
        type="email" 
        placeholder='Enter your email'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value )

        }}
        
         />
         </div>
        <input required className='border-b bg-transparent  border-[#A6E1FA]  py-3 w-85 outline-none placeholder:text-gray-600'
         type="password"
         placeholder='Enter your Password'
         value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
          }} />
        <button className='bg-[#A6E1FA] rounded p-3 text-white font-bold mt-3'>Log in</button>
      </form>
     </div>
    </div>
  )
}

export default Login
