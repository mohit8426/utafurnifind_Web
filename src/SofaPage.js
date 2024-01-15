import React, { useState } from 'react';
import './SofaPage.css';

import { Container, Row, Col, Card, Button, Dropdown, Form } from 'react-bootstrap';
import sofa1 from './images/sofa1.jpg'
import sofa2 from './images/sofa2.jpg'
import sofa3 from './images/sofa3.jpg'
import sofa4 from './images/sofa4.jpg'
import sofa5 from './images/sofa5.jpg'
import sofa6 from './images/sofa6.jpeg'
import sofa7 from './images/sofa7.jpeg'
import sofa8 from './images/sofa8.jpg'
import sofa9 from './images/sofa9.jpeg'
import sofa10 from './images/sofa10.jpeg'

const SofaPage = () => {
  const [sofas, setSofas] = useState(/* Load your sofa data here */);

  const handleSort = (sortKey) => {
    // Implement sorting logic based on sortKey
  };

  // Example sofa data
  const sofaData = [
    { id: 1, title: 'Sofa 1', description: 'Description 1', imgSrc: sofa1 },
    {id: 2, title: 'Sofa 2', description: 'Description 2', imgSrc: sofa2 },
    {id: 3, title: 'Sofa 3', description: 'Description 3', imgSrc: sofa3 },
    {id: 4, title: 'Sofa 4', description: 'Description 4', imgSrc: sofa4 },
    {id: 5, title: 'Sofa 5', description: 'Description 5', imgSrc: sofa5 },
    {id: 6, title: 'Sofa 6', description: 'Description 6', imgSrc: sofa6 },
    {id: 7, title: 'Sofa 7', description: 'Description 7', imgSrc: sofa7 },
    {id: 8, title: 'Sofa 8', description: 'Description 8', imgSrc: sofa8 },
    {id: 9, title: 'Sofa 9', description: 'Description 9', imgSrc: sofa9 },
    {id: 10, title: 'Sofa 10', description: 'Description 10', imgSrc: sofa10 },

    // ... more sofa items
  ];

  return (
    <div className='sofa-background'>
    <Container>
    <h1 className="text-center text-black">Sofa</h1>
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
        {sofaData.map((sofa) => (
          <Col md={4} key={sofa.id} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={sofa.imgSrc} />
              <Card.Body>
                <Card.Title>{sofa.title}</Card.Title>
                <Card.Text>
                  {sofa.description}
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

export default SofaPage;
