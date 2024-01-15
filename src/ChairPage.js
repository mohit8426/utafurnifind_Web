import React, { useState } from 'react';
import './ChairPage.css';

import { Container, Row, Col, Card, Button, Dropdown, Form } from 'react-bootstrap';
import chair1 from './images/chair1.jpg';
import chair2 from './images/chair2.jpeg';
import chair3 from './images/chair3.jpg';
import chair4 from './images/chair4.jpg';
import chair5 from './images/chair5.jpg';
import chair6 from './images/chair6.jpg';
import chair7 from './images/chair7.jpg';
import chair8 from './images/chair8.jpg';
import chair9 from './images/chair9.jpg';
import chair10 from './images/chair10.jpg';

const ChairPage = () => {
  const [chairs, setChairs] = useState(/* Load your chair data here */);

  const handleSort = (sortKey) => {
    // Implement sorting logic based on sortKey
  };

  // Example chair data
  const chairData = [
    { id: 1, title: 'Chair 1', description: 'Description 1', imgSrc: chair1 },
    { id: 2, title: 'Chair 2', description: 'Description 2', imgSrc: chair2 },
    { id: 3, title: 'Chair 3', description: 'Description 3', imgSrc: chair3 },
    { id: 4, title: 'Chair 4', description: 'Description 4', imgSrc: chair4 },
    { id: 5, title: 'Chair 5', description: 'Description 5', imgSrc: chair5 },
    { id: 6, title: 'Chair 6', description: 'Description 6', imgSrc: chair6 },
    { id: 7, title: 'Chair 7', description: 'Description 7', imgSrc: chair7 },
    { id: 8, title: 'Chair 8', description: 'Description 8', imgSrc: chair8 },
    { id: 9, title: 'Chair 9', description: 'Description 9', imgSrc: chair9 },
    { id: 10, title: 'Chair 10', description: 'Description 10', imgSrc: chair10 },
    // ... more chair items
  ];

  return (
    <div className='chair-background'>
    <Container>
      <h1 className="text-center text-black">Chairs</h1>
      <Row className="mb-4">
        <Col>
          <Dropdown onSelect={handleSort}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="priceLowHigh">Price: Low to High</Dropdown.Item>
              <Dropdown.Item eventKey="priceHighLow">Price: High to Low</Dropdown.Item>
              <Dropdown.Item eventKey="relevance">Relevance</Dropdown.Item>
              <Dropdown.Item eventKey="datePosted">Date Posted</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col lg={12}>
  <Form>
    <Row>
      <Col md={4} className="mb-3">
        <Form.Group controlId="formColorSelect">
          <Form.Label>Color</Form.Label>
          <Form.Control as="select">
            <option value="">Select Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            {/* Add more color options */}
          </Form.Control>
        </Form.Group>
      </Col>

      <Col md={4} className="mb-3">
        <Form.Group controlId="formSizeSelect">
          <Form.Label>Size</Form.Label>
          <Form.Control as="select">
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            {/* Add more size options */}
          </Form.Control>
        </Form.Group>
      </Col>

      <Col md={4} className="mb-3">
        <Form.Group controlId="formTypeSelect">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select">
            <option value="">Select Type</option>
            <option value="recliner">Recliner</option>
            <option value="sofaBed">Sofa Bed</option>
            <option value="sectional">Sectional</option>
            {/* Add more type options */}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  </Form>
</Col>

      </Row>
      <Row>
        {chairData.map((chair) => (
          <Col md={4} key={chair.id} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={chair.imgSrc} />
              <Card.Body>
                <Card.Title>{chair.title}</Card.Title>
                <Card.Text>
                  {chair.description}
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default ChairPage;
