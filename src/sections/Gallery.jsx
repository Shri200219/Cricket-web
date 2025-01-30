import React, { useState } from 'react'
import { Row, Col, Container, Stack, Tab, Tabs } from 'react-bootstrap';
import Typography from '../components/Typography';
const Gallery = () => {
  const [activeTab, setActiveTab] = useState('media');

  const handleImageClick = (imageUrl) => {
    // Open the image in a new tab
    window.open(imageUrl, '_blank');
  };
  return (

    <>
      <Container className='py-3 gallery' data-aos="fade-up">
        <Typography variant={'h2'} className={'text-center text-dark fs-1 fw-bold'} >
          Gallery of Memories
        </Typography>

        <Tabs defaultActiveKey="media" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} id="uncontrolled-tab-example" className='justify-content-center border-bottom-0'>
          <Tab eventKey="media" title="Media Highlights" >
            <Row>
              <Stack direction='horizontal' className='justify-content-center '>
                <Col md={10} sm={12} lg={10}>
                  <div className='image-container'>

                    <div className='colunm'>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-14.jpg' alt='mediaImage-14' className='img-fluid w-100' onClick={() => handleImageClick('images/mediaImage-14.jpg')} />
                      </div>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-2.jpg' alt='mediaImage-2' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-2.jpg')} />
                      </div>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-4.jpg' alt='mediaImage-4' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-4.jpg')} />
                      </div>
                    </div>

                    <div className='colunm'>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-6.jpg' alt='mediaImage-6' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-6.jpg')} />
                      </div>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-5.jpg' alt='mediaImage-5' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-5.jpg')} />
                      </div>
                    </div>

                    <div className='colunm'>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-12.jpg' alt='mediaImage-12' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-12.jpg')} />
                      </div>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-7.jpg' alt='mediaImage-7' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-7.jpg')} />
                      </div>
                       <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-11.jpg' alt='mediaImage-11' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-11.jpg')} />
                      </div>
                    </div>

                    <div className='colunm'>
                      <div className='photo'>
                        <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-8.jpg' alt='mediaImage-8' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/mediaImage-8.jpg')} />
                      </div>
                    </div>

                  </div>
                </Col>
              </Stack>
            </Row>
          </Tab>

          <Tab eventKey="memories" title="Memories">
          
          <Stack direction='horizontal' className='justify-content-center'>
            <Col md={10} sm={12} lg={10}>
              <div className='image-container'>

                <div className='colunm'>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-1.jpg' alt='image-1' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-1.jpg')} />
                  </div>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-18.jpeg' alt='image-18' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-18.jpg')} />
                  </div> 
                </div>

                <div className='colunm'>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-6.jpg' alt='image-6' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-6.jpg')} />
                  </div>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-5.jpg' alt='image-5' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-5.jpg')} />
                  </div>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-7.jpg' alt='image-7' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-7.jpg')} />
                  </div>
                </div>

                <div className='colunm'>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-12.jpg' alt='image-12' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-12.jpg')} />
                  </div>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-15.jpg' alt='image-15' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-15.jpg')} />
                  </div> 
                   <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-17.jpeg' alt='image-17' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-17.jpg')} />
                  </div> 
                </div>

                <div className='colunm'>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-8.jpg' alt='image-8' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-8.jpg')} />
                  </div>
                  <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-13.jpg' alt='image-13' className='img-fluid w-100' onClick={() => handleImageClick('https://cricket-web.s3.us-east-1.amazonaws.com/images/image-13.jpg')} />
                  </div>
                   <div className='photo'>
                    <img src='https://cricket-web.s3.us-east-1.amazonaws.com/images/image-9.jpg' alt='image-9' className='img-fluid w-100' onClick={() => handleImageClick('images/image-9.jpg')} />
                  </div> 
                </div>
              </div>
            </Col>
          </Stack>
          </Tab>
        </Tabs>
      </Container>
    </>
  )
}

export default Gallery;