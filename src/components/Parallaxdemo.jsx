import React from 'react'
import { Parallax } from 'react-parallax'
// import heropic from '../assets/heropic.jpg'




const Parallaxdemo = () => {
  return (
    <div>
      <Parallax blur={0} bgImage='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' bgImageAlt="parallax section" strength={300} className='h-[500px]'>

        <div className='container mx-auto '>
          <div className='m-16'>
          <h1 className='text-2 md:text-4xl text-center font-bold text-white mt-10'>Sportty Time</h1>
          <p className='flex justify-center  md:text-xl items-center text-white mt-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Qui adipisci, commodi fuga delectus ex rem nulla,
            cupiditate corrupti eligendi, laudantium iste. Omnis
            soluta consequatur sequi sint, quia enim obcaecati quibusdam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Qui adipisci, commodi fuga delectus ex rem nulla,
            cupiditate corrupti eligendi, laudantium iste. Omnis
            soluta consequatur sequi sint, quia enim obcaecati quibusdam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Qui adipisci, commodi fuga delectus ex rem nulla,
            cupiditate corrupti eligendi, laudantium iste. Omnis
            soluta consequatur sequi sint, quia enim obcaecati quibusdam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Qui adipisci, commodi fuga delectus ex rem nulla,
            cupiditate corrupti eligendi, laudantium iste. Omnis
            soluta consequatur sequi sint, quia enim obcaecati quibusdam.
          </p>

          </div>
          
        </div>


      </Parallax>
    </div>
  )
}

export default Parallaxdemo