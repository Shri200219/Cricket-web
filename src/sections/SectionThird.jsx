import React from 'react'
import Typography from '../components/Typography'
import { Row,Col,Stack,Container } from 'react-bootstrap'

const SectionThird = () => {
  return (
    <>
    <div className=' py-5'>
    <Container>
        <Row>
            <Col sm={12} md={6}>
                <Typography variant={'h2'} className={'fw-bold fs-1'}> 
                 This free one on one call is for you if:
                </Typography>
                <Stack direction="vertical" gap={0} className='justify-content-start align-items-start '>
                <Typography variant={'p'} className='fs-4'>
                
           You believe your kid has cricketing potential.
                </Typography>
                <Typography variant={'p'} className='fs-4'>
               You really want to support him/her in his/her pursuit of this crazy life dream.
                </Typography>
                <Typography variant={'p'} className='fs-4'>
                You want your kid to perform to his potential &amp; beyond.
                </Typography>
                <Typography variant={'p'} className='fs-4'>
                You do not want to see your kid wilt under pressure in crunch situations.
                </Typography>

                <Typography variant={'p'} className='fs-4'>
                You want your kid to believe in process
                </Typography>

                <Typography variant={'p'} className='fs-4'>
                You want your kid to have bigger self belief.
                </Typography>

                <Typography variant={'p'} className='fs-4'>
                You want your kid to have stronger self image.
                </Typography>

                <Typography variant={'p'} className='fs-4'>
                You want your kid to give his/her 100% to this dream.
                </Typography>

                <Typography variant={'p'} className='fs-4'>
                You want your aspiring cricketer to build strong foundation to his cricketing career.
                </Typography>

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

export default SectionThird