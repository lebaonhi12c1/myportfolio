import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar(props) {
    const pathname= useLocation()
    const handleActive = value=>{
       return  pathname.hash.includes(value)?true:false
    }
    return (
        <div className='shadow-lg'>
            <div className='root-container'>
            <div className='flex items-center justify-between sm:justify-center  py-[50px]'>
                <div  className='sm:hidden uppercase text-primary'>lebaonhi12c1</div>
                <div className='flex items-center gap-10'>
                    <a  className={` hover:text-primary duration-150 ${handleActive('about')? 'text-primary':'text-textcolor'}`} href="#about">About</a>
                    <a  className={` hover:text-primary duration-150 ${handleActive('skill')? 'text-primary':'text-textcolor'}`} href="#skills">Skills</a>
                    <a  className={` hover:text-primary duration-150 ${handleActive('project')? 'text-primary':'text-textcolor'}`} href="#projects">Projects</a>
                    <a  className={` hover:text-primary duration-150 ${handleActive('contact')? 'text-primary':'text-textcolor'}`} href="#contact">Contact</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;