import React from 'react';
import { Navbar, NavItem, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Navbar.css';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from "react-router-dom";
import { Card,Row,Col,Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


import Navb2 from './Navb2';

const Home2 = () => {

  const loc = useLocation();
  // console.log(location.state.detail);
  let user;
  if (loc.state) {
    user = loc.state.data
    // isloggedin=true;
  }


  const style = {
    color: '#65C677',
    fontSize: 20

  };

  return (

    <div>
      
      <Navbar bg="#060b26" variant="dark" expand="lg">
        <Navb2 />
     
      <Image  className='panda' src="../img/hello.gif" />
   
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <div className='homecard'>
        <Card border="warning" style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../img/flightw.gif" />
          <Card.Body>
            <Button variant="dark">Welcome {user} </Button>
          </Card.Body>
        </Card>
      </div>

      
    </div>


  );
}

export default Home2;
