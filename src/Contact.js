import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'; // Make sure to create this CSS file for additional styling

const Contact = () => {
  return (

    <div className="contact-background">
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title>Email Us</Card.Title>
              <Card.Text>
                Get in touch via email and we will get back to you as soon as possible.
              </Card.Text>
              <Button variant="outline-primary" href="mailto:contact@example.com">Send Email</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title>Call Us</Card.Title>
              <Card.Text>
                Prefer to speak to someone? Call us directly at the number below.
              </Card.Text>
              <Button variant="outline-primary" href="tel:+1234567890">Call Now</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <Card.Title>Live Chat</Card.Title>
              <Card.Text>
                Our support team is available to chat during business hours.
              </Card.Text>
              <Button variant="outline-primary" href="#live-chat">Start Chat</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="g-4 justify-content-center my-5">
  <Col lg={15} xl={15}> {/* Increased width by using larger column sizes */}
    <Card className="text-center h-100 custom-card" style={{ padding: '2rem' }}> {/* Increased height by adding padding */}
      <Card.Body>
        <Card.Title className='card'>Send us a message</Card.Title>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control type="text" placeholder="Your Name" />
            </Col>
            <Col md={6}>
              <Form.Control type="email" placeholder="Your Email" />
            </Col>
          </Row>
          <Form.Control as="textarea" rows={3} placeholder="Your Message" className="mb-4" /> {/* Increased spacing */}
          <Button variant="outline-success" type="submit">Submit Message</Button>
        </Form>
      </Card.Body>
    </Card>
  </Col>
</Row>


    </Container>
    </div>
  );
};

export default Contact;
