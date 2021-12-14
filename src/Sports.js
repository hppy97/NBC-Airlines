import React from 'react';
import { Card,Button, Row,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navb from './Navb';

function Sports() {

    

    return (
        <div>
                 
            <Navb/>

            <div>      
        
          
            <Row xs={1} md={2} className="g-4" style={{ display:'flex', justifyContent:'center' }}>
 
            <Card className="card " border="warning"  style={{ width: '20rem' }}>
                <Card.Img variant="top" src="../img/games.jpg" />
                <Card.Body>
                    <Card.Title>USERS</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Link to='/games'>
                    <Button variant="dark">List</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card border="warning" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="../img/players.jpg" />
                <Card.Body>
                    <Card.Title>FLIGHTS</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Link to='/playersList'>
                    <Button variant="dark">List</Button> </Link>
                </Card.Body>
            </Card>
            </Row>

            <Row  xs={1} md={2} className="g-4" style={{ display:'flex', justifyContent:'center' }}>
            <Card className="card " border="warning"  style={{ width: '20rem' }}>
                <Card.Img variant="top" src="../img/games.jpg" />
                <Card.Body>
                    <Card.Title>PASSENGERS</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Link to='/games'>
                    <Button variant="dark">List</Button>
                    </Link>
                </Card.Body>
            </Card>
            
            <Card className="card " border="warning"  style={{ width: '20rem' }}>
                <Card.Img variant="top" src="../img/games.jpg" />
                <Card.Body>
                    <Card.Title>AVAILABILITY</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Link to='/availableList'>
                    <Button variant="dark">List</Button>
                    </Link>
                </Card.Body>
            </Card>
            </Row>
          
            {/* <Image  className='basket' src="../img/football.gif" /> */}
            </div>

        </div>
    )

}

export default Sports;



