import React from 'react'
import { FaBars } from 'react-icons/fa';
import Typical from 'react-typical'

function Hero() {
    return (
        <div >
            <div>
                <div className='hero'>
                    <div className=' flex px-5 justify-between md:px-16 pt-7 items-center  w-full mx-auto mb[10px]'>
                        <div className='logo flex justify-start md:text-center'>
                            <h1 className =' text-white font-bold'>Swift<span className='text-theme'>Nation</span></h1>
                            

                        </div>
                        <div >
                            <div className='hidden md:flex'>
                                <button className='px-7 py-2 mr-2   border-2 border-white  hover:text-black hover:bg-white/90 rounded-full bg-theme text-white duration-200'>Gallery</button>
                                <button className='px-7 py-2 mr-2   border-2 border-white  hover:text-black hover:bg-white/90 rounded-full bg-theme text-white duration-200'>Blog</button>
                                <button className='px-7 py-2 mr-2   border-2 border-white  hover:text-black hover:bg-white/90 rounded-full bg-theme text-white duration-200'>Contact</button>
                                
                                
                            </div>
                        </div>
                        <div className=' text-white md:hidden'><FaBars size={30} /></div>


                    </div>
                    <div className='hero-text flex flex-col justify-center '>
                    
                        <h1 className='flex text-center justify-center ml-5 mr-5 text-[3rem] md:text-[7rem]'>You Like It ?</h1>
                        <h1 className='flex text-center text-theme justify-center ml-5 mr-5 text-[2rem] md:text-[5rem]'>
                        <Typical steps={['You place an order', 2000, 'We deliver', 2000]} loop={Infinity} wrapper="p" />
                        </h1>
                        

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Hero