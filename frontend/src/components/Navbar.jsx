import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-around shadow-custom p-4'>
        <h3>Connection-Wala</h3>
        <ul className='flex'>
            <li  className='px-4 py-15'>
                <Link to="/signup">Signup</Link>
                </li>
            <li className='px-4 py-15'>
            <Link to="/signin">Signin</Link>
            </li>
            <li className='px-4 py-15'>
            <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar