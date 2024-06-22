import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5020/reviews')
            .then(response => response.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <section className='my-20'>
            <SectionTitle heading={'What our client say?'}
                subHeading={'Testimonials'}>
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {

                    testimonial.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className='flex flex-col items-center m-24'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='mt-8'>{review.details}</p>
                                <h3 className='text-2xl text-yellow-700 '>{review.name}</h3>
                            </div>
                        </SwiperSlide>)

                }

            </Swiper>
            <div>

            </div>

        </section>

    );
};

export default Testimonial;