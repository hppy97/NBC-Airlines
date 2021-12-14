import React from 'react';
import { Card,Button, Row,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navb from '../../Navb';

function Main() {


    return (
        <div>
            
            <div style={{display:'inline-block'}}>
            <img src="../img/logo.png" className="logo" alt="logo" />
              <h2> Welcome to NBC Airlines</h2>   
             
              </div>

            
        
          
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
 
            <Card className="card " border="warning"  style={{ width: '20rem',marginTop:'0.001px' }}>
                <Card.Img variant="top" src="../img/user.png" />
                <Card.Body>
                    <Card.Title>USER</Card.Title>
                    <Link to='/login'>
                    <Button variant="dark">Go to Login Page</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Image  className='plane' src="../img/plane.gif" />
            <Card border="warning" style={{ width: '20rem',marginTop:'0.01px' }}>
                <Card.Img variant="top" src="../img/admin.jpg" />
                <Card.Body>
                    <Card.Title>Admin</Card.Title>
          
                    <Link to='/admin'>
                    <Button variant="dark">Go to Login Page</Button> </Link>
                </Card.Body>
            </Card>
           

            </div>

        </div>
    )

}

export default Main;



