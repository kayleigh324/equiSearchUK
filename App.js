import React from 'react';
import { users } from './professions.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Button, Form, Container, Col, Row, Card, Carousel, Navbar, Nav, NavDropdown, FormControl, NavProps } from 'react-bootstrap';
import './App.css';

import { BroswerRouter as Router, Route, Switch, Link, Redirect } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg" id="navBar">
  <Navbar.Brand href="#">EquiSearch UK</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">About Us</Nav.Link>
      <NavDropdown title="Search by trade.." id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Physical Therapists</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action4">Farriers</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action4">Veterinary Surgeons</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Riding Instructors</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
     <Container>
      <Card>
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle" id="title">
            Welcome to EquiSearch UK!
          </Card.Title>
        </Card.Body>
      </Card>
      </Container>
      <Container className="cookingCard">
      <Card>
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">
            Sign up today to search for equine professionals near you!
          </Card.Title>
        </Card.Body>
      </Card>
      </Container>
      <Container className="form-container">
      <Form>
        <Row>
          <Form.Text className="text-muted"></Form.Text> 
          <Col md>
          <Form.Group controlId="formEmail">
            <Form.Label className="formText">Email Address:</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" />
          </Form.Group>
          </Col>
          <Col md>
        <Form.Group controlId="formPassword">
          <Form.Label className="formText">Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Col>  
      </Row>
      </Form>
      <Button variant="primary" className="custom-btn">Login</Button>
      </Container>
      </header>
      <div>
      <Container>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://wirralvetphysio.co.uk/wp-content/uploads/2016/04/nikki-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Physical therapists</h3>
      <p>Seach for registered and insured physiotherapists, chiropractors, massage therapists </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.horsecrazygirls.com/images/Depositphotos_143487529_l-2015.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Riding Instructors</h3>
      <p>Search for insured riding instructors near you!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2016/03/4081943.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Farriers</h3>
      <p>Search for qualified and insured farriers nearby</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
</div>
    </div>
  );
}

export default App;
