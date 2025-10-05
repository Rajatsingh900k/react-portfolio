import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [showMenu, setShowMenu]=useState(false)

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg' >
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <a href="https://www.linkedin.com/in/rajat-singh-417b4a224"
             className='text-3xl font-bold text-white'
          >
            Rajat
            <span className='text-purple'> Singh</span>
            <div className='w-4 h-4 bg-purple rounded-full'></div>
          </a>
        </div>
        <div className='hidden md:flex space-x-10'>
          <Link to='/' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Home</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </Link>

          <Link to='/about' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>About</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </Link>
          
          <Link to='/skills' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Skills</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </Link>
          
          <Link to='/projects' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Projects</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </Link>
          
          <Link to='/experience' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Experience</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </Link>
          
          <Link to='/contact' className='relative text-white/80 transition duration-300 hover:text-purple group'>
            <span>Contact</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </div>
        {/* Mobile Button */}
        <div className='md:hidden'>
          {
            showMenu?<FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>:
            <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
          }
        </div>
      </div>
      {/* Mobile Menu */}
      {
        showMenu && (
          <div className='md:hidden mt-4 bg-dark-300 h-screen text-white/80 rounded-lg p-4 flex flex-col space-y-4'>
            <Link to='/' onClick={()=>setShowMenu(!showMenu)} className='relative text-white/80 transition duration-300 hover:text-purple group'>
              <span>Home</span>
            </Link>

            <Link to='/about' onClick={()=>setShowMenu(!showMenu)} className='relative text-white/80 transition duration-300'>
              <span>About</span>
            </Link>
            
            <Link to='/skills' onClick={()=>setShowMenu(!showMenu)} className='relative text-white/80 transition duration-300'>
              <span>Skills</span>
            </Link>
            
            <Link to='/projects' onClick={()=>setShowMenu(!showMenu)} className='relative text-white/80 transition duration-300'>
              <span>Projects</span>
            </Link>
            
            <Link to='/experience' onClick={()=>setShowMenu(!showMenu)} className='relative text-white/80 transition duration-300'>
              <span>Experience</span>
            </Link>
            
            <Link to='/contact' onClick={()=>setShowMenu(!showMenu)} className='relative text-white/80 transition duration-300'>
              <span>Contact</span>
            </Link>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar