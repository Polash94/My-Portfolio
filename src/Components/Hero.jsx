import React from 'react';
import myself from '../images/myself.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
const Hero = () => {
    return (
        <div className='md:flex md:w-full h-screen pt-[90px] pb-5 lg:pb-0'>
            <div className=' px-5 pt-7 md:ml-[25px] md:p-10 text-white flex flex-col items-start gap-10 px-10 mx-auto md:w-1/2 justify-center '>
                <h1 className='text-4xl font-bold flex justify-center items-center lg:text-6xl'>Frontend Web Developer</h1>
                <p className='lg:text-2xl'>I,m <span className='font-semibold'>Mohammad Polash</span>.I build web applications that are  user-friendly, responsive, and visually appealing using <span className='font-semibold'>React</span>,based on Javascript.</p>

                <div className=' bg-gradient-to-r from-pink-400 to-blue-500 px-8 py-1 flex justify-center items-center group hover:scale-105 duration-300 cursor-pointer  border border-black rounded-lg  gap-3 drop-shadow-lg z-0'>
                <button className='lg:p-2 lg:text-xl'>Resume</button>
                <AiOutlineArrowRight className='group-hover:rotate-90 transition duration-300'></AiOutlineArrowRight>
                </div>
            </div>

            <div  className=' px-10 flex justify-center items-center md:w-1/2 pt-[85px]'>
                <div className='flex justify-center items-center'>
                    <img className='border bg-gradient-to-r from-pink-400 to-blue-500 border-gray-500 rounded-full h-[300px] lg:h-[400px] md:max-h-none' src={myself} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;