import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navb from "../../Navb";
import { Navbar,Container } from 'react-bootstrap';
const Flights = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8999/passenger/");
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8999/passenger/${id}`);
    loadUsers();
  };

  return (
   <div>  <Navbar bg="#060b26" variant="dark" expand="lg">
   <Navb />


   <Container>

     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

     </Navbar.Collapse>
   </Container>
 </Navbar>
    <div className="container">
      <div className="py-4">
        <h1>Passengers DATA</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Flight-Id</th>
              <th scope="col">Name</th>
              <th scope="col">Country</th> 
              <th scope="col">Aadhaar_No</th>
              <th scope="col">Passport</th>
              <th scope="col">Action</th>
                           
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{user.fId}</td>
                <td>{user.name}</td>
                <td>{user.country}</td>
                <td>{user.aadharNo}</td>
                <td>{user.passportNo}</td>


                <td>
                  <Link className="btn btn-outline-secondary mr-2" to={`/passenger/${user.pId}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/passenger/edit/${user.pId}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-outline-danger"
                    onClick={() => deleteUser(user.pId)}
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
