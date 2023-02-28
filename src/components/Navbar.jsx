import React from 'react'

const Navbar = () => (
  <nav className='flex justify-between items-center p-[3rem]'>
    <div>
        <h1 className='text-[25px] text-blueColor'>
        <strong>Job</strong> Search
        </h1>
    </div>

    <ul className='flex gap-8 '>
        <li className=' text-[#6f6f6f] hover:text-blueColor '>Jobs</li>
        <li className=' text-[#6f6f6f] hover:text-blueColor '>Companies</li>
        <li className=' text-[#6f6f6f] hover:text-blueColor '>About</li>
        <li className=' text-[#6f6f6f] hover:text-blueColor '>Contact</li>
        <li className=' text-[#6f6f6f] hover:text-blueColor '>Blog</li>
        <li className=' text-[#6f6f6f] hover:text-blueColor '>Login</li>
        <li className=' text-[#6f6f6f] hover:text-blueColor '>Register</li>
    </ul>
  </nav>
);

export default Navbar