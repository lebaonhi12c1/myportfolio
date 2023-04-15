import React from 'react';
import {GiSkills} from 'react-icons/gi'
import {AiFillProject} from 'react-icons/ai'
function CouterInfor(props) {
    return (
        <div className='rounded-[10px] py-[37px] flex items-center justify-center gap-[130px] sm:gap-4 shadow-lg shadow-slate-300 sm:flex-col'>
            <div className='flex gap-[36.5px] items-center sm:flex-col sm:gap-4'>
                <div className='w-[55px] h-[55px] rounded-full bg-secondary flex items-center justify-center'>
                    <GiSkills className='text-primary text-[24px]'/>
                </div>
                <div className='flex flex-col gap-1 sm:justify-center sm:items-center'>
                    <div className='text-textheading text-[25px] font-semibold'>80+</div>
                    <div className='text-textcolor text-[20px]'>Skills</div>
                </div>
            </div>
            <div className='border-[2px] border-[#EEEFF2] h-[125px] sm:h-full sm:w-full'></div>
            <div className='flex gap-[36.5px] items-center sm:flex-col sm:gap-4'>
                <div className='w-[55px] h-[55px] rounded-full bg-secondary flex items-center justify-center'>
                    <AiFillProject className='text-primary text-[24px]'/>
                </div>
                <div className='flex flex-col gap-1 sm:justify-center sm:items-center'>
                    <div className='text-textheading text-[25px] font-semibold'>80+</div>
                    <div className='text-textcolor text-[20px]'>Projects</div>
                </div>
            </div>
        </div>
    );
}

export default CouterInfor;