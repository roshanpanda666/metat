import React from 'react'
import {motion} from 'framer-motion'
const Whatsnew = () => {
  return (
    <div>
          <div className=' flex-col mt-32 flex lg:space-x-24 space-x-0 lg:flex-row'>
      
      <div className='flex flex-col items-center justify-center'>
        <div className='text-gray-500 text-xs lg:text-start text-center shadow-[18px_16px_306px_128px_#6b46c1] bg-purple-950'></div>
        <div className='text-white lg:text-4xl text-2xl text-center lg:text-start'>WHATS NEW ABOUT METAVERSE</div>

        <div className='flex items-center justify-center lg:space-x-20 mt-10 ml-0 lg:ml-10 lg:justify-center lg:text-start text-center'>
            <div className='flex flex-col  text-white lg:justify-start justify-center lg:text-start text-center'>

                <div className='lg:text-start text-center lg:ml-0 ml-20'>
                    <motion.div className='bg-gray-500 flex items-center justify-center rounded-md h-10 w-10 text-white'
                     initial={{
                        opacity:0,
                        x: -20,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                    }}
                    whileInView={{
                        rotateZ:-360,
                        opacity: 1,
                        x:0
                    }}
                    >
                    <i class="fa-solid fa-bolt-lightning text-center"></i>
                    </motion.div>
                </div>
            <div className='bg-transparen mt-10'>
                        faster then before
            </div>

            <div className='text-xs text-gray-500'>
                we have the latest update<br></br> the worlds are now faster then before
            </div>

            </div>
           

            <div className='flex flex-col  text-white text-center'>
                <div className='text-start'>
                <motion.div className='bg-gray-500 flex items-center justify-center rounded-md h-10 w-10 text-white lg:ml-0 ml-20'
                 initial={{
                    opacity:0,
                    x: 20,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 50,
                }}
                whileInView={{
                    rotateZ:-360,
                    opacity: 1,
                    x:0
                }}
                >
                <i class="fa-solid fa-vr-cardboard"></i>
                </motion.div>
                
                </div>
                <div className='bg-transparent mt-10 lg:text-start text-center'>
                    more realistic
            </div>
            <div className='text-xs text-gray-500 lg:text-start text-center'>
                explore the mta verse like never befor<br></br> the worlds are now more realistic
            </div>
            </div>
            
        </div>

      </div>
      <div className='flex justify-center items-center'>
        <motion.div
        initial={{
            opacity:0,
            x: 10,
        }}
        transition={{
            type: 'spring',
            stiffness: 50,
        }}
        whileInView={{
            rotateZ:-360,
            opacity: 1,
            x:0
        }}
        >
            <img src="whats-new.png" alt="" className='lg:h-96'/></motion.div>
      </div>
    </div>
    </div>
  )
}

export default Whatsnew
