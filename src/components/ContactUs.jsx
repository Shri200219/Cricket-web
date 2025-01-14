import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import swal from 'sweetalert';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    YourName: '',
    KidsName: '',
    Age: '',
    ContactNo: '',
    Location: '',
    TransactionID:''
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const formToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => formToSubmit.append(key, value));


    fetch(
      "https://script.google.com/macros/s/AKfycbyM_SgAoVgB3-f-6s0aiQYPHdAxhLmKFiFRsMNM6NtaUVTq731RL030EwQda2bxyKCXQA/exec",
      {
        method: "POST",
        mode:"cors",
        body: formToSubmit,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal({
          title: 'Success!',
          text: 'Your form has been submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
      });
      // Reset the form
      setFormData({
          YourName: '',
          KidsName: '',
          Age: '',
          ContactNo: '',
          Location: '',
          TransactionID: ''
      });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="bg-light vh-100 d-flex align-items-center">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={10}>
            <div className="p-4 bg-white rounded">
              <h2 className="text-center text-primary mb-4">Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                {/* Your Name */}
                <Form.Group className="mb-3" controlId="formYourName">
                  <Form.Label className="fw-bold">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="YourName"
                    value={formData.YourName}
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
                    name="KidsName"
                    value={formData.KidsName}
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
                    name="Age"
                    value={formData.Age}
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
                    name="ContactNo"
                    value={formData.ContactNo}
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
                    name="Location"
                    value={formData.Location}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className='d-flex align-items-center justify-content-center'>
                <img src='/payment.jpg' className='h-25 w-25 d-flex align-items-center justify-content-center'/>
                </div>
                {/* Transaction ID */}
                <Form.Group className="mb-3" controlId="formLocation">
                  <Form.Label className="fw-bold">Transaction ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter TransactionID"
                    name="TransactionID"
                    value={formData.TransactionID}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {/* Submit Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                  Book
                  </Button>
                </div>
              </Form>


            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
