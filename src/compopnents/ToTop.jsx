import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
function ToTop(props) {
    const [top,setTop] = useState(false)
    useEffect(()=>{
        const handleScroll = ()=>{
            window.scrollY > 200 ? setTop(true): setTop(false)
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        top && (
            <div className='fixed right-10 bottom-10 flex items-center justify-center rounded-full w-[40px] h-[40px] bg-primary shadow-lg shadow-primary/70 animate-bounce cursor-pointer' onClick={handleToTop}>
                <AiOutlineArrowUp className='text-[24px] text-white'/>
            </div>
        )
    );
}

export default ToTop;