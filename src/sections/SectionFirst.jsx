import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';
import Typography from '../components/Typography';
import { SharedButton } from '../components/SharedButton';


const SectionFirst = () => {
  return (
    <>
    
    <div className='bg-gradient--pale-ocean py-5'>
                <Container>
                    <Row className='g-4'>
                        <Col sm={12} md={6}>
                            <Stack direction="vertical" gap={3} className='justify-content-center align-items-end '>
                                <Typography variant={'h1'} className={'fs-1 fw-bold text-center'}>
                                This is for you if you are a parent to a young aspiring cricketer
                                </Typography>
                                <Typography variant={'p'} className='fs-5'>Empower your young cricketer to build a stronger self-image and unshakable self-belief with my proven 7-session program—designed to equip them for
peak performance on the cricket field.</Typography>
                                <SharedButton variant={'primary'} size={'lg'} className={'btn-primary fw-bold p-3 rounded-pill mx-auto'} label={'Book Your One-On-One Call'} />
                            </Stack>
                        </Col>
                        <Col sm={12} md={6}>
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" className='w-100 h-100' title="YouTube video" allowfullscreen />
                        </Col>
                    </Row>
                </Container>
            </div>
    
    </>
  )
}

export default SectionFirst;