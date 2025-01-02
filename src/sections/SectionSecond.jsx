import React from 'react'
import Typography from '../components/Typography'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import { GiBrain, GiBrokenHeart, GiCricketBat } from 'react-icons/gi'
import { FaHandsHelping } from 'react-icons/fa'
import { AiOutlineMessage } from 'react-icons/ai'

const SectionSecond = () => {
    return (
        <>
            <div className='bg-gradient--pale-ocean py-5'>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Typography variant={'h2'} className={'fw-bold fs-1'}>
                                In this one on one call you will be able to understand
                            </Typography>
                            <Stack direction="vertical" gap={2} className='mt-4'>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'><GiCricketBat size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'>Factors That Drive a Young Cricketer’s Performance</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'> <GiBrain size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'> Mental Toughness: The Key to Thriving in Cricket</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3' > <GiBrokenHeart size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'>Why Aspiring Cricketers Struggle to Reach Their Potential</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'><FaHandsHelping size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'>Your Role as a Parent in Their Cricketing Journey</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'><AiOutlineMessage size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'> The Do’s and Don’ts of Parent-Child Communication</Typography>
                                </Stack>

                            </Stack>
                        </Col>
                        <Col sm={12} md={6}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SectionSecond