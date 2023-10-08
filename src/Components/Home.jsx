import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
 import MainSlider from './MainSlider'
 import {Link} from 'react-scroll'
 import { useState } from 'react'
 import { useEffect } from 'react'
const Home = () => {
 const [scroll, setScroll] = useState(false)
 const handleScroll = () => {
  if(window.scrollY===0){
    setScroll(false)
  }else{
    setScroll(true)
  }
  
};
 
 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div id="home" className='pt-[5.8rem] overflow-x-hidden'>
      <main className='border-2 h-80 bg-[#081054]'>
      <h4 className=' fixed p-1 bg-orange-400 -rotate-90 mt-64 mr-[20vw] z-50'>Cat Online Mock</h4>
          <MainSlider/>
       <div className='main-links absolute flex items-center ml-20 pt-0'>
      <AiOutlineHome className='text-white'/> <h3 className='text-white'> / Pages / Common Law Apptitude Test</h3>
       </div>
      
      </main>
    { scroll &&  <div className='fixed right-0 bottom-0'>
                <a href="#home" className='cursor-pointer ' smooth duration={500}><i class="fas fa-arrow-alt-circle-up text-4xl"></i></a>
                </div>}
    </div> 
  )
}

export default Home