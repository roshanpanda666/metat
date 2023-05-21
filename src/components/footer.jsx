import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className='mt-60 flex items-center justify-center lg:space-x-96 lg:flex-row flex-col space-x-0'>
      <div className='text-3xl text-white'>ENTER THE METAVERSE</div>
      <div className='w-44  h-10 lg:mt-0 mt-10 flex items-center justify-center text-white bg-purple-600 rounded-2xl duration-200 hover:shadow-[0px_5px_20px_10px_#b794f4]'> <i class="fa-solid fa-vr-cardboard mr-5"></i>Enter metaverse</div>
    
    
    </div>
    <hr className='mt-20 lg:w-[60rem] w-80 border-gray-600 blur-xs'/>
    <div></div>
    <div className='flex lg:space-x-20 space-5 text-white lg:flex-row flex-col'>
        <div className='lg:text-start text-center'>METAVERSE</div>
        <div className='xs text-gray-600'>copyright@METAVERSE 2022-2023 all right reserved</div>
        <div className='flex lg:justify-end text-white  justify-center'>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-red-500'><i class="fa-brands fa-reddit"></i></div>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-pink-400'><i class="fa-brands fa-instagram"></i></div>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-blue-400'><i class="fa-brands fa-twitter"></i></div>
                    <div  className='mr-4 text-sm lg:mr-10 hover:text-blue-700'><i class="fa-brands fa-discord"></i></div>
                </div>
    </div>
    
    <div className='shadow-[0px_5px_191px_105px_#63b3ed] blur-3xl mt-24'></div>
    </>
  )
}

export default Footer
