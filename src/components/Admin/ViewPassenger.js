import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navb from "../../Navb";

const ViewPassenger = () => {
  
  const [user, setUser] = useState({
    name: "",
    country: "",
    aadharNo: "",
    passportNo: ""
  });
  const { id } = useParams();
  useEffect(() => {
   
    loadUser();
   
  }, []);
  
  const url="http://localhost:8999/passenger/"+id;

  const loadUser = async () => {
    const res = await axios.get(url);
    setUser(res.data);
    console.log(res.data);
        
  };
  return (
    <div>
      <Navb/>
    <div className="bound-v">

    <div className="outer">
            <div className="inner">
      <Link className="btn btn-dark btn-lg btn-block" to="/passengerList">
        Go Back
      </Link>
      <h3 className="dis">Passenger Info</h3>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Country: {user.country}</li>
        <li className="list-group-item">Aadhaar: {user.aadharNo}</li>
        <li className="list-group-item">Passport: {user.passportNo}</li>
  
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ViewPassenger;
