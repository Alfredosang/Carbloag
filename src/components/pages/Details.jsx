import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({ post}) => {
    const { id } = useParams();
    return (
        <div className='container  mx-auto'>
        
            <div className='flex justify-center w-[350px] md:w-[700px] lg:w-[900px] h-[700px] mx-auto mt-24'>
                {
                    post.filter(post => post.id === parseInt(id)).map((post) =>

                    (
                        
                            <div key={post.id} className='flex flex-col items-center space-y-5 '>
                                <div>
                                    <img src={post.pix} className='w-[350px] md:w-[700px] lg:w-[900px]  object-cover object-center' alt='blog car' />
                                </div>
                                <div className='flex flex-col space-y-3'>
                                    <h1 className='text-white text-2xl font-bold'>{post.topic}</h1>
                                    <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sed iusto
                                        minima cupiditate odio tenetur alias deserunt ipsum laudantium adipisci ullam
                                        suscipit molestias, obcaecati fuga est. Molestiae aliquam molestias repudiandae ducimus fugiat
                                        corporis? Blanditiis alias consequuntur qui numquam deleniti iusto, praesentium sit,
                                        maxime harum deserunt nostrum sequi officia possimus quasi.</p>
                                </div>

                            </div>
                        
                    )


                    )
                }

            </div>


        </div>
    )
}

export default Details