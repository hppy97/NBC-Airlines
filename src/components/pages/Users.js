import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navb from "../../Navb";
import { Navbar,Container } from 'react-bootstrap';
const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8080/api/users/${id}`);
    loadUsers();
  };

  return (
   <div> 
       <Navbar bg="#060b26" variant="dark" expand="lg">
        <Navb />
   
   
        <Container>
    
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="container">
      <div className="py-4">
        <h1>Users DATA</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Userame</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Phone</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {/* <td>{user.phone}</td> */}
                <td>
                  <Link className="btn btn-outline-secondary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
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

export default Users;
