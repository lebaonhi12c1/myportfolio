import React from 'react';
import aboutimage from '../assets/about.jpg'
import {AiFillCheckCircle} from 'react-icons/ai'
function About(props) {
    const aboutdata = [
        'heading 11',
        'heading 11',
        'heading 11',
        'heading 11',
        'heading 11',
    ]
    return (
        <div className='grid grid-cols-2 gap-[40px] sm:grid-cols-1 sm:gap-4' id='about'>
            <div>
                <img src={aboutimage} alt="about-img" className='w-full h-full object-cover rounded-[10px]' />
            </div>
            <div className='flex flex-col gap-[20px]'>
                <div className='text-textheading text-[35px] font-medium'>We Provide Many Features You Can Use</div>
                <div className='text-textcolor'>You can explore the features that we provide with fun and have their own functions each feature.</div>
                <div className='flex flex-col gap-[15px]'>
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