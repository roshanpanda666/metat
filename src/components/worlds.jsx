import React from 'react'
import {motion}from 'framer-motion'
const Worlds = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-16 flex-col'>
        <div className='text-gray-200 text-xs'>CHOSE THE WORLD</div>
        <div className='text-white text-lg lg:text-4xl'> CHOSE THE WORLD YOU WANT TO EXPLORE</div>
        <div className='flex flex-col mt-10'>

            <motion.div className='h-[70px] w-[350px] mb-10'
            initial={{
                height:'70px',
                width:'350px'
            }}
            whileHover={{
                height:'160px',
            }}
            >
                <motion.img className='h-[70px] w-[350px]' src="planet-01.png" alt="" 
                initial={{
                    y:80,
                    height:'70px',
                    width:'350px'
                }}
                whileInView={{
                    y:0
                }}
                whileHover={{
                    height:'160px',
                }}
                />
            </motion.div>

            <motion.div className='h-[70px] w-[350px] mb-10'
            initial={{
                
                height:'70px',
                width:'350px'
            }}
            whileHover={{
                height:'160px',
            }}
            >
                <motion.img className='h-[70px] w-[350px]' src="planet-02.png" alt="" 
                initial={{
                    y:80,
                    height:'70px',
                    width:'350px'
                }}
                transition={{
                    delay:0.2
                }}
                whileInView={{
                    y:0
                }}
                whileHover={{
                    height:'160px',
                }}
                />
            </motion.div>

            <motion.div className='h-[70px] w-[350px]  mb-10'
            initial={{
                height:'70px',
                width:'350px'
            }}
            whileHover={{
                height:'160px',
            }}
            >
                <motion.img className='h-[70px] w-[350px]' src="planet-03.png" alt="" 
                 initial={{
                    y:80,
                    height:'70px',
                    width:'350px'
                }}
                transition={{
                    delay:0.4
                }}
                whileInView={{
                    y:0
                }}
                whileHover={{
                    height:'160px',
                }}
                />
            </motion.div>

            <motion.div className='h-[70px] w-[350px] mb-10'
            initial={{
                height:'70px',
                width:'350px'
            }}
            whileHover={{
                height:'160px',
            }}
            >
                <motion.img className='h-[70px] w-[350px]' src="planet-04.png" alt="" 
                 initial={{
                    y:80,
                    height:'70px',
                    width:'350px'
                }}
                transition={{
                    delay:0.6
                }}
                whileInView={{
                    y:0
                }}
                whileHover={{
                    height:'160px',
                }}
                />
            </motion.div>

            <motion.div className='h-[70px] w-[350px] mb-10'
            initial={{
                height:'70px',
                width:'350px'
            }}
            whileHover={{
                height:'160px',
            }}
            >
               <motion.img className='h-[70px] w-[350px]' src="planet-05.png" alt="" 
                 initial={{
                    y:40,
                    height:'70px',
                    width:'350px'
                }}
                transition={{
                    delay:0.9
                }}
                whileInView={{
                    y:0
                }}
                whileHover={{
                    height:'160px',
                    
                }}
                />
            </motion.div>

            
            
            
        </div>
        <div className='shadow-[0px_20px_176px_81px_#63b3ed] ml-[20rem]'></div>
      </div>
    </div>
  )
}

export default Worlds
