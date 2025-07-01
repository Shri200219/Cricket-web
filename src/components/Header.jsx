import React from 'react'
import { useState , useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';
import { SharedButton } from './SharedButton';
import { ContactModal } from './ContactModal';

export const Header = ({scrollToRefs}) => {
  const navigate = useNavigate();
  const [isSticky, setSticky] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Reference is not defined or current is null:', ref);  // Debugging output
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigateToContactUs = () => {
    // navigate('/contact-us');
    setShow(!show);
  };
  
  return (
    <>
      <Navbar expand="lg"
      data-bs-theme={`${isSticky?"dark":''}`}
      className={`position-fixed z-3 w-100  ${isSticky ? "bg-dark opacity-md-75": 'bg-transparent bg-sm-dark'}`} 
       >
        <Container fluid>
          <Navbar.Brand href="#home" ><img src='logo.png' className='img-fluid w-sm-75'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='mx-3 fw-semibold text-center' href="/">Home</Nav.Link>
              <Nav.Link className='mx-3 fw-semibold text-center' onClick={() => scrollToRef(scrollToRefs.galleryRef)}>Gallery</Nav.Link>
              <Nav.Link className='mx-3 fw-semibold text-center' onClick={() => scrollToRef(scrollToRefs.testimonialRef)}>Testimonials</Nav.Link>
              <Nav.Link className='mx-3 fw-semibold text-center' onClick={() => scrollToRef(scrollToRefs.aboutRef)}>About</Nav.Link>
              <SharedButton
                size="sm"
                className="fw-bold px-3 rounded-pill mx-auto glow-on-hover"
                label="Join Now"
                onClick={handleShow}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
        <ContactModal show={show} onHide={handleClose}/>
      </Navbar>
    </>
  )
}
 