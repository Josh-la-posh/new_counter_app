import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-[4rem] bg-black text-white w-full flex items-center justify-between px-4'>
        <span className='text-red-600 text-5xl font-bold'>D <span className='text-white ml-[-35px]'>S</span></span>
        <div className="flex gap-5">
            <Link to='/'>Todo-List</Link>
            <Link to='/counter'>Counter</Link>
        </div>
    </div>
  )
}

export default Header