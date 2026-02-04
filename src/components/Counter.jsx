import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
  return (
    <div className='flex flex-col items-center justify-center gap-4'>

        <h1 className='text-2xl'> Counter App </h1>

        <span className='text-2xl font-bold text-center'> {count} </span>
        <button onClick={increment} className='border-4 border-gray-500 rounded-md p-2'> + </button>
    </div>
  )
}

export default Counter