import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={'From 11:00AM-10:00PM'}
                subHeading={'Order Online'}>

            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24 mt-8"
            >
                <SwiperSlide>
                    <img src={img1} />
                    <h1 className='text-4xl uppercase -mt-16 text-white text-opacity-70'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                    <h1 className='text-4xl uppercase -mt-16 text-white text-opacity-70'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                    <h1 className='text-4xl uppercase -mt-16 text-white text-opacity-70'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                    <h1 className='text-4xl uppercase -mt-16 text-white text-opacity-70'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                    <h1 className='text-4xl uppercase -mt-16 text-white text-opacity-70'>Salad</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;