import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    const videosRef = useRef([]);

    const videoUrls =[
        'videos/video-1.mp4',
        'videos/video-2.mp4',
        'videos/video-3.mp4',
        'videos/video-4.mp4',
        'videos/video-5.mp4',
    ]

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
                                1024: { slidesPerView: 3, spaceBetween: 250 }, // Show 3 slides for larger screens
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
                            {videoUrls.map((src, index) => (
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
