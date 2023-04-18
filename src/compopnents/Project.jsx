import React from 'react';
import bookingimage from '../assets/booking2.jpg'
import clothes from '../assets/clothesStore.jpg'
import travel from '../assets/1971799.jpg'
import sweetshop from '../assets/set-with-fashionable-women-s-clothing-jeans-sweater.jpg'
import landingpage from '../assets/landingpage.jpg'
import truyenyy from '../assets/6100_2_05.jpg'
import { motion } from 'framer-motion';
function Project(props) {
    const projectdata = [
        {
            title: 'travel tour',
            image: travel,
            desc: 'Website giới thiệu thông tin của các chuyến tour du lịch, sử dụng được trên màn hình desktop và điện thoại',
            link: 'https://tralveltour.vercel.app',
        },
        {
            title: 'Booking app',
            image: bookingimage,
            desc: 'Website giúp cho người dùng tìm kiếm và đặt chỗ nghĩ tại địa điểm du lịch của mình. Công nghệ sử dụng: Nextjs,Nodejs, Mongoose, Redux, Reduxpersist. Vài trò của bản thân: phụ trách phần giao diện call các api render dữ liệu',
            link: 'https://bookingapp-n12.vercel.app',
        },
        {
            title: 'ClothesStore',
            image: clothes,
            desc: '-Website bán quần áo ở mức giao diện bao gồm cả reponsive. Công nghệ sử dụng: Reactjs, Scss và thư viện reponsive grid layout tự viết',
            link: 'https://myclothesstorelebaonhi12c1.vercel.app',
        },
        {
            title: 'SweetShop',
            image: sweetshop,
            desc: 'Mục đích: web site bán quần áo ở mức giao diện của thể đăng nhập đăng ký để thao tác với giỏi hàng và sản phẩm --có thể đăng ký tài khoản để đăng nhập--Tải khoản mẫu: username: lebaonhi, password: lebaonhi Công nghệ: Reactjs, ReactContext,..',
            link: 'https://storied-cannoli-eaefff.netlify.app/',
        },
        {
            title: 'Landing page',
            image: landingpage,
            desc: 'Mục đích: tạo một template landinhpage bao gồm cả reponsive. Công nghệ: Nextjs 12',
            link: 'https://landinglebaonhi12c1page.vercel.app/',
        },
        {
            title: 'Truyenyyclone',
            image: truyenyy,
            desc: 'Website giúp cho người dùng tìm kiếm, đọc những bộ truyện yêu thích của mình khi truy cập vào trang web Công nghệ sử dụng: Reatjs, Tailwindcss, và một số thư viện hỗ trợ khác như của Reactjs như react-slider-swiper toast-notify,...',
            link: 'https://truyenyy.vercel.app',
        },
    ]
    return (
        <div className='flex flex-col gap-[20px] items-center' id='projects'>
            <div className='text-textheading text-[35px] font-medium'>Review my project</div>
            <div className='text-textcolor'>Please explore my interesting projects below, it may help you to know more about me</div>
            <div className='grid grid-cols-3 gap-[50px] sm:grid-cols-1 '>
                {projectdata.map((item,index)=>(
                    <motion.div
                    initial = {{
                        y: 50,
                        opacity: 0,
                     }}
                     whileInView={{
                        y: 0,
                        opacity: 1
                     }}
                     viewport={{ once: true }}
                     className="rounded-[10px] border border-[#ddd] flex flex-col items-center gap-[30px] py-[50px] hover:border-primary duration-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/70 px-[76px]" key={index}>
                        <img src={item.image} alt={item.title} className=' h-[150px] object-cover rounded-md' />
                        <div className='text-[18px] text-textheading font-medium uppercase'>{item.title}</div>
                        <div className='text-textcolor text-[14px]'>{item.desc}</div>
                        <a href={item.link} target='_blank' className='block py-[13px] px-[63px] hover:bg-primary hover:text-white border border-primary rounded-full  whitespace-nowrap duration-150 active:scale-90 text-primary mt-auto'>View now</a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;