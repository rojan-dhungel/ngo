import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const products = [
  {
    category: 'FILES',
    name: 'VIEW BINDER FILE',
    price: 'Rs 200 - Rs 500',
    image: '../Images/comix.png'
  },
  {
    category: 'TRAY',
    name: 'FILE TRAY AND BOOK END',
    price: 'Rs 1200 - Rs 3000',
    image: '../Images/tray.png'
  },
  {
    category: 'FILE',
    name: 'DISPLAY BOOK',
    price: 'Rs 300 - Rs 1000',
    image: '../Images/file.png'
  },
  {
    category: 'TAPE',
    name: 'TAPE DISPENSER',
    price: 'Rs 120 - Rs 2000',
    image: '../Images/tape.png'
  }

];

const OfficeStationery = () => {
  return (
    <div className="office-stationery">
  <Container fluid className="py-5">
    <h1 className="text-center mb-2">OFFICE STATIONERY</h1>
    <h4 className="text-center mb-4">New Items Arrival</h4>
    <Row>
      {products.map((product, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}> 
          <Card className="mb-6 elongated-card"> 
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Text className="category">{product.category}</Card.Text>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="price">{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</div>

  );
};

export default OfficeStationery;