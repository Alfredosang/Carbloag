import React from 'react'
// import car from '../assets/heropic.jpg'
// import ccar from 'https://unsplash.com/photos/YApiWyp0lqo'

const Blogpost = () => {
    const post =[
        {
            id:1,
            topic:'Why people love Benz',
            pix : 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            id:2,
            topic:'The fate farrari in Africa',
            pix : 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
            id:3,
            topic:'G wagon, the best choice for that road trip. ',
            pix :'https://images.unsplash.com/photo-1590079287659-96668805ef23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGclMjB3YWdvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:4,
            topic:'G wagon, the best choice for that road trip. ',
            pix :'https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbWJvcmdoaW5pJTIwdXJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:5,
            topic:'G wagon, the best choice for that road trip. ',
            pix :'https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d3JhbmdsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id:6,
            topic:'G wagon, the best choice for that road trip. ',
            pix :'https://images.unsplash.com/photo-1597775689895-de89b9666f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhZ2FuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
    ] 
  return (
    <div className='container flex justify-center mx-auto'>
        <div className='flex flex-col justify-center mx-auto md:flex-row md:flex-wrap md:gap-4 animate-slideup'>
            {
                post.map((post) =>{
                    return(
                        <div key={post.id} className='blog-card m-[20px] hover:scale-105 duration-200'>
                            <div>
                                <img src={post.pix} alt='blog pic' className='blog-pic'/>
                            </div>
                            <div className='blog-text'>
                                <h2 className='text-xl font-bold'>{post.topic}</h2>
                                <p className='text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing 
                                    elit. Quis velit, itaque similique asperiores quas
                                     molestias perspiciatis nemo reprehenderit nihil debitis?<span className='text-theme hover:text-white'> Read more</span></p>
                            </div>

                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Blogpost