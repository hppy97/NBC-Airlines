import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navb3 from "../../Navb3";
import { Button } from "react-bootstrap";
import { Navbar,Container } from 'react-bootstrap';
const Flights = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8998/flightList/allFlights");
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8998/flightList/deleteFlight/${id}`);
    loadUsers();
  };

  return (
   <div>   <Navbar bg="#060b26" variant="dark" expand="lg">
   <Navb3/>
   


   <Container>

     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

     </Navbar.Collapse>
   </Container>
 </Navbar>
    <Link to="/addflight">
     <Button className="butt" variant="outline-info">Add</Button>{' '}
     </Link>
    <div className="container">
      <div className="py-4">
        <h1>Flights DATA</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Flight Name</th>
              <th scope="col">Total Passengers</th>
              <th scope="col">Action</th>           
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.totalPassengers}</td>
                
                 <td>
            
                  <Link
                    className="btn btn-outline-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>  
  );
};

export default Flights;
