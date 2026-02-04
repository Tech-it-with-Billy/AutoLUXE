import React from 'react'
import '../../index.css'

function NavBar() {
  return (
    <div className='flex justify-between items-center bg-black h-25 px-5 lg:px-15 py-2 text-white'>
      <img className='w-40 h-20 md:w-80 object-cover' src="/images/logo.png" alt="logo" />
      <div className='flex gap-10'>
        <p>Welcome username</p>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar