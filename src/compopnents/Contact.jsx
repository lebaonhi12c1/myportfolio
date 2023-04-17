import React from 'react';
import contacimg from '../assets/5114865.jpg'
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
function Contact(props) {
    const inputdata = [
        {
            label: 'Full Name',
            type: 'text',
            placeholder: 'Enter your fullname...'
        },
        {
            label: 'Email',
            type: 'email',
            placeholder: 'Enter your email...'
        },
    ]
    return (
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-10' id='contact'>
            <img src={contacimg} alt="contact-image" className='w-full h-full object-cover' />
            <div className='flex flex-col gap-4 items-center'>
                <div className='text-textheading text-[24px] font-semibold uppercase'>
                    contact me
                </div>
                <div className='w-full flex flex-col gap-4'>
                    {inputdata.map((item, index) => {
                        return (
                            <div className="flex flex-col gap-2" key={index}>
                                <label htmlFor={item.label} className='text-textcolor'>
                                    {item.label}:
                                </label>
                                <input type={item.type} name={item.label} className='border border-slate-400 rounded-sm py-1 px-2 focus-visible:outline focus-visible:outline-primary focus-within:border-none duration-150' placeholder={item.placeholder} />
                            </div>
                        )
                    })}

                    <div className="flex flex-col gap-2">
                        <label htmlFor='comment' className='text-textcolor'>
                            Comment:
                        </label>
                        <textarea name="comment" id="comment" rows="5" placeholder='Enter your comment...' className='p-2 border border-slate-400 focus-within:border-none focus-visible:outline focus-visible:outline-primary rounded-sm'></textarea>
                    </div>
                   <button className='bg-primary text-white py-2 px-10 w-fit rounded-full self-center shadow-lg shadow-primary/70 hover:scale-105 active:scale-90 duration-150'>Send</button>
                </div>
                <div className='flex items-center gap-4 self-start mt-auto'>
                    <div className='text-textcolor italic'>Contact me with: </div>
                    <div className='flex items-center gap-2'>
                        <Link to={'https://www.facebook.com/profile.php?id=100010189337411'} className='w-[40px] h-[40px] text-[24px] text-primary flex items-center justify-center rounded-full shadow-lg shadow-slate-300'>
                            <AiFillFacebook/>
                        </Link>
                        <Link to={'https://github.com/lebaonhi12c1'} className='w-[40px] h-[40px] text-[24px] text-primary flex items-center justify-center rounded-full shadow-lg shadow-slate-300'>
                            <AiFillGithub/>
                        </Link>
                        <Link to={''} className='w-[40px] h-[40px] text-[24px] text-primary flex items-center justify-center rounded-full shadow-lg shadow-slate-300'>
                            <AiFillLinkedin/>
                        </Link>
                        <Link to={'https://gmail.com'} className='w-[40px] h-[40px] text-[24px] text-primary flex items-center justify-center rounded-full shadow-lg shadow-slate-300'>
                            <AiFillMail/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;