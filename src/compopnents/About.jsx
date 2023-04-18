import React from 'react';
import aboutimage from '../assets/about.jpg'
import {AiFillCheckCircle} from 'react-icons/ai'
function About(props) {
    const aboutdata = [
        'Html/css/javascript',
        'Reactjs',
        'Nextjs',
        'Tailwindcss/Bootstrap/MaterialUI/Ant/...',
        'Redux',
        'Vite',
    ]
    return (
        <div className='grid grid-cols-2 gap-[40px] sm:grid-cols-1 sm:gap-4' id='about'>
            <div>
                <img src={aboutimage} alt="about-img" className='w-full h-full object-cover rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-[20px] sm:items-center'>
                <div className='text-textheading text-[35px] font-medium'>About <span className='text-primary'>Le Bao Nhi</span></div>
                <div className='text-textcolor'>“My name is Le Bao Nhi. I’m 22 years old. I graduated from SaiGon Technology University with a degree in Software Engineer.<br/>
                <span className='mt-4 block'>I’m working as a Frontend Developer in Freelancer with over 1 years experience developing different websites, apps and implementing them — from landing pages to big projects, mostly using Html/css/javascript, Reactjs, Nextjs, Vite, Angular, Vuejs,...."</span></div>
                <div className='flex flex-col gap-[15px] sm:self-start'>
                   {aboutdata.map((item,index)=>(
                        <div className='flex items-center gap-[10px]' key={index}>
                            <AiFillCheckCircle className='text-[24px] text-[#2FAB73]'/>
                            <div className='text-textcolor text-[14px]'>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;