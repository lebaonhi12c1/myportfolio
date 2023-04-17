import React from 'react';
import { AiFillCopyrightCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='bg-[#F8F8F8] border-t border-primary py-[63px] mt-[100px]'>
            <div className='root-container'>
                <div className='grid grid-cols-5 sm:grid-cols-1 gap-4'>
                    <div className=' col-span-2'>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='text-primary uppercase'>lebaonhi12c1</div>
                            <div className='text-textcolor text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit necessitatibus repellendus tempore dolorum non repellat quam pariatur sint optio dolor maxime, iusto voluptas quo aperiam eum? Magnam, quisquam odio!</div>
                            <div className='flex items-center gap-[20px]'>
                                <Link to={'/'} className='w-[33.6px] h-[33.6px] rounded-full shadow-lg flex items-center justify-center text-primary text-[20px]'>
                                    <AiFillFacebook/>
                                </Link>
                                <Link to={'/'} className='w-[33.6px] h-[33.6px] rounded-full shadow-lg flex items-center justify-center text-primary text-[20px]'>
                                    <AiFillTwitterCircle/>
                                </Link>
                                <Link to={'/'} className='w-[33.6px] h-[33.6px] rounded-full shadow-lg flex items-center justify-center text-primary text-[20px]'>
                                    <AiFillInstagram/>
                                </Link>
                            </div>
                            <div className='text-[#AFB5C0] text-[14px] flex  items-center gap-1'><AiFillCopyrightCircle/> by lebaonhi12c1</div>
                        </div>
                    
                    </div>
                    <div className ='flex flex-col gap-[20px]'>
                        <div className='text-textheading uppercase'>contact</div>
                        <div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                        </div>
                    </div>
                    <div className ='flex flex-col gap-[20px]'>
                        <div className='text-textheading uppercase'>contact</div>
                        <div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                        </div>
                    </div>
                    <div className ='flex flex-col gap-[20px]'>
                        <div className='text-textheading uppercase'>contact</div>
                        <div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                            <div className='hover:text-primary hover:translate-x-1 duration-150 cursor-pointer'>item</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;