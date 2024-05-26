import React from 'react';
import Form from './component/Form';

export default function App() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'> 
        <Form></Form>
      </div>
      <div className='hidden relative lg:flex items-center justify-center w-1/2 h-full bg-gray-200'>
        <div className='w-60 h-60 bg-gradient-to-tr from-slate-500 to-emerald-400 rounded-full animate-bounce'>
        </div>
        <div className='absolute bottom-0 w-full h-1/2 bg-white/10 backdrop-blur-lg'></div>
      </div>
    </div>
    // lg : large screen , mt : margin-top , p : padding 
  );
}
