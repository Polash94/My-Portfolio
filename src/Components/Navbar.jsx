import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { GiBrainFreeze } from 'react-icons/gi';

import ScrollContext from './ScrollContext';

const Navbar = ({ScrollToSection}) => {

    //NavState

const [nav,setNav] = useState(false);

const links = [
    {
        id: 1,
        link: "Home",
        route:""
    },
    {
        id: 2,
        link: "About",
        route:"about"
    },
    {
        id: 3,
        link: "Portfolio",
        route:"portfolio"
    },
    {
        id: 4,
        link: "Experience",
        route:"experience"
    },
    {
        id: 5,
        link: "Contact",
        route:"contact"
    }
]


    return (
        <div>
            <div className='flex justify-between items-center px-4 py-3 bg-gradient-to-b from-black to-gray-700 z-10 fixed w-full h-[65px]'>
                <div className=' font-signature flex gap-3 text-white px-[50px] text-4xl font-bold px-10'>
                    <GiBrainFreeze size={40}></GiBrainFreeze>
                <p>Polash</p>
                </div>

                <div className=' hidden md:flex gap-3 text-sm md:text-lg md:p-3 md:gap-10 md:pr-10  justify-center items-center text-white'>
                   { links.map((item) => {
                    return <div onClick={() => ScrollToSection(item.route)}  className=' list-none hover:scale-105 duration-300 cursor-pointer uppercase font-medium' key={item.id}>{item.link}</div>
                   } )}
                </div>

                <div onClick={() => setNav(!nav)} className=' cursor-pointer md:hidden py-3 z-20'>
                    {nav ? <RxCross1 className='text-white' size={25}></RxCross1> : <FaBars size={25} className='text-white'></FaBars>}
                </div>

                { nav && (
                        <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 flex flex-col gap-10 justify-center items-center z-10'>
                        { links.map((item) => {
                            return <Link to={`/${item.route}`} className=' list-none cursor-pointer hover:scale-105 hover:border-b duration-300 uppercase text-white text-3xl font-medium' key={item.id}>{item.link}</Link>
                           } )}
                        </div>
                )}

                

            </div>
            
        </div>
    );
};

export default Navbar;