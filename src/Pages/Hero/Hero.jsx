import React from 'react';
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import reasume from '../../assets/images/Reasume of Mehedi Hasan.pdf';


const Hero = () => {


    return (
        <div className="h-full md:h-[80vh] relative bg-img py-5" id='hero'>
            <div className="flex flex-col justify-center items-center pt-10 md:pt-20">
                <img className=' h-48 w-48 md:h-64 md:w-64 rounded-full bg-purple-300 mx-auto' src="https://i.ibb.co/9W8265W/Mehedi-Hasan.png" alt="" />
                <h3 className='text-xl md:text-3xl text-white pt-5'>Hi There, I'm</h3>
                <h2 className='text-3xl md:text-6xl  text-white py-3'>Md. Mehedi Hasan</h2>
                <h3 className='text-xl md:text-2xl text-white'>
                    I have experience with: <span className='text-rose-500 font-bold'>
                        <Typewriter
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={200}
                            delaySpeed={2000}
                            deleteSpeed={200}
                            words={['React', 'MongoDB', 'Node.Js', 'Express.Js']}
                        />
                    </span>
                </h3>
            </div>
            <div className='text-center'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-5 text-white justify-center items-center mt-5'>
                    <a className='flex gap-3 items-center text-lg font-semibold' href="tel:+8801953218211"> <FaPhoneAlt />+8801953218211</a>
                    <a className='flex gap-3 items-center text-lg font-semibold' href="mailto:mehedi.hasan100@outlook.com"> <AiOutlineMail /> mehedi.hasan100@outlook.com</a>
                </div>
            </div>
            <div className='text-center mt-7'>
                <a href={reasume} download className='btn btn-primary'>Download Resume</a>
            </div>
        </div>
    );
};

export default Hero;