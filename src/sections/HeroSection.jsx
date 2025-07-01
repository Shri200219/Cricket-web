import React, { useEffect, useRef, useState } from 'react';
import { Stack, Container, Row, Col } from 'react-bootstrap';
import Typography from '../components/Typography';
import { SharedButton } from '../components/SharedButton';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ContactModal } from '../components/ContactModal';
import { Autoplay } from 'swiper/modules';

export const HeroSection = () => {
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };



  return (
    <div className="bg-black pb-5">
      <Container fluid data-aos="fade-up">
        <Row className='g-3'>
          <Col md={12} lg={12} sm={12} className="bg-danger">
            <Typography variant="h2" className=" mb-0 fw-medium text-center fs-md-1 py-3">
              This is for you if you are a parents of young aspiring cricketers!
            </Typography>
          </Col>
          <Col md={6} sm={12} lg={6}>
            <Stack direction="vertical" gap={5} className="text-center justify-content-center h-100  align-items-center" slides-aos="fade-up">
              <Typography className="lh-base mb-0 w-md-75 text-center fs-4">
                Empower Your Young Cricketer Reach Their Full Potential!
                Build unshakable self-belief & a winning mindset with my proven 7-session program!
              </Typography>
              <SharedButton
                className="fw-bold rounded-pill mx-auto glow-on-hover btn-md-lg"
                label="Book Your One-On-One Call for free"
                onClick={handleShow}
              />
              <ContactModal show={show} onHide={handleClose} />
            </Stack>
          </Col>
          <Col md={6} sm={12} lg={6}>
            <Stack direction='horizontal' className='align-item-center h-100 px-3 py-4'>
              <video
                src="/videos/introvideo.mp4"
                width={600}
                height={600}
                autoPlay
                muted={muted}
                ref={videoRef}
                disablePictureInPicture
                disableRemotePlayback
                controls
                controlsList="nodownload noremoteplayback noplaybackrate"
                poster='/images/posterImg.png'
                fluid='true'
                className="img-fluid"
                preload='metaslides'
                onClick={(e) => {
                  e.preventDefault();
                  setMuted(!muted);
                }}
              />
            </Stack>
          </Col>

        </Row>
      </Container>
    </div>
  );
};



