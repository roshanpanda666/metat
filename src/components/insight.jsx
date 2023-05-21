import React from 'react'
import {motion} from 'framer-motion'

const Insight = () => {
  return (
    <div className='mt-10 flex justify-center items-center text-white flex-col'>
      <div className='text-gray-400 text-sm'>| INSIGHT</div>
      <div className='text-white text-2xl lg:text-5xl'>INSIGHT ABOUT METAVERSE</div>
      <div className='flex flex-col'>
        <motion.div className='flex space-x-10 lg:space-x-20 mt-10 items-center justify-center'
        initial={{
          scale:0
        }}

        whileInView={{
          scale:1
        }}
        >

          <div><img src="planet-06.png" alt="" className='lg:h-36 h-20 rounded-lg'/></div>
          <div className='flex flex-col'>

              <div className=' text-1xl lg:text-2xl flex'>The lunch of the metaverse<br></br>make ELON MUSK ketar-ketir</div>
              <div className='text-gray-400 text-xs mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
          <motion.div className='  lg:w-8 lg:h-8  justify-center items-center w-10 h-8 lg:block hidden'
          initial={{
            rotate:0
          }}
          whileInView={{
            rotate:1020
          }}
          ><i class="fa-solid fa-arrow-right"></i></motion.div>
        </motion.div>

        <motion.div className='flex space-x-8 lg:space-x-20 mt-10 items-center justify-center'
        initial={{
          scale:0
        }}

        whileInView={{
          scale:1
        }}
        >

          <div><img src="planet-08.png" alt="" className='lg:h-36 mr-3 lg:w-52 h-20 w-28 rounded-lg'/></div>
          <div className='flex flex-col'>

              <div className=' text-1xl lg:text-2xl flex'>with one platform you can<br></br>explore whole world</div>
              <div className='text-gray-400 text-xs mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
          <motion.div className='lg:block hidden  lg:w-8 lg:h-8 justify-center items-center w-10 h-8 lg:mr-0 mr-10'
          initial={{
            rotate:0
          }}
          whileInView={{
            rotate:1020
          }}
          ><i class="fa-solid fa-arrow-right"></i></motion.div>
        </motion.div>

        <motion.div className='flex space-x-8 lg:space-x-20 mt-10 items-center justify-center'
        initial={{
          scale:0
        }}

        whileInView={{
          scale:1
        }}
        >

          <div><img src="planet-07.png" alt="" className='lg:h-36 mr-3 lg:w-52 h-20 w-28 rounded-lg'/></div>
          <div className='flex flex-col'>

              <div className=' text-1xl lg:text-2xl flex'>7 tips to easily master<br></br>the madness of metaverse</div>
              <div className='text-gray-400 text-xs mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
          <motion.div className='lg:block hidden  lg:w-8 lg:h-8 justify-center items-center w-10 h-8 lg:mr-0 mr-10'
          initial={{
            rotate:0
          }}
          whileInView={{
            rotate:1020
          }}
          ><i class="fa-solid fa-arrow-right"></i></motion.div>
        </motion.div>
      </div>
      <div className='mt-40 flex justify-center items-center lg:space-x-10 lg:flex-row flex-col-reverse space-x-0'>

          <motion.div className='flex flex-col border-2 border-gray-400 w-56 rounded-[10%] bg-transparent h-96 justify-center pl-3'
          initial={{
            scale:0
          }}
          whileInView={{
            scale:1
          }}
          >
            <div className='shadow-[0px_0px_174px_39px_#b794f4] blur-3xl w-[50%]'></div>
            <div className='text-2xl'>Samantha</div>
            <div className='xs'>founder of metaverse</div>
            <div className='mt-10'>Due to the numerous drawbacks of centralized data storage in systems like database management systems (DBMS), the Metaverse concept is incomplete without blockchain.</div>
          </motion.div>

            <div className='lg:mb-96 mb-0'
           
            ><motion.img src="stamp.png" alt="" className='lg:h-28 h-20 absolute z-50 lg:ml-0 ml-16'
            initial={{
              rotate:0,
              scale:0
            }}
            whileInView={{
              rotate:360,
              scale:1
            }}
            whileTap={{
              rotate:0,
              scale:0.8
            }}
            /></div>

          <motion.div
          initial={{
            opacity:0,
            y:100
          }}
          whileInView={{
            opacity:1,
            y:1
          }}
          ><img src="planet-09.png" alt="" className='lg:h-96 lg:w-[30rem] h-72 w-[20rem] rounded-xl'/></motion.div>
      </div>
      <div className='text-4xl mt-20'>3 STEPS TO START</div>
      <div className='flex '>

      <motion.div className='mt-96 mr-11 text-purple-600'
      initial={{
        opacity:0
      }}
      transition={{
        delay:0.4
      }}
      whileInView={{
        opacity:1
      }}
      >chose a world
      <hr className='border-purple-600' />
      </motion.div>
      
        <div className='  h-[35rem] w-1 mt-10'
        
        >
          
          <motion.div className=' bg-purple-600 h-[10rem] shadow-[0px_7px_36px_13px_#9f7aea]'
          initial={{
            height:0
          }}
          transition={{
            type:'spring',
            stiffness:6,
          }}
          whileInView={{
            height:600
          }}
          ></motion.div>

        
        </div>
        <motion.div className='mt-52 ml-10 text-blue-500'
        initial={{
          opacity:0
        }}
        transition={{
          delay:0.2
        }}
        whileInView={{
          opacity:1
        }}
        >login
        <hr className='border-blue-500 w-16 ' />
        <motion.div className='mt-[20rem] text-red-400'
        initial={{
          opacity:0
        }}
        transition={{
          delay:1
        }}
        whileInView={{
          opacity:1
        }}
        >enjoy
        <hr className='border-red-400'/>
        </motion.div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Insight
