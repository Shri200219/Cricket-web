import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const SectionFive = () => {
  return (
    <>
    <div className='bg-gradient--pale-ocean'>
    <Container>
    <h1>
    Frequently Asked Questions
    </h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What will be the duration of the call?</Accordion.Header>
        <Accordion.Body>
        30-45 Mins
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Will it be a recorded call?</Accordion.Header>
        <Accordion.Body>
        One on One…live call.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
      <Accordion.Header>How will the call be scheduled?</Accordion.Header>
      <Accordion.Body>
      On a zoom with mutual pre-fixed time.
      </Accordion.Body>
    </Accordion.Item>


    <Accordion.Item eventKey="3">
      <Accordion.Header>Will it be a phone call?</Accordion.Header>
      <Accordion.Body>
      No. Zoom or team meet
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
    <Accordion.Header>Do I need to be prepared with anything?</Accordion.Header>
    <Accordion.Body>
    Yes. Your Questions &amp; Concerns.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
  <Accordion.Header>Is there a Social Media Group for This Program ?</Accordion.Header>
  <Accordion.Body>
  No. If you permit. We shall add you to our whatsapp group.
  </Accordion.Body>
</Accordion.Item>


<Accordion.Item eventKey="6">
  <Accordion.Header>What is the Refund Policy?</Accordion.Header>
  <Accordion.Body>
  No. the fees of 499 paid for this session is non refundable.
  </Accordion.Body>
</Accordion.Item>

    </Accordion>
    </Container>
    </div>


    </>
  )
}

export default SectionFive