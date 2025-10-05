import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MyPic from '../assets/MyPic.png';
const Home = () => {
  return (
    <motion.div
    initial={{
        opacity:0,
        y:50,
    }}
    whileInView={{
      opacity:1,
      y:0  
    }}
    transition={{
        duration:0.6,
        ease:'easeOut'
    }}
    viewport={{
        once:true
    }}
    id='home'
    className='min-h-screen flex items-center pt-50 pb-60 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/* left side content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-purple'>Rajat Singh</span>
          </h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
            Full Stack Developer
          </h2>
          <p>I create stunning web experience with mordern technologies and innovative design.</p>
          <div className='flex space-x-4 mt-5'>
            <Link className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'
            to="/projects">
              View Work
            </Link>
            <Link className='px-6 py-3 border rounded-lg font-medium hover:bg-purple/20 transition duration-300' 
            to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
        {/* right side content */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relavite w-64 h-64 md:w-80 md:h-80'>
            <div className=' inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70'>
              <motion.img 
                animate={{
                  y:[0,-20,0]
                }}
                transition={{
                  duration:4,
                  repeat:Infinity,
                  repeatType:"loop",
                  ease:'easeInOut'
                }}
                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
              src={MyPic} alt="Rajat Singh" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home