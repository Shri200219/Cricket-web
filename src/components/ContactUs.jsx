import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Typography from './Typography'
import { SharedButton } from './SharedButton'
import { Container, Row, Col, Stack, Image } from 'react-bootstrap';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    YourName: '',
    KidsName: '',
    Age: '',
    ContactNo: '',
    Location: '',
    TransactionID: ''
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
        mode: "cors",
        body: formToSubmit,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: 'Success!',
          text: 'Your form has been submitted successfully!',
          icon: 'success',
          button : 'OK'
        }).then(()=>{ navigate('/');} );
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

    <Container>
      <Stack direction='horizontal' className='justify-content-center align-items-center mt-3'>
        <Form onSubmit={handleSubmit} className='shadow w-md-50 w-sm-75 px-5 py-3'>
          <Typography variant={'h2'} className='text-center fw-bold text-primary'> Contact Us</Typography>
          <Stack direction='vertical' gap={3}>
            {/* Your Name */}
            <Form.Group controlId="formYourName">
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
            <Form.Group controlId="formKidsName">
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
            <Form.Group controlId="formAge">
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
            <Form.Group controlId="formContactNo">
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
            <Form.Group controlId="formLocation">
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

            <Stack direction='horizontal' className='align-items-center justify-content-center'>
              <Image src='/payment.jpg' fluid className='w-sm-75 w-md-50' thumbnail />
            </Stack>
            {/* Transaction ID */}
            <Form.Group controlId="formLocation">
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
            <SharedButton
              variant="primary"
              size="lg"
              type={'submit'}
              className="fw-bold rounded"
              label="Book "
            />

          </Stack>
        </Form>
      </Stack>
    </Container>
  );
};

export default ContactUs;
