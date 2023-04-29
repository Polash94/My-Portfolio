import React, { useContext } from 'react';
import { BsArrow90DegRight } from 'react-icons/bs';
import html from'../images/html.svg'
import css from'../images/css.svg'
import javascript from'../images/javascript.svg'
import react from'../images/react.svg'
import tailwind from'../images/tailwind.svg'
import github from'../images/github.svg'


const Experience = ({experience}) => {

console.log(experience)
    
    return (
        <div ref={experience} className='bg-gradient-to-b from-gray-700 to-gray-900 mt-[-3px] py-10 text-white  p-5'>
            <div className='text-3xl font-bold'>
            <div className='flex justify-center text-center lg:mt-[100px] p-10'>
            <div className='text-3xl font-bold flex justify-center items-center border rounded-md border-b bg-gradient-to-r from-pink-400 to-blue-500 w-[40vw] md:w-[30vw] py-1 px-5 mb-5 lg:mb-[100px] px-[50px] p-[100px]'>Experience</div>
            </div>
            </div>
            <div className='font-semibold py-5 flex gap-3 mb-5 text-xl'>
                Technologies I've worked with
                <BsArrow90DegRight className=' rotate-90 font-semibold mt-2'></BsArrow90DegRight>
            </div>



            <div className=' grid grid-cols-3 md:grid-cols-5 gap-10 px-10
            lg:px-[100px]'>
                <div className='flex flex-col  w-fit h-[150px] p-5 border-double border-4 hover:scale-105 duration-300  border-orange-500 rounded-md border'>
                    <img src={html} alt="html" className='h-[100px]' />
                    <h1 className='flex justify-center text-sm font-semibold'>HTML</h1>
                </div>


                <div className='flex flex-col justify-center  w-fit h-[150px] p-5 border-double hover:scale-105 duration-300  border-4 border-blue-600 rounded-md border'>
                    <img src={css} alt="html" className='h-[100px]' />
                    <h1 className='flex justify-center text-sm font-semibold'>CSS</h1>
                </div>


                <div className='flex flex-col justify-center  w-fit h-[150px] p-5 border-double hover:scale-105 duration-300  border-4 border-yellow-400 rounded-md border'>
                    <img src={javascript} alt="html" className='h-[100px]' />
                    <h1 className='flex justify-center text-sm font-semibold'>JavaScript</h1>
                </div>

                <div className='flex flex-col justify-center  w-fit h-[150px] p-5 border-double hover:scale-105 duration-300  border-4 border-sky-400 rounded-md border'>
                    <img src={react} alt="html" className='h-[100px]' />
                    <h1 className='flex justify-center text-sm font-semibold'>React</h1>
                </div>

                <div className='flex flex-col justify-center  w-fit h-[150px] p-5 border-double hover:scale-105 duration-300 border-4 border-sky-300 rounded-md border'>
                    <img src={tailwind} alt="html" className='h-[100px]' />
                    <h1 className='flex justify-center text-sm font-semibold'>Tailwind</h1>
                </div>

                <div className='flex flex-col justify-center  w-fit h-[150px] p-5 border-double hover:scale-105 duration-300 border-4 border-black rounded-md border'>
                    <img src={github} alt="html" className='h-[100px]' />
                    <h1 className='flex justify-center text-sm font-semibold pt-3'>github</h1>
                </div>
            </div>
        </div>
    );
};

export default Experience;