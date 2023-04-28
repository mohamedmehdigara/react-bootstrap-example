import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import Footer from './components/Footer';
import Item from './components/Item';



function App() {
  const numberOfItems = 5
  return (
    


<div className="d-flex flex-column min-vh-100">
  <ResponsiveNavbar />
  <Container className="mt-5">
  <Row>
    
    {Array.from(Array(numberOfItems).keys()).map(number => (
      <Col key={number}>
        <Item />
      </Col>
    ))}
  </Row>
</Container>
  <Footer />
  
    </div>
  );
}

export default App;
