import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddFlight = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    totalPassengers: ""
  });

  const { name, totalPassengers} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8998/flightList/", user);
    history.push("/flightsList");
  };
  return (
    <div className="outer">
    <div className="inner">
    
        <form onSubmit={e => onSubmit(e)}>
            <h3>Add New Flight</h3>

            <div className="form-group">
                <label>Flight Name</label>
                <input type="text" className="form-control" placeholder="Enter Flight Name" 
                 name="name"
                 value={name}
                 onChange={e => onInputChange(e)}/>
            </div>

            <div className="form-group">
                <label>Total Passengers</label>
                <input type="text" className="form-control" placeholder="Enter Total Passengers" 
                 name="totalPassengers"
                 value={totalPassengers}
                 onChange={e => onInputChange(e)}/>
            </div>

         
            <br/>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Add</button>
           
        </form>
    </div>
</div>
  );
};

export default AddFlight;
