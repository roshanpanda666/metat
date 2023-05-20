import React from 'react'
import{motion} from 'framer-motion'
const Metaworking = () => {
  return (
    <div className=' flex-col mt-32 flex lg:space-x-24 lg:flex-row'>
      <div className='flex justify-center items-center'>
        <motion.div
        initial={{
            opacity:0,
            x: -40,
        }}
        transition={{
            type: 'spring',
            stiffness: 50,
        }}
        whileInView={{
            rotateZ:360,
            opacity: 1,
            x:0
        }}
        >
            <img src="get-started.png" alt="" className='lg:h-96 h-72'/></motion.div>
      </div>
      <div className='flex flex-col'>
        <div className='text-gray-500 text-xs lg:text-start text-center'>HOW METAMERSE WORKS</div>
        <div className='text-white lg:text-4xl text-2xl text-center lg:text-start'>GET STARTED WITH JUST A FEW CLICKS</div>

        <motion.div className='flex flex-row mt-10 space-x-10 lg:text-start'
        initial={{
            opacity:0,
            
        }}
        transition={{
            type: 'spring',
            stiffness: 50,
        }}
        whileInView={{
            opacity: 1,
            
        }}
        >
            <div className='h-20 w-20 bg-gray-500 flex items-center justify-center text-white rounded-xl lg:ml-0 ml-5'>01</div>
            <div className='text-gray-400 flex items-center justify-center'>find a world that suits you <br></br> and you like to enter</div>
        </motion.div>

        <motion.div className='flex flex-row mt-10 space-x-10'
        initial={{
            opacity:0,
            
        }}
        transition={{
            type: 'spring',
            stiffness: 50,
        }}
        whileInView={{
            opacity: 1,

        }}
        >
            <div className='h-20 w-20 bg-gray-500 flex items-center justify-center text-white rounded-xl lg:ml-0 ml-5'>02</div>
            <div className='text-gray-400 flex items-center justify-center'>enter the world<br></br> </div>
        </motion.div>

        <motion.div className='flex flex-row mt-10 space-x-10 lg:text-start'
        initial={{
            opacity:0,
            
        }}
        transition={{
            type: 'spring',
            stiffness: 50,
        }}
        whileInView={{
            opacity: 1,

        }}
        >
            <div className='h-20 w-20 bg-gray-500 flex items-center justify-center text-white rounded-xl lg:ml-0 ml-5 lg:text-start'>03</div>
            <div className='text-gray-400 flex items-center justify-center'>no need to beat around the<br></br> bash just stay in the field and enjoy </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Metaworking
