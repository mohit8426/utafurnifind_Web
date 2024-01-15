import React, { useState } from 'react';
import './TablePage.css';

import { Container, Row, Col, Card, Button, Dropdown, Form } from 'react-bootstrap';
import table1 from './images/table1.jpg';
import table2 from './images/table2.jpeg';
import table3 from './images/table3.jpg';
import table4 from './images/table4.jpg';
import table5 from './images/table5.jpg';
import table6 from './images/table6.jpeg';
import table7 from './images/table8.jpg';
import table8 from './images/table9.jpeg';
import table9 from './images/table10.jpg';
import table10 from './images/table1.jpg';

const TablePage = () => {
  const [tables, setTables] = useState(/* Load your table data here */);

  const handleSort = (sortKey) => {
    // Implement sorting logic based on sortKey
  };

  // Example table data
  const tableData = [
    { id: 1, title: 'Table 1', description: 'Description 1', imgSrc: table1 },
    { id: 2, title: 'Table 2', description: 'Description 2', imgSrc: table2 },
    { id: 3, title: 'Table 3', description: 'Description 3', imgSrc: table3 },
    { id: 4, title: 'Table 4', description: 'Description 4', imgSrc: table4 },
    { id: 5, title: 'Table 5', description: 'Description 5', imgSrc: table5 },
    { id: 6, title: 'Table 6', description: 'Description 6', imgSrc: table6 },
    { id: 7, title: 'Table 7', description: 'Description 7', imgSrc: table7 },
    { id: 8, title: 'Table 8', description: 'Description 8', imgSrc: table8 },
    { id: 9, title: 'Table 9', description: 'Description 9', imgSrc: table9 },
    { id: 10, title: 'Table 10', description: 'Description 10', imgSrc: table10 },
    // ... more table items
  ];

  return (
    <div className='table-background'>
    <Container>
      <h1 className="text-center text-black">Tables</h1>
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
        {tableData.map((table) => (
          <Col md={4} key={table.id} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={table.imgSrc} />
              <Card.Body>
                <Card.Title>{table.title}</Card.Title>
                <Card.Text>
                  {table.description}
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

export default TablePage;
