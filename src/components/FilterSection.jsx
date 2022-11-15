import { useAnimation, motion } from 'framer-motion';
import React from 'react'
// import carpic from '../assets/heropic.jpg'
import { useState, useEffect } from 'react'
// import carpics from '../assets/pictwo.jpg'
import { useInView } from 'react-intersection-observer';


const FilterSection = () => {
    const { ref, inView} = useInView({
        threshold:0.2
    });

    const animation = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x: 0, opacity:1,
                transition: {
                 type: 'spring', duration: 2,
                }
            })
        }
        if(!inView){
            animation.start({
                x: '100vw', opacity: 0,
                transition: {
                    type: 'spring', duration: 0.5,
                   }
            })
        }

    })
    
    const car = [
        {
            id: 1,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/37721/range-rover-evoque-exterior-right-side-view.jpeg?q=75&wm=1',
            cat: 'suv'
        },
        {
            id: 2,
            pix: 'https://images.unsplash.com/photo-1601252300554-4ad551483bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
            cat: 'truck'
        },
        {
            id: 3,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44784/gla-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75&wm=1',
            cat: 'suv'
        },
        {
            id: 4,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/116201/c-class-exterior-left-front-three-quarter.jpeg?isig=0&q=75&wm=1',
            cat: 'saloon'
        },
        {
            id: 5,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/45242/bmw-x1-facelift-left-side-view0.jpeg?wm=1&q=75',
            cat: 'suv'
        },
        {
            id: 6,
            pix: 'https://images.unsplash.com/photo-1610647929723-a8922852cd44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            cat: 'truck'
        },
        {
            id: 7,
            pix: 'https://imgd.aeplcdn.com/1056x594/cw/ec/36258/Ferrari-Portofino-Exterior-137254.jpg?wm=1&q=75',
            cat: 'saloon'
        },
        {
            id: 8,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/37067/3-series-exterior-right-front-three-quarter-2.jpeg?q=75&wm=1',
            cat: 'saloon'
        },
        {
            id: 9,
            pix: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1451&q=80',
            cat: 'truck'
        },
        {
            id: 10,
            pix: 'https://imgd.aeplcdn.com/1056x594/ec/cc/6E/19429/img/ol/Maserati-Quattroporte-Front-view-54314.jpg?v=201711021421&q=75&wm=1',
            cat: 'saloon'
        },
        {
            id: 11,
            pix: 'https://imgd.aeplcdn.com/1056x594/cw/ec/32406/Lamborghini-Urus-Exterior-115483.jpg?wm=1&q=75',
            cat: 'suv'
        },
        {
            id: 12,
            pix: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            cat: 'truck'
        },
        {
            id: 13,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/55335/exterior-right-front-three-quarter.jpeg?q=75&wm=1',
            cat: 'suv'
        },
        {
            id: 14,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/39045/e-tron-sportback-exterior-left-rear-three-quarter.jpeg?q=75&wm=1',
            cat: 'saloon'
        },
        {
            id: 15,
            pix: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/95489/maybach-gls-exterior-left-front-three-quarter.jpeg?isig=0&q=75&wm=1',
            cat: 'suv'
        },
    ]
    const [cars, setCars] = useState(car);

    const carChange = (choice) => {
        const sorted = car.filter(item => item.cat === choice );
        
        setCars(sorted)
        // console.log(cars)

    }


    return (
        <div>
            <div ref={ref} className="container mx-auto">
                <div className='flex flex-col justify-center items-center p-5 space-y-5'>
                    <div className='flex  items-center justify-center space-x-1 md:space-x-5'>
                    <button type='button' onClick={() => setCars(car)}  className='bg-theme w-20 md:w-24 h-10 hover:scale-105 duration-200 shadow-sm shadow-black hover:bg-black text-white   px-3 rounded-full'>All</button>    
                    <button type='button' onClick={() => carChange('truck')} className='bg-theme w-20 md:w-24 h-10 hover:scale-105 duration-200 shadow-sm shadow-black hover:bg-black text-white   px-3 rounded-full'>Truck</button>
                    <button type='button' onClick={() => carChange('suv')} className='bg-theme w-20 md:w-24 h-10 hover:scale-105 duration-200 shadow-sm shadow-black hover:bg-black text-white   px-3 rounded-full'>Suv</button>
                    <button type='button' onClick={() => carChange('saloon')} className='bg-theme w-20 md:w-24 h-10 hover:scale-105 duration-200 shadow-sm shadow-black hover:bg-black text-white   px-3 rounded-full'>Saloon</button>
                    
                    </div>

                    <div>
                        <motion.div 
                        animate={animation}
                         className='flex flex-wrap justify-center gap-2'>
                            {
                                cars.map(({ id, pix }) => (
                                    <div key={id}>
                                        <img src={pix} alt='car pix' className='w-[400px] h-[200px] object-cover object-center' />

                                    </div>
                                ))
                            }
                        </motion.div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterSection