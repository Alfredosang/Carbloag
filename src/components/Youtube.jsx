import React from 'react'
import pictwo from '../assets/pictwo.jpg'
import ReactPlayer from 'react-player'

const Youtube = () => {
    return (
        <div className='bg-black flex flex-col items-center mx-auto '>
            <div className='mt-16 h-[1300px] md:h-[500px] flex flex-col md:flex-row justify-center space-x-5 items-center'>
                <div>
                    <img src={pictwo} alt="car" className='h-[500px] w-[700px] object-cover object-center shadow-lg shadow-black' />
                </div>
                <div className=' w-[300px] md:p-10 md:w-[700px] mt-5 flex flex-col items-start'>
                    <div>
                        <h2 className='text-white text-4xl font-bold'>Sport Cars</h2>

                    </div>
                    <div>


                        <p className='sm:p-10 text-white text-xl ' >
                            There are other factors in the decline of sports cars from their 1960s and 1970s heyday too:
                            growing income inequality, more crowded roads and changing tastes. Always aimed at younger
                            buyers, many debt-laden Gen-Zers can’t afford to own an impractical sports car “just for fun,”
                            and a large number of them would rather go off-roading. But there’s still a place for traditional
                            sporting machines, and manufacturers know that these cars have a cultural impact beyond their sales numbers.
                            For our list of the Best Sports Cars of 2022, we prioritized the cars that had the bestvalue-per-dollar ratio in terms
                            of fun, style and features.We had a few requirements: these cars could only have two doors, and they had to be rear- or all-wheel drive.
                        </p>
                    </div>
                </div>

            </div>

            <div className='flex flex-wrap gap-3 justify-center items-center w-full md:h-[500px] h-[700px] mb-5 md:mb-0 mx-auto'>
                <div className=' shadow-lg shadow-black  '>
                    <ReactPlayer url='https://www.youtube.com/watch?v=aQmCd2QUHsg' height='250px' width='500px' />
                </div>
                <div className=' shadow-lg shadow-black'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=xxMxhpdUA04' height='250px' width='500px' />
                </div>
                <div className=' shadow-lg shadow-black'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=R_mwYj49myc' height='250px' width='500px' />
                </div>
            </div>




        </div>
    )
}

export default Youtube