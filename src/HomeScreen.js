import React from 'react';
import { Carousel, Nav, Navbar, Container, Button, NavDropdown, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './HomeScreen.css'; // Custom CSS for additional styling
import logoImage from './images/logo.jpeg'; // Replace with the actual path to your logo image
import sofaImage from './images/modular.gif';
import sofaImage1 from './images/sofa1.gif';
import sofaImage2 from './images/sofa2.gif';
import DeskImage from './images/desk1.gif';


import aboutImage1 from './images/comp1.jpg';
import aboutImage2 from './images/dine1.jpeg';

const HomeScreen = () => {
  return (
    <>

<Navbar bg="light" expand="lg" className="py-3">
  <Container>
    <Navbar.Brand href="/">
      <img
        src={logoImage}
        width="150" // Adjust as needed
        height="auto"
        className="d-inline-block align-top"
        alt="University Furnishings Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto align-items-lg-center"> {/* Adjust alignment */}
        <Nav.Link href="/" className="d-lg-flex align-items-lg-center">
          <Button variant="outline-light" className="ms-lg-2">Home</Button>
        </Nav.Link>
        <NavDropdown
          title={<span className="text-light">Categories</span>}
          id="basic-nav-dropdown"
          className="outline-light-dropdown d-lg-flex align-items-lg-center" // Adjust alignment
        >
           <NavDropdown.Item href="/SofaPage">Sofa</NavDropdown.Item>
              <NavDropdown.Item href="/TablePage">
                Table
              </NavDropdown.Item>
              <NavDropdown.Item href="/ChairPage">Chair</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/All">
                All Furnitures
              </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/About" className="d-lg-flex align-items-lg-center">
          <Button variant="outline-light" className="ms-lg-2">About Us</Button>
        </Nav.Link>
        <Nav.Link href="/Contact" className="d-lg-flex align-items-lg-center">
          <Button variant="outline-light" className="ms-lg-2">Contact Us</Button>
        </Nav.Link>
        {/* Additional navigation links */}
      </Nav>

      <Nav className="align-items-lg-center"> {/* Adjust alignment */}
        <Nav.Link href="/Login" className="d-lg-flex align-items-lg-center">
          <Button variant="outline-primary" className="ms-lg-2">Login</Button>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sofaImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <Button variant="danger" className="me-2">Catlog</Button>
            <Button variant="outline-danger">Categories</Button>
            <h3>Stylish University furniture</h3>
            <p>Place to get a great amount of collection of furnitures for students who are struggling to get furniture for there daily use</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sofaImage1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <Button variant="danger" className="me-2">Catlog</Button>
            <Button variant="outline-danger">Categories</Button>
            <h3>Stylish University furniture</h3>
            <p>Place to get a great amount of collection of furnitures for students who are struggling to get furniture for there daily use</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sofaImage2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <Button variant="danger" className="me-2">Catlog</Button>
            <Button variant="outline-danger">Categories</Button>
            <h3>Stylish University furniture</h3>
            <p>Place to get a great amount of collection of furnitures for students who are struggling to get furniture for there daily use</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={DeskImage}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <Button variant="danger" className="me-2">Catlog</Button>
            <Button variant="outline-danger">Categories</Button>
            <h3>Stylish University furniture</h3>
            <p>Place to get a great amount of collection of furnitures for students who are struggling to get furniture for there daily use</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Welcome Section */}
      <Container className="my-5 text-center">
        <h2>Welcome to UTA FurniFind</h2>

        <p>Explore our wide range of furniture designed for university life.</p>
      </Container>

      {/* About Us Section */}
      <div className='container1'>
        <Container className="my-5 text-center ">
          <h1>About Us</h1>
          <Row className="mt-4">
            <Col md={6} className="mb-3">
              <img src={aboutImage1} alt="Our Story" className="img-fluid rounded mb-3" />
              <h3>Our Story</h3>
              <p>Learn about our journey and how we started providing quality furniture to universities across the nation.</p>
            </Col>
            <Col md={6} className="mb-3 ">
              <img src={aboutImage2} alt="Our Mission" className="img-fluid rounded mb-3" />
              <h3>Our Mission</h3>
              <p>Our mission is to design spaces that enhance the student experience, fostering a comfortable and productive environment.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact Information Card */}
      <div className='contact1-background'>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card className='contact-card'>
              <Card.Body className="text-center">
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>
                  <p>Email: furnicrafters@gmail.com</p>
                  <p>Phone: +1 (800) 123-4567</p>
                </Card.Text>
                <Button variant="primary">Get in Touch</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>

      {/* Footer */}
      <footer className="text-center text-lg-start  text-muted">
        <Container className="p-4 pb-0">
          <section className="">
            <Row>
              <Col lg={12} className="text-center text-white">
                <p>&copy; UTA FurniFind 2024</p>
              </Col>
            </Row>
          </section>
        </Container>
      </footer>

    </>
  );
};
export default HomeScreen;
