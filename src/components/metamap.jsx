import React from 'react'
import {motion, spring} from 'framer-motion'
const Metamap = () => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col text-white mt-10'>
        
        <div className='text-gray-400 text-sm'>PEOPLE ON THE WORLD</div>
        <div className='text-2xl lg:text-5xl text-white text-center'>TRACK FRIENDS AROUND YOU<br></br>AND INVITE THEM<br></br>TO PLAY WITH YOU</div>
        <div className='shadow-[0px_20px_264px_44px_#90cdf4]'></div>
        <div><motion.img src="map.png" alt="" className='lg:h-[35rem] h-[10rem] mt-12' 
        initial={{
            opacity:0
        }}
        transition={{
            duration: 2,
        }}
        whileInView={{
            opacity:1.5
        }}
        /></div>
        
        <div>DRAG THE PIN WHERE EVER YOU WANT TO GO </div>
        <motion.div className=' flex w-20  rounded-lg items-center justify-center h-10 shadow-[0px_-6px_29px_0px_#90cdf4] text-blue-100 mt-10'
        whileHover={{
            scale: 1.2
        }}
        transition={{
            type:'spring'
        }}
        whileTap={{
            scale:1
        }}
        >go</motion.div>
        
        <div className='flex justify-center items-center lg:space-x-40 space-x-10 lg:-mt-10 mt-32 absolute'>

            
            
            <motion.img src="people-01.png" alt="" className='lg:h-10 h-8 lg:mb-72 mb-32 border-b-8 rounded-[900%] border-orange-400 shadow-[0px_-6px_29px_0px_#ed8936]' 
            initial={{
                opacity:0,
                y:-100
            }}
            transition={{
                type:'spring'
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            />
            
            <motion.img src="planet-04.png" alt="" className='absolute lg:h-10 h-8 mb-48 lg:mb-0 border-2 border-blue-300 rounded-lg shadow-[0px_4px_17px_0px_#90cdf4]'
            initial={{
                opacity:0,
                y:-100
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            />

            <motion.img src="people-03.png" alt="" className='lg:h-10 h-8 lg:-mb-60 mb-12 shadow-[0px_-6px_29px_0px_#90cdf4] border-b-8 rounded-[900%] border-cyan-300'
            initial={{
                opacity:0,
                y:-100
            }}
            transition={{
                type:'spring'
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            />
            <motion.div className='mb-40 rounded-full shadow-[0px_-6px_29px_0px_#90cdf4] mt-11'
            drag
            initial={{
                opacity:0,
                y:-100
            }}
            whileHover={{
                scale:1.5
            }}
            transition={{
                type:'spring'
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            ><i class="fa-solid fa-map-pin" 
            ></i></motion.div>
            <motion.img src="people-02.png" alt="" className='lg:h-10 h-8 border-b-8 lg:-mb-36 mb-44 rounded-[900%] border-pink-400 shadow-[0px_-6px_29px_0px_#ed64a6]'
            initial={{
                opacity:0,
                y:-100
            }}
            transition={{
                type:'spring'
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            />
            
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Metamap
