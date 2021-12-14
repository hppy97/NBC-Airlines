import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navb from "../../Navb";

const User = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: "",  
    phone: "",
    username: "",
    password:""
  });
  const { id } = useParams();
  useEffect(() => {
   
    loadUser();
   
  }, []);
  
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:8080/api/users/${id}`);
    setUser(res.data);
        
  };
  return (
    <div>
      <Navb/>
    <div className="bound-v">

    <div className="outer">
            <div className="inner">
      <Link className="btn btn-dark btn-lg btn-block" to="/display">
        Go Back
      </Link>
      <h3 className="dis">User Id: {id}</h3>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Username: {user.username}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
  
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
};

export default User;
