import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState({
        name: 'Oumou',
        age: 20,
    })
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <input className='border-2 border-gray-300 rounded-md p-2' type="text" name="name" id="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
        <input className='border-2 border-gray-300 rounded-md p-2' type="number" name="age" id="age" value={user.age} onChange={(e) => setUser({...user, age: e.target.value})} />
        <p className='text-2xl'>Name:  <strong>{user.name}</strong></p>
        <p className='text-2xl'>Age: <strong>{user.age}</strong></p>
    </div>
  )
}
export default Profile