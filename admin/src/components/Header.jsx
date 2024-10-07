import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='shadow-md py-5 px-10 md:px-20'>
        <div className='flex justify-between items-center'>
            <Link to='/' className='text-3xl font-bold'>Student <span>Market</span></Link>
            <h1>Admin</h1>
        </div>
    </header>
  )
}

export default Header