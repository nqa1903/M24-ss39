import React from 'react'

export default function Form() {
  return (
    <div className='bg-slate-200 px-10 py-20 rounded-3xl border-2 border-white'>
       <h1 className='text-3xl justify-center items-center'>Welcome back</h1>
       <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details</p>
       <div className='mt-4'>
        <div>
            <label htmlFor="" className='text-lg font-medium'>Email : </label>
            <input type="text" placeholder='Enter your email' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'/>
        </div>
        <div>
            <label htmlFor="" className='text-lg font-medium'>Password : </label>
            <input type="password" placeholder='Enter your password' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'/>
        </div>
        <div className='mt-4 flex - justify-between items-center'>
            <div>
                <input type="checkbox"/>
                <label htmlFor="" className='ml-2 font-medium text-base'>Remember for 30 days</label>
            </div>
            <button className='font-medium text-base '>Forget password</button>
        </div>
       </div>
       <div className='mt-4 flex flex-col gap-y-4'>
        <button className='bg-gradient-to-br from-slate-500 to-emerald-400 text-white text-lg py-2 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out'>Sign in</button>
        <button>
            Sign in with Google
        </button>
       </div>
    </div>
  )
}
