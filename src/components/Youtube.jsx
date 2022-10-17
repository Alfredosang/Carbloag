import React from 'react'
import pictwo from '../assets/pictwo.jpg'
import ReactPlayer from 'react-player'

const Youtube = () => {
    return (
        <div className='bg-black flex flex-col items-center mx-auto '>
            <div className='mt-16 h-[1000px] md:h-[500px] flex flex-col md:flex-row justify-center space-x-5 items-center'>
                <div>
                    <img src={pictwo} alt="car" className='h-[500px] w-[700px] object-cover object-center shadow-lg shadow-black' />
                </div>
                <div className='p-26 w-[300px] md:p-10 md:w-[700px] mt-5'>
                    <h2 className='text-white text-4xl font-bold mb-5'>Sport Cars</h2>
                    <p className='sm:p-10 text-white text-xl ' >Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Nihil quasi error quam earum adipisci soluta ratione
                        illum similique aut incidunt deleniti rerum placeat,
                        dolore exercitationem enim doloribus aliquid sequi,
                        neque, ipsa aperiam dicta optio quisquam quibusdam
                        veritatis! Optio, suscipit temporibus! Laborum
                        suscipit excepturi a, eveniet ut voluptates
                        asperiores fugiat beatae.</p>
                </div>

            </div>

            <div className='flex flex-wrap gap-3 justify-center items-center w-full md:h-[500px] h-[700px] mb-5 md:mb-0 mx-auto'>
                <div className=' shadow-lg shadow-black  '>
                    <ReactPlayer url='https://www.youtube.com/watch?v=aQmCd2QUHsg'height='250px' width='500px'/>
                </div>
                <div className=' shadow-lg shadow-black'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=xxMxhpdUA04'height='250px' width='500px'/>
                </div>
                <div className=' shadow-lg shadow-black'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=R_mwYj49myc'height='250px' width='500px'/>
                </div>
            </div>




        </div>
    )
}

export default Youtube