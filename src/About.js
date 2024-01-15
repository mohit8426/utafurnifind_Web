
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Make sure to create this CSS file for additional styling

// Import your images
import missionImage from './images/desk1.gif';
import visionImage from './images/dine1.jpeg';
import historyImage from './images/comp1.jpg';
// import backgroundImage from './images/about-background.jpg'; // Your background image

const About = () => {
  return (
    <div className="about-us-background">
      <Container className="pt-5 pb-5">
        <Row className="mb-4">
          <Col>
            <h1 className="text-center text-black">About Us</h1>
            <p className="text-center text-black">
              Discover the story behind our commitment to providing quality furniture for university life.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={missionImage} />
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to enhance the student living experience with comfortable and durable furniture.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={visionImage} />
              <Card.Body>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  We envision a world where students can focus on their studies in the comfort of their living spaces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={historyImage} />
              <Card.Body>
                <Card.Title>Our History</Card.Title>
                <Card.Text>
                  From a small workshop to a leading furniture provider, our journey has always been about quality and service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
