import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   const submitHamdler=(e)=>{
    e.preventDefault();
      console.log("Form Submitted");
      
    }
  return (
   
    <div className='h-screen w-screen flex justify-center items-center'>
     <div className='border-amber-400 border-2 p-20'>
      <form onSubmit={(e)=>{
        submitHamdler(e);
      }}
       action="submit" className='flex flex-col gap-2'>
        <input required className='border-amber-700 bg-transparent border-2 rounded-3xl p-3 w-85 outline-none ' 
        type="email" 
        placeholder='Enter your email'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)

        }}
         />
        <input required className='border-amber-700 bg-transparent border-2 rounded-3xl p-3 w-85 outline-none '
         type="password"
         placeholder='Enter your Password'
         value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
          }} />
        <button className='bg-amber-700 rounded-3xl p-3 text-white font-bold mt-3'>Log in</button>
      </form>
     </div>
    </div>
  )
}

export default Login
