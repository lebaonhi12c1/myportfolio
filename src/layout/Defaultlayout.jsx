import React from 'react';
import Navbar from '../compopnents/Navbar';
import Footer from '../compopnents/Footer';
import ToTop from '../compopnents/ToTop';
import { Outlet } from 'react-router-dom';
function Defaultlayout() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

export default Defaultlayout;