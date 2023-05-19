import React from 'react'

const Home = () => {
  return (
    <>
        <div className='flex items-center justify-center border-2 border-none h-60 lg:h-96 w-10/12'

        >
            
            <div className='flex flex-col absolute z-50'>
            <div className='text-gray-600 lg:text-sm '>HOME</div>
            
                <div className='text-white text-5xl lg:text-9xl'>METAVERSE</div>
                <div className='flex'>
                    <div className='text-white text-5xl lg:text-9xl'>
                        MA
                    </div>
                    <div className='flex items-center justify-center'>   
                        <span className='h-10 w-16 border-4 lg:h-24 lg:w-40 border-purple-400 lg:border-8 rounded-r-full'></span>
                        
                    </div>
                    <div className='h-10 w-20 lg:h-24 lg:w-36 text-5xl lg:text-9xl text-white'>NESS</div>
                    
                </div>
                <div className='flex justify-end text-white'>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-red-500'><i class="fa-brands fa-reddit"></i></div>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-pink-400'><i class="fa-brands fa-instagram"></i></div>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-blue-400'><i class="fa-brands fa-twitter"></i></div>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-blue-700'><i class="fa-brands fa-discord"></i></div>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default Home
