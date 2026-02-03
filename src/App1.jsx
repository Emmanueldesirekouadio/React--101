import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App1 = () => {
    console.log("Render A");
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    // Quand il y a useEffect il y a toujours montage
    // useEffect(() => {
    //     return()=>{
    //         console.log("ComponentUnmount")
    //     }
    // }, []);

    useEffect(()=> {
        console.log(" démarrage du  timer");
        const timer = setInterval(()=>{
           console.log(" tic tac : ", count)
        }, 2000)
    
        return()=> {
            console.log(" fin du timer ") ;
            clearInterval(timer);
        }
    
    }, [count])
    console.log("Render B");
  return (
    <div className='text-center'>
        <h1> count : {count} </h1>
        <button className='border-4' onClick={handleClick}> + </button>
    </div>
  )
}

export default App1