import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Typography from '../components/Typography';

const Testimonial = () => {
    const videosRef = useRef([]);

    const videoUrls =[
        'https://cricket-web.s3.us-east-1.amazonaws.com/src_videos/video-5.mp4',
        'https://cricket-web.s3.us-east-1.amazonaws.com/src_videos/video-2.mp4',
        'https://cricket-web.s3.us-east-1.amazonaws.com/src_videos/video-3.mp4',
        'https://cricket-web.s3.us-east-1.amazonaws.com/src_videos/video-4.mp4',
        'https://cricket-web.s3.us-east-1.amazonaws.com/src_videos/video-5.mp4',
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
            video.load();
        }
    }; 
    
    
    return (
        <>
            <div className="py-5">
                <Container data-aos="fade-up">
                    <Typography variant={'h2'} className={'fs-1 text-center fw-bold'} >What our Client Says</Typography>
                    
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
                                    1024: { slidesPerView: 3, spaceBetween: 200 }, // Show 3 slides for larger screens
                                }}
                                coverflowEffect={{
                                    rotate: 30,
                                    stretch: 0,
                                    depth: 150,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                navigation={true}
                                modules={[EffectCoverflow, Navigation]}
                                className="swiper mt-5"
                                onSlideChange={handleSlideChange}
                            >
                                {/* Video Slides */}
                                {videoUrls.map((src, index) => (
                                    <SwiperSlide key={index}>
                                            <Stack direction='horizontal' className=' justify-content-center align-items-center transformation'>
                                            <video
                                                ref={(el) => (videosRef.current[index] = el)}
                                                src={src}
                                                autoPlay
                                                controls
                                                muted
                                                className="rounded h-12 px-5 mobile-height"
                                            />
                                        </Stack>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        
                </Container>
            </div>
        </>
    );
};

export default Testimonial;
