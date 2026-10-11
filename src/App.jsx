import React, { useState } from 'react'

const App = () => {
const [count , setcount]= useState(0);
  return (
    
      <div className=' bg-stone-400 h-screen flex justify-center items-center flex-col gap-4' >
      <div className='bg-sky-500  w-50 h-50 rounded-2xl  flex justify-center items-center text-7xl'>
        {count}
      </div>
     <div className='flex gap-2'>
        <button className='bg-black text-white px-4 py-2 rounded' onClick={function(){setcount (count+1)}}>+</button>
        <button className='bg-black text-white px-4 py-2 rounded' onClick={function(){setcount (count-1)}}>-</button>
        <button className='bg-black text-white px-4 py-2 rounded' onClick={function(){setcount (0)}}>reset</button>
      </div>
    </div>
  )
}

export default App
