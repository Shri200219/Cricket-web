import React from 'react';
import Typography from '../components/Typography';
import { SharedButton } from '../components/SharedButton';
import { useNavigate } from 'react-router';
import { FaCheckCircle } from 'react-icons/fa'; // Import icons for highlights
import { Container, Row, Col, Stack, Image } from 'react-bootstrap';
import { CheckIcon } from '../components/icons/CheckIcon';

const Strategy = () => {
  const navigate = useNavigate();
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };

  return (
    <>
      <div className="bg-gradient--pale-ocean">
        <Container className="my-5" data-aos="fade-up">
          {/* Title */}
          <Typography variant="h2" className="fs-1 fw-bold text-center">
            One-On-One Call: <span className='text-dark-primary fs-1'>7-Session Strategy </span>for Cricketers' Mental Strength
          </Typography>

          {/* Key Topics Section */}
          <Typography variant="h2" className="fw-bold text-center mb-4">
            Key Topics Covered:
          </Typography>

          {/* <Row>
            <Col md={6} sm={12}>
              <Stack direction='vertical' gap={3}>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'>  Understanding Sporting Success and attributes there of.</p>
                </Stack>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'> Nuances of Parental Communication: Verbal &amp; Nonverbal.</p>
                </Stack>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'> Key words that kill/build confidence of anyone.</p>
                </Stack>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'> How we as parents contribute to mental weakness of our child?</p>
                </Stack>
               <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'>   Concept of Self Image &amp; Self Belief.</p>
                </Stack> 
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'>The parent-coach relationship: An important factor for the child.</p>
                </Stack>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'>What should I do about it as a parent?</p>
                </Stack>
                </Stack>
            </Col>

            <Col md={6} sm={12}>
              <Stack direction='vertical' gap={3}>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'>  What is Psychological Build-up? The basic Psychological Build-up process?</p>
                </Stack>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'> What is mental toughness &amp; what role it plays in overall sporting success?</p>
                </Stack>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'> Understanding the world of today’s kids and how it differs from ours.</p>
                </Stack>
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'> Key nonverbals that are detrimental for confidence of a sporting child.</p>
                </Stack>
               
                <Stack direction='horizontal' gap={3} className='p-2'>
                  <CheckIcon /><p className='mb-0'> Helping the child accept, embrace &amp; correct non-performances.</p>
                </Stack>
            </Stack>
          </Col>
        </Row>  */}


 
          <div className='grid-container'>
            <Stack direction='vertical' gap={3} className='justify-content-center h-100' data-aos='zoom-in'>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'>  Understanding Sporting Success and attributes there of.</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'> Nuances of Parental Communication: Verbal &amp; Nonverbal.</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'> Key words that kill/build confidence of anyone.</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'> How we as parents contribute to mental weakness of our child?</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'>   Concept of Self Image &amp; Self Belief.</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'>The parent-coach relationship: An important factor for the child.</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'>What should I do about it as a parent?</p>
              </Stack>
              <Stack direction='horizontal' className='align-items-center justify-content-center mt-5'>
                <Image src='img-1.png' className='w-75 ' fluid rounded data-aos='flip-down' />
              </Stack>

            </Stack>

            <Stack direction='vertical' gap={3} className='colunm-reverse' data-aos='zoom-in'>
              <Stack direction='horizontal' className='align-items-center mb-5 justify-content-center'>
                <Image src='img-2.png' className='w-75 ' fluid rounded data-aos='flip-down' />
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'>  What is Psychological Build-up? The basic Psychological Build-up process?</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'> What is mental toughness &amp; what role it plays in overall sporting success?</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'> Understanding the world of today’s kids and how it differs from ours.</p>
              </Stack>
              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'> Key nonverbals that are detrimental for confidence of a sporting child.</p>
              </Stack>

              <Stack direction='horizontal' gap={3} className='p-2'>
                <CheckIcon /><p className='mb-0 fs-6'> Helping the child accept, embrace &amp; correct non-performances.</p>
              </Stack>
            </Stack>
          </div> 




          {/* Call-to-Action Button */}
          <Stack direction='horizontal' className='justify-content-center mt-4'>
            <SharedButton               
              size="lg"
              className="fw-bold rounded-pill mx-auto glow-on-hover"
              label="Book Your One-On-One Call for  ₹ 499"
              onClick={handleNavigateToContactUs}
            />
          </Stack>
        </Container>
      </div >
    </>
  );
};

export default Strategy;
