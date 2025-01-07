import React from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap';
import Typography from '../components/Typography';
const Gallery = () => {

    const handleImageClick = (imageUrl) => {
      // Open the image in a new tab
      window.open(imageUrl, '_blank');
    };
  return (
    
    <>
      <Container className='py-3'>
        <Typography variant={'h2'} className={'text-center fs-1 fw-bold'} >
          Gallery of Memories
        </Typography>

        
        <Row>
          <Stack direction='horizontal' className='justify-content-center mt-3'>
            <Col md={10} sm={12} lg={10}>
              <div className='image-container'>
                <div className='colunm'>
                  <div className='photo'>
                    <img src='/src/assets/images/img-14.jpg' alt='image-6' className='img-fluid w-100' onClick={() => handleImageClick('/src/assets/images/img-14.jpg')}/>
                  </div>
                  <div className='photo'>
                    <img src='/src/assets/images/img-2.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-2.jpg')}/>
                  </div>
                  <div className='photo'>
                    <img src='/src/assets/images/img-4.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-4.jpg')}/>
                  </div>
                  {/* <div className='photo'>
                  <img src='/src/assets/images/img-3.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-3.jpg')} />
                </div> */}
                  {/* <div className='photo'>
                  <img src='/src/assets/images/img-1.jpg' alt='image-6' className='shadow img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-1.jpg')} />
                </div> */}
                </div>

                <div className='colunm'>
                  <div className='photo'>
                    <img src='/src/assets/images/img-6.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-6.jpg')}/>
                  </div>
                  <div className='photo'>
                    <img src='/src/assets/images/img-5.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-5.jpg')}/>
                  </div>
                  {/* <div className='photo'>
        <img src='/src/assets/images/img-10.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-10.jpg')} />
        </div> */}
                </div>

                <div className='colunm'>
                  <div className='photo'>
                    <img src='/src/assets/images/img-12.jpg' alt='image-6' className='img-fluid w-100' onClick={() => handleImageClick('/src/assets/images/img-12.jpg')}/>
                  </div>
                  <div className='photo'>
                    <img src='/src/assets/images/img-7.jpg' alt='image-6' className='img-fluid w-100' onClick={() => handleImageClick('/src/assets/images/img-7.jpg')}/>
                  </div> <div className='photo'>
                    <img src='/src/assets/images/img-11.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-11.jpg')} />
                  </div>
                </div>


                <div className='colunm'>
                  <div className='photo'>
                    <img src='/src/assets/images/img-8.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-8.jpg')}/>
                  </div>
                  {/* <div className='photo'>
                  <img src='/src/assets/images/img-2.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-2.jpg')} />
                </div>
               */}
                  {/*<div className='photo'>
        <img src='/src/assets/images/img-7.jpg' alt='image-6' className='img-fluid w-100'  onClick={() => handleImageClick('/src/assets/images/img-7.jpg')}/>
        </div> */}
                </div>
              </div>
            </Col>
          </Stack>
        </Row>

      </Container>
    </>
  )
}

export default Gallery;