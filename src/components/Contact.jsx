import React from 'react'

const Contact = () => {
    return (
        <div className='bg-black p-10'>
            <div className='container mx-auto'>
            <div><h1 className=' text-white font-bold text-3xl m-5 flex justify-center'>Contact us</h1></div>

            <div className='flex justify-center mb-10'>
                
                <div>
                    <form className='flex flex-col items-center space-y-5'>
                        <input type='text' placeholder='Name' className='w-[20rem] md:w-[50rem] p-3 rounded-xl outline-none bg-black text-white border-b-2 border-theme' />
                        <input type='email' placeholder='Email' className=' w-[20rem] md:w-[50rem] p-3 rounded-xl outline-none bg-black text-white border-b-2 border-theme' />
                        <textarea type='text' placeholder='Enter your message' className='w-[20rem] md:w-[50rem] h-[100px] p-3 rounded-xl outline-none bg-black text-white border-b-2 border-theme' />
                        <button className='py-3 px-3 bg-theme text-xl text-white w-[20rem] md:w-[50rem] rounded-xl'>Send</button>

                    </form>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Contact