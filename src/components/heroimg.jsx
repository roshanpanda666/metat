import React from 'react'
import {motion} from 'framer-motion'
const Heroimg = () => {
    const scrooltoexp=()=>{
        
            window.scrollTo({top:1000,left:0,behavior:'smooth'})
          
    }
  return (
    <>
        <div className='flex items-end justify-end h-96 w-10/12'>
            <div className='hidden lg:block w-52 h-52 mb-48 rounded-full shadow-[0px_20px_79px_12px_#9f7aea] backdrop-blur-sm bg-purple-500'><motion.img src="get-started.png" alt="" 
            initial={{
                x: -400,
            }}
            transition={{
                type:'spring',
                stiffness: 30,
            }}
            animate={{
                x:0,
                rotateY:360
            }}
            /></div>
               
                <div className='mb-20 lg:mb-28 h-96 w-11/12'>
                    <motion.img className='rounded-l-full lg:h-96 lg:w-10/12 lg:ml-40 lg:rounded-tl-full lg:rounded-bl-full' src="cover.png" alt="" 
                    initial={{
                        opacity:0,
                        x:30,

                    }}
                    transition={{
                        duration:1
                    }}
                    whileInView={{
                        x:1,
                        opacity:1,

                    }}
                    />
                    
                </div>
                <div className='pb-80 w-10 h-10 lg:h-20 lg:w-20 absolute lg:pb-40  '>
                    <div className='shadow-[146px_131px_286px_22px_#3182ce,79px_138px_238px_41px_#b794f4] rounded-full'>
                    <motion.img src="stamp.png" alt="" 
                    initial={{
                        opacity:0,
                        x:20,
                    }}
                    transition={{
                        type:'spring',
                        
                    }}
                    whileInView={{
                        x:0,
                        opacity:1,
                        rotateZ:760
                    }}
                    
                    whileHover={{
                        rotateZ:600
                    }}
                    onClick={scrooltoexp}/>
                    </div>

                </div>
                <div className='shadow-[91px_76px_65px_19px_#b794f4]'></div>
        </div>
    </>
  )
}

export default Heroimg
