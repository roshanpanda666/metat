import React from 'react'
import Nav from './components/nav'
import Home from './components/home'
import Heroimg from './components/heroimg'
import About from './components/about'
import Worlds from './components/worlds'
const App = () => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-950 via-gray-950 to-violet-950 flex justify-center items-center flex-col pb-96 '>
      <Nav></Nav>
      <Home></Home>
      <Heroimg></Heroimg>
      <About></About>
      <Worlds></Worlds>
    </div>
  )
}

export default App
