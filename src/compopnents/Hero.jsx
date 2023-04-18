import React from 'react';
import heroimage from '../assets/software-dev.jpg'
import {motion} from 'framer-motion'
import frameranimate from '../hooks/framermotion';
function Hero(props) {
    return (
        <div className='my-[100px]'>
            <div className='grid grid-cols-2 gap-[40px] sm:grid-cols-1'>
                <div className='flex flex-col items-start sm:justify-center sm:items-center gap-[20px]'>
                    <motion.div
                    variants={frameranimate.fadeLeftVariants}
                    initial='initamimate'
                    animate= 'animate'
                    transition={{
                        type: 'spring',
                        stiffness: '100',
                        duration: 1
                    }}
                    className='text-textheading text-[50px] font-medium sm:text-center sm:text-[30px] overflow-hidden'>
                    Hi!, I'am <span className='text-primary'>Le Bao Nhi</span><br /><span className='text-primary'>Web Developer</span>
                    </motion.div>
                    <div className='text-textcolor sm:text-center'>Hi, I'm Le Bao Nhi, and I graduated from the University of Sai Gon Technology University in 2019 with a degree in Software Engineer.</div>
                    <motion.a
                     initial = {{
                        backgroundColor: '#fff',
                        color: '#000'
                     }}
                     animate = {{
                        backgroundColor: '#F53838',
                        color: '#fff'
                     }}
                     href='#about' className='py-[17.5px] px-[77.5px] bg-primary rounded-[10px] text-white shadow-xl font-semibold shadow-primary/70 hover:scale-105 active:scale-90 duration-150 select-none whitespace-nowrap'>Get start</motion.a>
                </div>
                <motion.div
                variants={frameranimate.fadeRightVariants}
                initial = 'initamimate'
                animate = 'animate'
                transition={{
                    type: 'spring',
                    stiffness: '100',
                    duration: 1
                }}
                className=''>
                    <img src={heroimage} alt="hero-img"className='w-full h-full object-cover rounded-lg' />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;