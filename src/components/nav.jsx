import React from 'react'
import { motion } from "framer-motion"
import {Glitch} from "react-teffex";
const Nav = () => {
  return (
    <div>
        <motion.div className='space-x-28 flex border-2 h-10 text-white border-none lg:space-x-96'
         initial={{
          opacity:0,
          y:-100
        }}
        transition={{
          type:'spring',
          stiffness:50
        }}
        animate={{
          opacity:1,
          y:1
        }}
        >
            <div>
            <div className='lg:pr-40'></div>
            <i class="fa-solid fa-magnifying-glass shadow-[18px_16px_306px_128px_#6b46c1] bg-purple-950"></i>
            </div>
            
            <div className=''><Glitch alphabet buffer={10} text={"METAVERSE"} /></div>
            <div className='lg:pl-40' ><i class="fa-solid fa-bars"></i></div>
        </motion.div>
        
    </div>
  )
}

export default Nav
