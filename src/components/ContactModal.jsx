import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { SharedButton } from './SharedButton'
import { InputFields } from './InputFields';
import {   useNavigate } from 'react-router';

export const ContactModal = ({ show ,onHide}) => {
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
            "https://script.google.com/macros/s/AKfycbwY9JbZK0oCn8Qkfz8w89Ex-pTQ3M0rJ85Y_xt8YohNIR2lGepJLt6PT8m8JQ69r1Tx/exec",
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
                    button: 'OK'
                }).then(() => { navigate('/thank-you'); });
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
        <>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='text-dark'>Fill your Details Below</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='px-2'>
                        {/* Your Name */}
                        <InputFields
                            type={'text'}
                            label={'Your Name'}
                            placeholder={'Enter Your Name'}
                            name={'YourName'}
                            className={'text-dark'}
                            value={formData.YourName}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Kid's Name */}
                        <InputFields
                            type={'text'}
                            label={"Kid's Name"}
                            placeholder={"Enter kid's name"}
                            name={'KidsName'}
                            className={'text-dark'}
                            value={formData.KidsName}
                            onChange={handleChange}
                            required={true}
                        />

                        {/* Age */}
                        <InputFields
                            type={'number'}
                            label={'Age'}
                            placeholder={"Enter age"}
                            name={'Age'}
                            className={'text-dark'}
                            value={formData.Age}
                            onChange={handleChange}
                            required={true}
                            min={"1"}
                        />

                        {/* Contact No */}
                        <InputFields
                            type={'tel'}
                            label={'Contact No'}
                            placeholder={"Enter contact number"}
                            name={'ContactNo'}
                            className={'text-dark'}
                            value={formData.ContactNo}
                            onChange={handleChange}
                            required={true}
                            min={"1"}
                            pattern={"[0-9]{10}"}
                            title={"Enter a valid 10-digit contact number"}
                        />


                        {/* Location */}
                        <InputFields
                            type={'text'}
                            label={'Location'}
                            placeholder={"Enter location"}
                            name={'Location'}
                            className={'text-dark'}
                            value={formData.Location}
                            onChange={handleChange}
                            required={true}
                        />
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <SharedButton label={'Submit'} onClick={handleSubmit} className={'mx-auto'} />
                </Modal.Footer>
            </Modal>
        </>
    )
}
