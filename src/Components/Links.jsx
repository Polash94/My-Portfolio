import React from 'react';
import { GrFacebook } from 'react-icons/gr';
import { AiFillGithub , AiFillLinkedin } from 'react-icons/ai';

const Links = () => {
    return (
        <div className='fixed left-0 top-[40%] hidden md:flex flex-col z-10'>
            <div className='flex bg-gray-400 w-[150px] ml-[-97px] hover:ml-[0px] border hover:rounded-r-lg duration-300'>
                <a href="https://www.facebook.com/profile.php?id=100070167646235" className='flex gap-4 p-3 text-lg font-semibold justify-center items-center'>
                    Facebook
                    <GrFacebook className='text-2xl '></GrFacebook>
                </a>
            </div>

            <div className='flex bg-gray-400 w-[150px] ml-[-97px] hover:ml-[0px] border hover:rounded-r-lg duration-300'>
                <a href="https://github.com/" className='flex gap-4 p-3 text-lg font-semibold justify-center items-center'>
                    Github
                    <AiFillGithub size={30} className=' ml-[25px]'></AiFillGithub>
                </a>
            </div>

            <div className='flex bg-gray-400 w-[150px] ml-[-97px] hover:ml-[0px] border hover:rounded-r-lg duration-300'>
                <a href="https://www.linkedin.com/in/mohammad-polash-617bb3252/" className='flex gap-4 p-3 text-lg font-semibold justify-center items-center'>
                    LinkedIn
                    <AiFillLinkedin size={28} className='ml-[10px]'></AiFillLinkedin>
                </a>
            </div>
        </div>
    );
};

export default Links;