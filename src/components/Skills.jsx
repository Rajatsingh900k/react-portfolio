import { motion } from 'framer-motion'
import React from 'react'

const Skills = () => {
  return (
    <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1 ,ease:'easeOut'}}
        viewport={{once:false, amount:0.2}}
        id='skills'
        className='py-20 bg-dark-100'
    >
        <div className="container mx-auto px-6">
            <h2 className='text-3xl  font-bold text-center mb-4'>
                My <span className='text-purple'>Skills</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                Technologies I worked to bring ideas to life
            </p>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-5xl ax-auto"></div>
        </div>
    </motion.div>    
  )
}

export default Skills