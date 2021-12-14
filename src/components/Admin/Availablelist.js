import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navb from "../../Navb";
import { Button } from "react-bootstrap";
import { Navbar,Container } from 'react-bootstrap';
import Navb3 from "../../Navb3";
const Availablelist = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9001/lists/allFlights/");
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:9001/lists/deleteFlight/${id}`);
    loadUsers();
  };

  return (
   <div> <Navbar bg="#060b26" variant="dark" expand="lg">
   <Navb3/>
   


   <Container>

     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

     </Navbar.Collapse>
   </Container>
 </Navbar>
   <Link to="/addlist">
     <Button className="butt" variant="outline-info">Add</Button>{' '}
     </Link>
   
    <div className="container">
      <div className="py-4">
        <h1>Available Flights Data</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Flight-Id</th>
              <th scope="col">Flight Name</th> 
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Date</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
                           
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.flightId}</td>
                <td>{user.flightName}</td>
                <td>{user.flightFrom}</td>
                <td>{user.flightTo}</td>
                <td>{user.date}</td>
                <td>{user.price}</td>
                
                <td>
                  
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/list/edit/${user.id}`}
                  >
                    Edit
                  </Link>
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

export default Availablelist;
