import { Card, Carousel } from "react-bootstrap"

export const Testimonial = () => {
    return(
        <>
       <Carousel data-bs-theme="dark" className='mb-5' controls={false} interval={8000} pause={true}>
       <Carousel.Item>
          <Container>
            <Row className='g-4'>
              <Col md={4} sm={12}>
                <Card>
                    <Card.Img></Card.Img>
                    
                </Card>
              </Col>
              <Col md={4} sm={12}>
               
              </Col>
              <Col md={4} sm={12}>
             
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        </Carousel>
        </>
    )
}