import React from 'react';

function Defaultlayout({children}) {
    return (
        <div>
            <Navbar/>
            {children} 
            <Footer/>
        </div>
    );
}

export default Defaultlayout;