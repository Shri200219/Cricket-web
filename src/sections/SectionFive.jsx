import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Typography from '../components/Typography';
import { FaClock, FaVideo, FaCalendarCheck, FaPencilAlt, FaUsers, FaMoneyBillAlt } from 'react-icons/fa';
import { BiSolidPhoneCall } from "react-icons/bi";
import { SharedButton } from '../components/SharedButton';
import { useNavigate } from 'react-router';

const SectionFive = () => {

  const navigate = useNavigate();
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };
  
  return (
    <div className="bg-gradient--pale-ocean">
      <Container>
        <Typography variant={'h2'} className={'text-center fs-1 fw-bold py-3'}>
          Frequently Asked Questions
        </Typography>
        <Row className="justify-content-center py-3">
          <Col md={8} sm={12} >
            <Accordion className='bg-gradient--pale-ocean'>

              <Stack direction='vertical' gap={3} >

                <Accordion.Item eventKey="0" className='border'>
                  <Accordion.Header>
                    <FaClock className="me-3 " color='#6ed8f0' />
                    What will be the duration of the call?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>30-45 Mins</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='border'>
                  <Accordion.Header>
                    <FaVideo className="me-3" color='#6ed8f0' />
                    Will it be a recorded call?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>One on One…live call.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='border'>
                  <Accordion.Header>
                    <FaCalendarCheck className="me-3" color='#6ed8f0' />
                    How will the call be scheduled?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>On a zoom with mutual pre-fixed time.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='border'>
                  <Accordion.Header>
                    <BiSolidPhoneCall className="me-3" color='#6ed8f0' />
                    Will it be a phone call?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>No. Zoom or team meet.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className='border'>
                  <Accordion.Header>
                    <FaPencilAlt className="me-3" color='#6ed8f0' />
                    Do I need to be prepared with anything?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>Yes. Your Questions &amp; Concerns.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className='border'>
                  <Accordion.Header>
                    <FaUsers className="me-3" color='#6ed8f0' />
                    Is there a Social Media Group for This Program?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>No. If you permit, we shall add you to our WhatsApp group.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className='border'>
                  <Accordion.Header>
                    <FaMoneyBillAlt className="me-3" color='#6ed8f0' />
                    What is the Refund Policy?
                  </Accordion.Header>
                  <Accordion.Body className='border-top'>No. The fees of 499 paid for this session is non-refundable.</Accordion.Body>
                </Accordion.Item>
              </Stack>
            </Accordion>
          </Col>
        </Row>
        <Row>
        <Col className='d-flex justify-content-center align-items-center'>
        <SharedButton
    variant="primary"
    size="lg"
    className="btn-primary fw-bold p-3 rounded-pill mx-auto  justify-content-center align-items-center"
    label="Book Your One-On-One Call"
    onClick={handleNavigateToContactUs}
    />
    </Col>
    </Row>
      </Container>
    </div>
  );
};


export default SectionFive