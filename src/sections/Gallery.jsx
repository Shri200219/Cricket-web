import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
const Gallery = () => {
  return (
    <>

    <Container>
    <Row className="justify-content-center">
      <Col md={4} xs={6} className="mb-4">
        <img src='/src/assets/images/1.jpg' alt='image-1' className='img-fluid w-100' />
      </Col>
      <Col md={4} xs={6} className="mb-4">
      <img src='/src/assets/images/7.jpg' alt='image-7' className='img-fluid w-100' />

      </Col>
      <Col md={4} xs={6} className="mb-4">
      <img src='/src/assets/images/6.jpg' alt='image-6' className='img-fluid w-100' />
      </Col>
      <Col md={4} xs={6} className="mb-4">
      <img src='/src/assets/images/4.jpg' alt='image-4' className='img-fluid w-100' />
      </Col>
      <Col md={4} xs={6} className="mb-4">
      <img src='/src/assets/images/5.jpg' alt='image-5' className='img-fluid w-100' />
      </Col>
      <Col md={4} xs={6} className="mb-4">
      <img src='/src/assets/images/3.jpg' alt='image-3' className='img-fluid w-100' />
      </Col>
    </Row>
  </Container>
    </>
  )
}

export default Gallery;