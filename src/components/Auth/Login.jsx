import React, { useState } from 'react'
import { Mail, Lock } from 'lucide-react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHamdler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-[#E8ECF1] relative overflow-hidden'>

      <div className='bg-white border border-[#C9D9EC] border-t-4 border-t-[#2563A8] shadow-[0_10px_30px_rgba(37,99,168,0.18)] p-10 sm:p-12 relative z-10'>

        <form
          onSubmit={(e) => { submitHamdler(e); }}
          action="submit"
          className='flex flex-col gap-5 w-72 sm:w-80'
        >
          <img
            className='h-24 w-24 self-center rounded-full ring-2 ring-[#2563A8]/30 p-1 bg-[#EAF2FB]'
            src="src/assets/user (1).png"
            alt=""
          />

          <div className='text-center mb-2'>
            <h1 className='text-[#1E3A5F] text-xl font-bold tracking-wide'>Welcome Back</h1>
            <p className='text-[#6B7280] text-xs mt-1'>Login to continue to your account</p>
          </div>

          {/* Email field */}
          <div className='flex items-center gap-2 border-b-2 border-[#C9D9EC] bg-[#F3F8FD] focus-within:border-[#2563A8] focus-within:bg-[#EAF2FB] transition-all py-2 px-2'>
            <Mail className='text-[#2563A8]' size={18} />
            <input
              required
              className='bg-transparent outline-none text-[#1A1A1A] placeholder-[#9CA3AF] w-full text-sm'
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          {/* Password field */}
          <div className='flex items-center gap-2 border-b-2 border-[#C9D9EC] bg-[#F3F8FD] focus-within:border-[#2563A8] focus-within:bg-[#EAF2FB] transition-all py-2 px-2'>
            <Lock className='text-[#2563A8]' size={18} />
            <input
              required
              className='bg-transparent outline-none text-[#1A1A1A] placeholder-[#9CA3AF] w-full text-sm'
              type="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <button
            type="submit"
            className='bg-[#2563A8] hover:bg-[#1E3A5F] text-white transition-all duration-200 p-3 font-bold mt-4 shadow-[0_4px_14px_rgba(37,99,168,0.4)] hover:shadow-[0_4px_18px_rgba(30,58,95,0.5)] active:scale-[0.98]'
          >
            Log in
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login