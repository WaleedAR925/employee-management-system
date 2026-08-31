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
    <div className='h-screen w-screen flex justify-center items-center bg-[#071108] relative overflow-hidden'>

      {/* Ambient glow blobs for depth */}
      <div className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#C01062]/20 blur-3xl'></div>
      <div className='absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#2196F3]/20 blur-3xl'></div>

      {/* Gradient border wrapper */}
      <div className='p-[2px] bg-gradient-to-br from-[#C01062] via-[#7B2FF7] to-[#2196F3] shadow-[0_0_40px_rgba(192,16,98,0.35)] relative z-10'>
        <div className='bg-[#071108] p-10 sm:p-12'>

          <form
            onSubmit={(e) => { submitHamdler(e); }}
            action="submit"
            className='flex flex-col gap-5 w-72 sm:w-80'
          >
            <img
              className='h-28 w-28 self-center rounded-full ring-2 ring-[#C01062]/40 p-1'
              src="src/assets/user (1).png"
              alt=""
            />

            <div className='text-center mb-2'>
              <h1 className='text-white text-xl font-bold tracking-wide'>Welcome Back</h1>
              <p className='text-gray-500 text-xs mt-1'>Login to continue to your account</p>
            </div>

            {/* Email field */}
            <div className='flex items-center gap-2 border-b bg-transparent [border-image:linear-gradient(90deg,#C01062,#2196F3)_1] focus-within:[border-image:linear-gradient(90deg,#C01062,#7B2FF7,#2196F3)_1] transition-all py-2 px-1'>
              <Mail className='text-[#C01062]' size={18} />
              <input
                required
                className='bg-transparent outline-none text-white placeholder-gray-500 w-full text-sm'
                type="email"
                placeholder='Enter your email'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>

            {/* Password field */}
            <div className='flex items-center gap-2 border-b bg-transparent [border-image:linear-gradient(90deg,#C01062,#2196F3)_1] focus-within:[border-image:linear-gradient(90deg,#C01062,#7B2FF7,#2196F3)_1] transition-all py-2 px-1'>
              <Lock className='text-[#C01062]' size={18} />
              <input
                required
                className='bg-transparent outline-none text-white placeholder-gray-500 w-full text-sm'
                type="password"
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>

            <button
              type="submit"
              className='bg-gradient-to-r from-[#8a0e4d] to-[#4a2a80] hover:from-[#a01059] hover:to-[#5a34a0] text-white transition-all duration-200 p-3 font-bold mt-4 shadow-[0_4px_20px_rgba(192,16,98,0.3)] hover:shadow-[0_4px_25px_rgba(192,16,98,0.5)] active:scale-[0.98]'
            >
              Log in
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login