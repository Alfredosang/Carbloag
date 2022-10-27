import React from 'react';
// import teampic from '../assets/upwork.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Team = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const teamInfo = [
        {
            id: 1,
            pix: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-mclaren-720s-spider-mmp-1-1638979917.jpg?crop=0.777xw:0.635xh;0.102xw,0.223xh&resize=980:*',
            name: 'McLaren 720S',
            position: 'Lead Software Developer'
        },
        {
            id: 2,
            pix: 'https://images.unsplash.com/photo-1591293836027-e05b48473b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'Sport car',
            position: 'Automobil Analyst'
        },
        {
            id: 3,
            pix: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'Sport car',
            position: 'Mechanical Engineer'
        },
        {
            id: 4,
            pix: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name: 'Sport car',
            position: 'Mechanical Engineer'
        },
        {
            id: 5,
            pix: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

            name: 'Sport car',
            position: 'Software Developer'
        },
    ]

    return (
        <div className='container mx-auto'>
            <h1 className='text-white text-4xl font-bold flex justify-center my-7'>Limited Editions</h1>
            <Slider {...settings}>
                {
                    teamInfo.map((mem) => {
                        return (
                            <div key={mem.id} className=' justify-center my-10 mx-auto'>

                                <div className='flex flex-col items-center mx-auto'>
                                    <div className='md:w-[800px] md:h-[500px] bg-black flex justify-center items-center '>
                                        <img src={mem.pix} alt='team member' className='object-fill object-center w-[450px] h-[250px] md:w-[800px] md:h-[500px]  border-black border-16' />
                                    </div>
                                    <div className='mt-5 flex flex-col  items-center'>
                                        <h1 className='text-xl font-bold text-white '>{mem.name}</h1>
                                        {/* <p className='text-theme'>{mem.position}</p> */}
                                    </div>

                                </div>
                            </div>
                        )

                    })
                }
            </Slider>

        </div>

    )
}


export default Team