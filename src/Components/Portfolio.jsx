import React from 'react';
import { BsArrow90DegRight } from 'react-icons/bs';
import ecommerce from '../images/ecommerce.png'
import todo2 from '../images/todo2.jpg'


const Portfolio = () => {
    return (
        <div className=' text-white bg-gradient-to-b from-gray-900 to-gray-700 mt-[-3px] flex flex-col gap-10 p-5 '>
            <div className='lg:mb-[100px]'>
            <div className='flex justify-center text-center'>
            <div className='text-3xl font-bold flex justify-center items-center border rounded-md border-b bg-gradient-to-r from-pink-400 to-blue-500 w-[40vw] md:w-[20vw] py-1'>Portfolio</div>
            </div>
            </div>
            <div className='flex justify-start items-center gap-5 font-bold text-xl'>
                Projects I have done
                <BsArrow90DegRight className=' rotate-90 font-semibold mt-3'></BsArrow90DegRight>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 lg:gap-[20vw] mx-auto pb-5 '>
                <div className='border  md:p-4  lg:w-[30vw]  border-white rounded-md drop-shadow-2xl bg-gradient-to-r from-gray-600 to-gray-800 py-3 '>
                    <div className=' flex justify-center py-5 text-2xl border-b mb-3 '>
                        Responsive E-commerce Website
                    </div>
                    <div className='flex justify-center '>
                        <img src={ecommerce} alt="ecommerce" className='w-[80vw] border rounded-md' />
                    </div>
                    <div className='flex gap-3 justify-around py-6'>
                        <p className='font-semibold border border-gray-600 rounded-xl px-6 py-3 hover:scale-105 hover:bg-sky-500 duration-300 hover:text-black '>Demo</p>
                        <p className='font-semibold border border-gray-600 rounded-xl px-6 py-3 hover:scale-105 hover:bg-pink-400 duration-300 hover:text-black'>Code</p>
                    </div>
                </div>




                <div>
                <div className='lg:w-[32vw] md:h-[400px]   border border-gray-500 rounded-md bg-gradient-to-b from-gray-900 to-gray-700 py-3 '>
                    <div className=' flex justify-center py-5 text-2xl border-b mb-3'>
                        To Do App
                    </div>
                    <div className='flex justify-center'>
                        <img src={todo2} alt="ecommerce" className='w-[80vw] border rounded-md mt-3' />
                    </div>
                    <div className='flex gap-3 justify-around py-6'>
                        <p className='font-semibold border border-gray-600 rounded-xl px-6 py-3 hover:scale-105 hover:bg-sky-500 duration-300 hover:text-black '>Demo</p>
                        <p className='font-semibold border border-gray-600 rounded-xl px-6 py-3 hover:scale-105 hover:bg-pink-400 duration-300 hover:text-black'>Code</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;