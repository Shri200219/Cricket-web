import React, { useState } from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Typography from '../components/Typography';
import { FaClock, FaVideo, FaCalendarCheck, FaPencilAlt, FaUsers, FaMoneyBillAlt } from 'react-icons/fa';
import { BiSolidPhoneCall } from "react-icons/bi";
import { SharedButton } from '../components/SharedButton';
import { useNavigate } from 'react-router';
import { ContactModal } from '../components/ContactModal';

export const FAQ = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };

  return (
    <div className="bg-black py-4">
      <Container data-aos="fade-up">
        <Typography variant={'h2'} className={'text-center fs-1 fw-bold py-3'}>
          Frequently Asked Questions
        </Typography>
        <Row className="justify-content-center py-3">
          <Col md={8} sm={12} >
            <Accordion className='bg-black'>

              <Stack direction='vertical' gap={3} >

                <Accordion.Item eventKey="0" className='border custom-accordion'>
                  <Accordion.Header className='text-dark'>
                    <FaClock className="me-3 " color='#e40707' />
                    What will be the duration of the call?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>30-45 Mins</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='border custom-accordion'>
                  <Accordion.Header className='text-dark'>
                    <FaVideo className="me-3" color='#e40707' />
                    Will it be a recorded call?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>One on One…live call.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='border custom-accordion'>
                  <Accordion.Header className='text-dark'>
                    <FaCalendarCheck className="me-3" color='#e40707' />
                    How will the call be scheduled?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>On a zoom with mutual pre-fixed time.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='border custom-accordion'>
                  <Accordion.Header className='text-dark'>
                    <BiSolidPhoneCall className="me-3" color='#e40707' />
                    Will it be a phone call?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>No. Zoom or team meet.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className='border custom-accordion'>
                  <Accordion.Header className='text-dark'>
                    <FaPencilAlt className="me-3" color='#e40707' />
                    Do I need to be prepared with anything?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>Yes. Your Questions &amp; Concerns.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className='border custom-accordion'>
                  <Accordion.Header className='text-dark'>
                    <FaUsers className="me-3" color='#e40707' />
                    Is there a Social Media Group for This Program?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>No. If you permit, we shall add you to our WhatsApp group.</Accordion.Body>
                </Accordion.Item>

              </Stack>
            </Accordion>
          </Col>
        </Row>
        <Stack direction='horizontal' className='justify-content-center'>
          <SharedButton
            className="fw-bold rounded-pill btn-md-lg glow-on-hover"
            label="Book Your One-On-One Call for free"
            onClick={handleShow}
          />
          <ContactModal show={show} onHide={handleClose} />
        </Stack>
      </Container>
    </div>
  );
};


