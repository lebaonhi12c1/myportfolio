import React from 'react';

function Project(props) {
    const projectdata = [
        {
            title: 'travel tour',
            image: 'https://static.wixstatic.com/media/nsplsh_98b9913621de415eb2d12568d30f67ef~mv2.jpg/v1/crop/x_0,y_0,w_4032,h_2839/fill/w_600,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Michael%20Rivera%20%F0%9F%87%B5%F0%9F%87%AD.jpg',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quisquam sequi illo et ipsam, sint accusantium mollitia, quibusdam rem consectetur vel blanditiis tempore odio voluptates nam doloremque nemo atque alias.',
            link: 'https://tralveltour.vercel.app',
        },
        {
            title: 'travel tour',
            image: '',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quisquam sequi illo et ipsam, sint accusantium mollitia, quibusdam rem consectetur vel blanditiis tempore odio voluptates nam doloremque nemo atque alias.',
            link: 'https://tralveltour.vercel.app',
        },
        {
            title: 'travel tour',
            image: '',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quisquam sequi illo et ipsam, sint accusantium mollitia, quibusdam rem consectetur vel blanditiis tempore odio voluptates nam doloremque nemo atque alias.',
            link: 'https://tralveltour.vercel.app',
        },
        {
            title: 'travel tour',
            image: '',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quisquam sequi illo et ipsam, sint accusantium mollitia, quibusdam rem consectetur vel blanditiis tempore odio voluptates nam doloremque nemo atque alias.',
            link: 'https://tralveltour.vercel.app',
        },
        {
            title: 'travel tour',
            image: '',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quisquam sequi illo et ipsam, sint accusantium mollitia, quibusdam rem consectetur vel blanditiis tempore odio voluptates nam doloremque nemo atque alias.',
            link: 'https://tralveltour.vercel.app',
        },
        {
            title: 'travel tour',
            image: '',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quisquam sequi illo et ipsam, sint accusantium mollitia, quibusdam rem consectetur vel blanditiis tempore odio voluptates nam doloremque nemo atque alias.',
            link: 'https://tralveltour.vercel.app',
        },
    ]
    return (
        <div className='flex flex-col gap-[20px] items-center' id='projects'>
            <div className='text-textheading text-[35px] font-medium'>Review my project</div>
            <div className='text-textcolor'>Let's choose the package that is best for you and explore it happily and cheerfully.</div>
            <div className='grid grid-cols-3 gap-[50px] sm:grid-cols-1 '>
                {projectdata.map((item,index)=>(
                    <div className="rounded-[10px] border border-[#ddd] flex flex-col items-center gap-[30px] py-[50px] hover:border-primary duration-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/70 px-[76px]" key={index}>
                        <img src={item.image} alt={item.title} className=' h-[150px] object-cover rounded-md' />
                        <div className='text-[18px] text-textheading font-medium uppercase'>{item.title}</div>
                        <div className='text-textcolor text-[14px]'>{item.desc}</div>
                        <a href={item.link} target='_blank' className='block py-[13px] px-[63px] hover:bg-primary hover:text-white border border-primary rounded-full  whitespace-nowrap duration-150 active:scale-90 text-primary'>View now</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;