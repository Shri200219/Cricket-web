import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

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
        <>

        <div className="bg-gradient--pale-ocean">
            <div className="container">
                <h4 className="text-center display-5 fw-bold ">What our Client Says</h4>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Swiper
                        pagination={{
                            dynamicBullets: true,
                          }}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            spaceBetween={30}
                            breakpoints={{
                                480: { slidesPerView: 1, spaceBetween: 30 },
                                768: { slidesPerView: 1, spaceBetween: 200 }, // Show 2 slides for medium screens
                                1024: { slidesPerView: 3, spaceBetween: 250 }, // Show 3 slides for larger screens
                            }}
                            coverflowEffect={{
                                rotate: 35,
                                stretch: 0,
                                depth: 150,
                                modifier: 1,
                                slideShadows: false,
                            }}

                            navigation={true}
                            modules={[EffectCoverflow, Navigation]}
                            className="swiper "
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiper) => {
                                const firstSlide = swiper.slides[swiper.activeIndex];
                                const video = firstSlide.querySelector('video');
                                if (video) video.play();
                            }}
                        >
                            {/* Video Slides */}
                            {['./SPMPC.mp4','./SPMPC.mp4','./SPMPC.mp4','./SPMPC.mp4'].map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="d-flex justify-content-center align-items-center transformation"
                                        
                                    >
                                        <video
                                            ref={(el) => (videosRef.current[index] = el)}
                                            src={`./${src}`}
                                            loop
                                            autoPlay
                                            className="rounded h-12 px-5"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            </div>

        </>
    );
};

export default Testimonial;
