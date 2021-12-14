import React from 'react';
import { Card, Button, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navb from '../../Navb';
import { Navbar,Container } from 'react-bootstrap';

function AdminList() {
    return (
        <div>
             <Navbar bg="#060b26" variant="dark" expand="lg">
        <Navb />
   
   
        <Container>
    
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          </Navbar.Collapse>
        </Container>
      </Navbar>
            <div>


              
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                    <Card className="card " border="warning" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="../img/users.png" />
                        <Card.Body>
                            <Card.Title>USERS</Card.Title>

                            <Link to='/display'>
                                <Button variant="dark">List</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="../img/flight.jpg" />
                        <Card.Body>
                            <Card.Title>FLIGHTS</Card.Title>

                            <Link to='/flightsList'>
                                <Button variant="dark">List</Button> </Link>
                        </Card.Body>
                    </Card>
                    </div>
               
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                    <Card className="card " border="warning" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="../img/passenger.jpg" />
                        <Card.Body>
                            <Card.Title>PASSENGERS</Card.Title>
                            <Link to='/passengerList'>
                                <Button variant="dark">List</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                    <Card className="card " border="warning" style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="../img/avai.jpg" />
                        <Card.Body>
                            <Card.Title>AVAILABILITY</Card.Title>

                            <Link to='/availableList'>
                                <Button variant="dark">List</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    
                             </div> 
                             <br/>
                    <br/>


            </div>

        </div>
    )
}

export default AdminList;