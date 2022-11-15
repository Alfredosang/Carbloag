import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react'
import { motion } from 'framer-motion'
// import Typical from 'react-typical'

function Hero() {
    const [nav, setNav] = useState(false);
    return (
        <div >
            <div>
                <div className='hero '>
                    <div className=' flex px-5 justify-between md:px-16 pt-7 items-center  w-full mx-auto mb[10px]'>
                        <div className='logo flex justify-start md:text-center '>
                            <h1 className=' text-white font-bold'>Swift<span className='text-theme'>Nation</span></h1>


                        </div>
                        <div >
                            <div className='hidden md:flex'>
                                <button className='px-7 py-2 mr-2   border-2 border-white  hover:text-black hover:bg-white/90 rounded-full bg-theme text-white duration-200'>Gallery</button>
                                <button className='px-7 py-2 mr-2   border-2 border-white  hover:text-black hover:bg-white/90 rounded-full bg-theme text-white duration-200'>Blog</button>
                                <button className='px-7 py-2 mr-2   border-2 border-white  hover:text-black hover:bg-white/90 rounded-full bg-theme text-white duration-200'>Contact</button>


                            </div>
                        </div>
                        <div className=' text-white md:hidden z-50' onClick={() => setNav(!nav)}>{!nav ? <FaBars size={30} /> : <FaTimes size={30} />}</div>

                        <div className={`text-theme text-2xl bg-black w-full  h-screen  left-0 ${nav ? 'top-0' : '-top-full'}  flex flex-col items-center  justify-center absolute duration-500 space-y-7 p-24`}>
                            <div><h1 className='text-theme text-4xl hover:scale-105'>Gallery</h1></div>
                            <div><h1 className='text-theme text-4xl hover:scale-105'>Blog</h1></div>
                            <div><h1 className='text-theme text-4xl hover:scale-105'>Contact</h1></div>

                        </div>






                    </div>
                    <div className='hero-text flex flex-col items-center justify-center '>

                        <motion.h1
                            initial={{ x: '100vh', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', delay: 0.5, duration:2 }}
                            className='flex text-center justify-center ml-5 mr-5 text-[3rem] md:text-[7rem]'>You Like It ?</motion.h1>
                        <motion.h1
                            initial={{ x: '-100vh', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', delay: 1.5 }}
                            className='flex text-center text-theme justify-center ml-5 mr-5 text-[2rem] md:text-[5rem]'>
                            You order, we deliver...
                            {/* <Typical steps={['You place an order', 2000, 'We deliver', 2000]} loop={Infinity} wrapper="p" /> */}
                        </motion.h1>


                    </div>

                </div>


            </div>
        </div>
    )
}

export default Hero