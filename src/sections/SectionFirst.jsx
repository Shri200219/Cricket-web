import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Typography from '../components/Typography';

const SectionFirst = () => {
    return (
        <>
            <div className='bg-gradient--pale-ocean py-5'>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Stack direction="vertical" gap={3} className='justify-content-center align-items-end '>
                            <Typography variant={'h1'} className={'fw-bold text-center '}> 
                            6 steps strategy to build 6 figure coaching business with my LOC method
                            </Typography>
                                <p className='fs-20'>In this coffee call I will share my battle-tested, 6-step  strategy to build a successful coaching business, by selling premium high-ticket courses & without burning money on ad spend.</p>

                                <Button variant="primary" className='btn-primary fw-bold p-3 rounded-pill mx-auto' size='lg' >Book Your Coffee</Button>

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