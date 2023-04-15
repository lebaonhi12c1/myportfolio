import React from 'react';
import Hero from '../compopnents/Hero';
import CouterInfor from '../compopnents/CouterInfor';
import About from '../compopnents/About';
import Skill from '../compopnents/Skill';
import Project from '../compopnents/Project';
import Contact from '../compopnents/Contact';
function Home(props) {
    return (
        <div className='root-container'>
            <Hero/>
            <div className='flex flex-col gap-[100px]'>
                <CouterInfor/>
                <About/>
                <Skill/>
                <Project/>
                <Contact/>
            </div>
        </div>
    );
}

export default Home;