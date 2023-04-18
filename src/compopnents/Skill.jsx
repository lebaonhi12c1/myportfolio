import React from 'react';
import {motion} from 'framer-motion'
function Skill(props) {
    const skilldata = [
        {
            title: 'html',
            image: 'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
        },
        {
            title: 'css',
            image: 'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo',
        },
        {
            title: 'javascript',
            image: 'https://phambinh.net/wp-content/uploads/2019/12/6475083_out-of-the-abyss-the-new-d-and-d-adventure_t222975d6.jpg',
        },

        {
            title: 'reactjs',
            image: 'https://ru.reactjs.org/logo-og.png',
        },
        {
            title: 'nextjs',
            image: 'https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs',
        },
        {
            title: 'vuejs',
            image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Vue-Blog-Cover-2.png',
        },
        {
            title: 'angularjs',
            image: 'https://www.megaleechers.com/storage/AngularJS-Icon.png',
        },
        
        {
            title: 'vite',
            image: 'https://laravelnews.s3.amazonaws.com/images/laravel-vite-featured.jpg',
        },
        {
            title: 'tailwindcss',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
        },
        {
            title: 'bootstrap',
            image: 'https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png',
        },
        {
            title: 'nodejs',
            image: 'https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png',
        },
        {
            title: 'redux',
            image: 'https://blog.kakaocdn.net/dn/bnSdKq/btqK2rsJYDO/KogjchQOkTHRbW4Iy410tk/img.jpg',
        },
        {
            title: 'remix',
            image: 'https://remix.run/img/og.1.jpg',
        },
        {
            title: 'jquery',
            image: 'https://avatars.githubusercontent.com/u/70142?s=280&v=4',
        },
    ]
    return (
        <div className='grid grid-cols-4 gap-4 sm:grid-cols-1' id='skills'>
            {skilldata.map((item,index)=>(
                <motion.div
                 initial = {{
                    y: 50,
                    opacity: 0,
                 }}
                 whileInView={{
                    y: 0,
                    opacity: 1
                 }}
                 transition={{
                    delay: index-(index-0.5)
                 }}
                 viewport={{ once: true }}
                 className="flex items-center gap-4 p-4 shadow-lg shadow-primary/70 rounded-lg" key={index}>
                    <img src={item.image} alt={item.title} className='w-[100px] h-[100px] object-cover rounded-lg' />
                    <div className='uppercase text-textheading font-bold'>{item.title}</div>
                </motion.div>
            ))}
        </div>
    );
}

export default Skill;