
// import { HiArrowNarrowRight} from 'react-icons/hi'
import React from 'react'
import HTML from '../Assets/html.png'
import CSS from "../Assets/css.png"
import JavaScript from "../Assets/javascript.png"
import ReactImg from "../Assets/react.png"
import GitHub from "../Assets/github.png"
import Tailwind from "../Assets/tailwind.png"
import Scss from "../Assets/sass.png"

function Home() {
  
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            {/* //<p className='text-pink-600'>Hi, my name is 👋</p> */}
            <h1 className='text-3xl sm:text-5xl sm:mt-12 font-bold text-[#ccd6f6] '>
             Front-End React
             <><br /></> Developer 👋
            </h1>
            {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
              I'm a Full Stack Developer.
            </h2> */}
            <p className='text-[#8892b0] py-4 max-w-[700px] '>
            Hi, I'm Kaustubh brahmankar. A passionate Front-end React Developer based in pune, India. 📍
            </p>
            <div name='skills' className='g-[#0a192f] text-gray-300'>
    {/* Container */}
            <div>
                  
           
            <p className='py-4 font-bold py-5px flex  justify-center '>Tech Stack</p>
    

        <div className='w-[200px] sm:w-[500px] grid grid-cols-3 sm:grid-cols-7 gap-6 text-center py-2  m-auto   '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
             </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
             </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
             </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
               </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
               </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
            </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Scss} alt="HTML icon" />
           </div>
           
        </div>
    </div>
  </div>
          </div>
        </div>
  )
}

export default Home