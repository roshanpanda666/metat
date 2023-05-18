import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className='space-x-40 flex border-2 border-red-500 h-10 text-white lg:space-x-96'>
            <div>
            <div className='lg:pr-40'></div>
            <i class="fa-solid fa-magnifying-glass shadow-[18px_16px_306px_128px_#6b46c1] bg-purple-800"></i>
            </div>
            
            <div className=''>METAVERSE</div>
            <div className='lg:pl-40' ><i class="fa-solid fa-bars"></i></div>
        </div>
    </div>
  )
}

export default Nav
