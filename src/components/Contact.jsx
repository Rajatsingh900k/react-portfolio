import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
const Contact = () => {
  return (
    <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1 ,ease:'easeOut'}}
        viewport={{once:false, amount:0.2}}
        id='contact'
        className='py-20 bg-dark-200'
    >
        <div className="container mx-auto px-6">
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In
                <span className='text-purple'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* contact form */}
                <div>
                    <form className='spaace-y-6'>
                        <div>
                            <label htmlFor="name"
                            className='block text-gray-300 mb-2'
                            >
                                Your Name
                            </label>
                            <input type="text"
                            className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                            />
                        </div>
                        <div>
                            <label htmlFor="email"
                            className='block text-gray-300 mb-2'
                            >
                                Email Address
                            </label>
                            <input type="email"
                            className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                            />
                        </div>
                        <div>
                            <label htmlFor="message"
                            className='block text-gray-300 mb-2'
                            >
                                Your message
                            </label>
                            <textarea type="text"
                            className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                            />
                        </div>
                        <button
                        className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700
                        transition duration-300 cursor-pointer' 
                        type='Submit'>Send</button>
                    </form>
                </div>
                {/* contact information */}
                <div className="space-y-8">
                    <div className="flex items-start">
                        <div
                        className='text-purple text-2xl mr-4'
                        >
                            <FaMapMarkerAlt/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-200'>
                                Uttar Pradesh, India.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div
                        className='text-purple text-2xl mr-4'
                        >
                            <FaEnvelope/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                            <p className='text-gray-200'>
                               Rajatsingh900k@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div
                        className='text-purple text-2xl mr-4'
                        >
                            <FaPhone/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Mobile No.</h3>
                            <p className='text-gray-200'>
                                +91 6397858359
                            </p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className="flex space-x-4">
                            <a
                            className='w-12 h-12 rounded-full flex items-center bg-dark-300 justify-center text-purple
                            hover:text-white transition duration-300' 
                            href="https://github.com/rajatsingh900k"><FaGithub/></a>
                            <a
                            className='w-12 h-12 rounded-full flex items-center bg-dark-300 justify-center text-purple
                            hover:text-white transition duration-300' 
                            href="https://www.linkedin.com/in/rajat-singh-417b4a224"><FaLinkedin/></a>
                            <a
                            className='w-12 h-12 rounded-full flex items-center bg-dark-300 justify-center text-purple
                            hover:text-white transition duration-300' 
                            href="https://x.com/RajatSingh900k"><FaX/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact