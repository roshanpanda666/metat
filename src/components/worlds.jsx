import React from 'react'
import {motion}from 'framer-motion'
const Worlds = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-16 flex-col'>
        <div className='text-gray-200 text-xs'>CHOSE THE WORLD</div>
        <div className='text-white text-lg lg:text-4xl'> CHOSE THE WORLD YOU WANT TO EXPLORE</div>
        <div className='flex flex-col mt-10'>

            <motion.div className='h-[160px] w-[350px] mb-10'
            initial={{
                x:30
            }}
            transition={{
                type:'spring',
                stiffness:100
            }}
            whileInView={{
                x:0
            }}
            whileHover={{
                scale:1.1,
            }}
            >
                <img className='h-[160px] w-[350px]' src="planet-01.png" alt=""/>
                <div className='text-white absolute -mt-10 text-3xl'>THE HAGWORTS</div>
            </motion.div>

            <motion.div className='h-[160px] w-[350px] mb-10'
             initial={{
                x:-30
            }}
            transition={{
                type:'spring',
                stiffness:100
            }}
            whileInView={{
                x:0
            }}
            whileHover={{
                scale:1.1,
            }}
            >
                <img className='h-[160px] w-[350px]' src="planet-02.png" alt=""/>
                <div className='text-white absolute -mt-10 text-3xl'>THE UPSIDE DOWN</div>
            </motion.div>

            <motion.div className='h-[160px] w-[350px] mb-10'
             initial={{
                x:30
            }}
            transition={{
                type:'spring',
                stiffness:100
            }}
            whileInView={{
                x:0
            }}
            whileHover={{
                scale:1.1,
            }}
            >
                <img className='h-[160px] w-[350px]' src="planet-03.png" alt=""/>
                <div className='text-white absolute -mt-10 text-3xl'>KADIROJO PARAMAI</div>
            </motion.div>

            <motion.div className='h-[160px] w-[350px] mb-10'
             initial={{
                x:-30
            }}
            transition={{
                type:'spring',
                stiffness:100
            }}
            whileInView={{
                x:0
            }}
            whileHover={{
                scale:1.1,
            }}
            >
                <img className='h-[160px] w-[350px]' src="planet-04.png" alt=""/>
                <div className='text-white absolute -mt-10 text-3xl'>PARADISE ISLAND</div>
            </motion.div>

            <motion.div className='h-[160px] w-[350px] mb-10'
             initial={{
                x:30
            }}
            transition={{
                type:'spring',
                stiffness:100
            }}
            whileInView={{
                x:0
            }}
            whileHover={{
                scale:1.1,
            }}
            >
                <img className='h-[160px] w-[350px]' src="planet-05.png" alt=""/>
                <div className='text-white absolute -mt-10 text-3xl'>HAWKINS LABS</div>
            </motion.div>

            
            
            
        </div>
        <div className='shadow-[0px_20px_176px_81px_#63b3ed] mr-[0rem]'></div>
        
      </div>
    </div>
  )
}

export default Worlds
