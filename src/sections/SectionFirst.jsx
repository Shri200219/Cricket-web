import React from 'react';
import { Stack,  Container } from 'react-bootstrap';
import Typography from '../components/Typography';
import { SharedButton } from '../components/SharedButton';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
const SectionFirst = () => {
  const navigate = useNavigate();
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };
   
  return (
    <div className="bg-gradient--pale-ocean ">
      <Container fluid className='pb-5 px-0'>
         {/* Carousel Section */}
       <div className="video-container">
          <video
            src="./IntroVideo.mp4"
            autoPlay
            muted
            fluid='true'
            className="video-background"
            onClick={(e) => {
              // Check if the browser supports webkitRequestFullscreen (Chrome, Safari, Opera)
              if (e.target.webkitRequestFullscreen) {
                  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                      // Enter fullscreen mode
                      e.target.webkitRequestFullscreen();
                      e.target.muted = false;
                  } else {
                      // Exit fullscreen mode
                      if (document.exitFullscreen) {
                          document.exitFullscreen();
                          e.target.muted = true;
                      } else if (document.webkitExitFullscreen) {
                          document.webkitExitFullscreen();
                          e.target.muted = true;
                      }
                  }
              }
            }}
          />
        </div>
      <Stack direction="vertical" gap={3} className="text-center justify-content-center align-items-center mt-2" data-aos="fade-up">
          {/* Text Content */}
              <Typography variant="h1" className="fs-1 mb-0 fw-bold text-center ">
                This is for you if you are a parent to a young aspiring cricketer
              </Typography>
              <Typography  className="lh-base mb-0 w-md-50 w-sm-100 fs-3 text-center ">
                Empower your young cricketer to build a stronger self-image and unshakable self-belief with my proven 7-session program—designed to equip them for peak performance on the cricket field.
              </Typography>
                
                   <SharedButton
                   size="lg"
                   className="fw-bold rounded-pill mx-auto glow-on-hover"
                   label="Book Your One-On-One Call for ₹ 499"
                   onClick={handleNavigateToContactUs}
                   />
                   
            </Stack>
      </Container>
    </div>
  );
};

export default SectionFirst;
