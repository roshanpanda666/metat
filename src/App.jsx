import React from 'react'
import Nav from './components/nav'
import Home from './components/home'
import Heroimg from './components/heroimg'
import About from './components/about'
import Worlds from './components/worlds'
import Metaworking from './components/metaworking'
import Whatsnew from './components/whatsnew'
import Metamap from './components/metamap'
import Insight from './components/insight'
import Footer from './components/footer'
const App = () => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-950 via-gray-950 to-violet-950 flex justify-center items-center flex-col  lg:w-[100%] w-[100%]'>
      <Nav></Nav>
      <Home></Home>
      <Heroimg></Heroimg>
      <About></About>
      <Worlds></Worlds>
      <Metaworking></Metaworking>
      <Whatsnew></Whatsnew>
      <Metamap></Metamap>
      <Insight></Insight>
      <Footer></Footer>
    </div>
  )
}

export default App
