import React from 'react'
import { Parallax } from 'react-parallax'
// import heropic from '../assets/heropic.jpg'




const Parallaxdemo = () => {
  return (
    <div>
      <Parallax blur={0} bgImage='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' bgImageAlt="parallax section" strength={300} className='h-[500px]'>

        <div className='container mx-auto '>
          <div className='m-16'>
          <h1 className='text-2 md:text-4xl text-center font-bold text-white mt-10'>Automotive Performance</h1>
          <p className='flex justify-center  md:text-xl items-center text-white mt-5'>
          In lots of ways, 2022 is a golden age of automotive performance. In the 1990s, 290 horsepower 
          was muscle car territory, now you can get that in a Hyundai Sonata. A Tesla Model S
           Plaid can rocket to 60 mph in speeds only Formula One and NHRA drag racers enjoyed a
            generation ago. In this environment, however, conventional sports cars have become a 
            rarified breed, and even harder to find at affordable prices. In 2021, dedicated 
            enthusiast cars made up just 1.45% of the new-car market, according to data from Motor Intelligence.
          </p>

          </div>
          
        </div>


      </Parallax>
    </div>
  )
}

export default Parallaxdemo