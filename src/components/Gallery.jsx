import React from 'react';
// import car from '../assets/heropic.jpg';

const Gallery = () => {
  const gallPix = [
    {
      id: 1,
      pix: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      pix: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      pix: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      pix: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      pix: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      pix: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      pix: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      pix: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 9,
      pix: 'https://images.unsplash.com/photo-1593544340816-93d84a106415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 10,
      pix: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 11,
      pix: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 12,
      pix: 'https://images.unsplash.com/photo-1588258219511-64eb629cb833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 13,
      pix: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 14,
      pix: 'https://images.unsplash.com/photo-1591293836027-e05b48473b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 15,
      pix: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
  ]

  return (
    <div className='service-section h-[200vh] md:h-[100vh]'>
      <div className='container  mx-auto'>
        <div>
        <h2 className='text-2xl md:text-4xl font-bold text-white flex justify-center m-3'>Gallery</h2>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4'>
          <div className='m-0'>
            

          </div>
          {
            gallPix.map((pix) => {
              return (
                <div key={pix.id}>
                  <img src={pix.pix} alt='car pix' className='w-[300px] h-[200px] object-cover hover:scale-105 duration-200 shadow-sm shadow-white/20' />
                </div>
              )
            })
          }
        </div>

      </div>

    </div>
  )
}

export default Gallery