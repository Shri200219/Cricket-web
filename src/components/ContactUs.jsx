import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    kidsName: '',
    age: '',
    contactNo: '',
    location: '',
  });
  const [showModal, setShowModal] = useState(false); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    setShowModal(true);
  };


  const handleModalClose = () => {
    setShowModal(false); 
  };


  return (
    <div className="bg-light vh-100 d-flex align-items-center">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={10}>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-center text-primary mb-4">Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                {/* Your Name */}
                <Form.Group className="mb-3" controlId="formYourName">
                  <Form.Label className="fw-bold">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Kid's Name */}
                <Form.Group className="mb-3" controlId="formKidsName">
                  <Form.Label className="fw-bold">Kid's Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter kid's name"
                    name="kidsName"
                    value={formData.kidsName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Age */}
                <Form.Group className="mb-3" controlId="formAge">
                  <Form.Label className="fw-bold">Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    />
                    </Form.Group>
                  
                {/* Contact No */}
                <Form.Group className="mb-3" controlId="formContactNo">
                  <Form.Label className="fw-bold">Contact No</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter contact number"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit contact number"
                  />
                </Form.Group>

                {/* Location */}
                <Form.Group className="mb-3" controlId="formLocation">
                  <Form.Label className="fw-bold">Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* File Upload *
                  <Form.Group controlId="formFile" className="mb-4">
                  <Form.Label className="fw-bold">Screenshot of Payment</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                  /}
                

                {/* Submit Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleModalClose} centered>

      <Modal.Body>
      <p className='text-center fw-bold'>Scan this for Payment </p>
      <img src='./payment.jpg' className='img-fluid p-5' />
        <Form.Group controlId="formFile" className="mb-4">
        <Form.Label className="fw-bold">Screenshot of Payment</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer className='d-flex'>
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ContactUs;
