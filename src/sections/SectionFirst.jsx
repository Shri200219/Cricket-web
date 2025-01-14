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
            src="./dummy.mp4"
            autoPlay
            loop
            muted
            fluid='true'
            className="w-100 h-100"
          />
        </div>
      <Stack direction="vertical" gap={3} className="text-center justify-content-center align-items-center mt-2" data-aos="fade-up">
          {/* Text Content */}
              <Typography variant="h1" className="fs-1 fw-bold text-center ">
                This is for you if you are a parent to a young aspiring cricketer
              </Typography>
              <Typography  className="lh-base mb-0 w-md-50 w-sm-100 text-center ">
                Empower your young cricketer to build a stronger self-image and unshakable self-belief with my proven 7-session program—designed to equip them for peak performance on the cricket field.
              </Typography>
                
                   <SharedButton
                   variant="primary"
                   size="lg"
                   className="fw-bold rounded-pill mx-auto"
                   label="Book Your One-On-One Call"
                   onClick={handleNavigateToContactUs}
                   />
                   
            </Stack>
      </Container>
    </div>
  );
};

export default SectionFirst;
