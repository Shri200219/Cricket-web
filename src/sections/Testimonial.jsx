import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    const videosRef = useRef([]);

    const handleSlideChange = (swiper) => {
        videosRef.current.forEach((video) => {
            if (video) {
                video.pause();
            }
        });

        const activeSlide = swiper.slides[swiper.activeIndex];
        const video = activeSlide.querySelector('video');
        if (video) {
            video.play();
        }
    };

    return (
        <div className="bg-gradient--pale-ocean py-3">
            <div className="container">
                <h2 className="text-center display-5 fw-bold ">What our Client Says</h2>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            // slidesPerView={3}   /// Default for smaller screens
                            spaceBetween={30}
                            breakpoints={{
                                480: { slidesPerView: 1, spaceBetween: 30 },
                                768: { slidesPerView: 1, spaceBetween: 200 }, // Show 2 slides for medium screens
                                1024: { slidesPerView: 2, spaceBetween: 100 }, // Show 3 slides for larger screens
                            }}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 0,
                                depth: 150,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={{ clickable: true }}
                            navigation={true}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper "
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiper) => {
                                const firstSlide = swiper.slides[swiper.activeIndex];
                                const video = firstSlide.querySelector('video');
                                if (video) video.play();
                            }}
                        >
                            {/* Video Slides */}
                            {['https://drive.google.com/file/d/1HEyOZ_W5p9AUhqujRB8EIalT097VroCP/view?usp=drive_link', 'https://drive.google.com/file/d/10vqu4SPexUrdNxDzWl25a6YuaDim7JmR/view?usp=drive_link', 'https://drive.google.com/file/d/1AQH4peREdj3wSdv7uSFPtkDWbk7ORr61/view?usp=drive_link', 'https://drive.google.com/file/d/1wpa-dsP9Ow-CtPg4wCZmx9-mfEiWeX6h/view?usp=drive_link'].map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="d-flex justify-content-center align-items-center p-3"
                                        style={{
                                            transition: 'transform 0.5s ease-in-out',
                                        }}
                                    >
                                        <video
                                            ref={(el) => (videosRef.current[index] = el)}
                                            src={`./${src}`}
                                            controls
                                            autoPlay
                                            muted
                                            className="img-fluid rounded "
                                            style={{
                                                maxHeight: '300px',
                                                maxWidth: '100%',
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
