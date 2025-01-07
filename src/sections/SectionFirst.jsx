import React from 'react';
import { Stack,  Container } from 'react-bootstrap';
import Typography from '../components/Typography';
import { SharedButton } from '../components/SharedButton';


const SectionFirst = () => {
  return (
    <div className="bg-gradient--pale-ocean ">
      <Container fluid className='pb-5 px-0'>
      <Stack direction="vertical" gap={3} className="text-center justify-content-center align-items-center">

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
                className="btn-primary fw-bold p-3 rounded-pill mx-auto"
                label="Book Your One-On-One Call"
              />
            </Stack>
      </Container>
    </div>
  );
};

export default SectionFirst;
