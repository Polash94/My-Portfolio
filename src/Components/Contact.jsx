import React from 'react';

const Contact = () => {
    return (
        <div className=' bg-gradient-to-b from-gray-900 to-gray-700 text-white p-10 md:px-[80px] flex justify-center mt-[-3px]'>

<div className='md:w-[60vw] lg:w-[40vw]'>
    
<div className='flex justify-center text-center md:mb-[100px]'>
            <div className='text-3xl font-bold flex justify-center items-center border rounded-md border-b bg-gradient-to-r from-pink-400 to-blue-500 w-[40vw] md:w-[20vw] py-1'>CONTACT</div>
            </div>


            <div className='text-xl py-10 md:px-5 '>
                Submit anything so that we can talk
            </div>
            <div className=' bg-gradient-to-t from-gray-700 to-gray-500 py-2 border rounded-md drop-shadow-lg  px'>
                <form action="https://getform.io/f/ce5d4987-63d5-4952-af38-0c3668efaa5e" className='m-3' method="POST">
                    <div className='flex flex-col gap-3 p-5 justify-center'>
                        
                        <input className='h-[40px] bg-blue-200 border rounded-md p-2 text-black font-semibold' type="text" placeholder='Enter your Email' name='email' />

                        <input className='h-[40px] border rounded-md p-2  font-semibold bg-blue-200 text-black ' type="text" placeholder='Enter your name'name='name' />

                        <textarea className='text-black font-semibold border rounded-md p-2 bg-blue-200' text-white cols="30" rows="10" placeholder='Feedback......' name='description'></textarea>

                        <div className='w-full flex justify-center'>
                        <input className=' w-fit flex text-xl  p-2 px-4 border rounded-md bg-gradient-to-r from-pink-400 to-blue-500 drop-shadow-lg cursor-pointer' type="submit" value="Submit" />
                        </div>
                    </div>
                    
                    
                    
                </form>
            </div>
</div>
        </div>
    );
};

export default Contact;