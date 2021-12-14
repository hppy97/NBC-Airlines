import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddFlight = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    id:"",
    flightId: "",
    flightName:"",
    flightFrom:"",
    flightTo:"",
    date:"",
    price:" "

  });

  const {  id,flightId,
  flightName,
  flightFrom,
  flightTo,
  date,
  price} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:9001/lists/", user);
    history.push("/availableList");
  };
  return (
    <div className="outer">
    <div className="inner">
    
        <form onSubmit={e => onSubmit(e)}>
            <h3>Add Details</h3>

            <div className="form-group">
                <label>Id</label>
                <input type="text" className="form-control" placeholder="Enter Flight Id" 
                 name="id"
                 value={id}
                 onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Flight-Id</label>
                <input type="text" className="form-control" placeholder="Enter Flight Id" 
                 name="flightId"
                 value={flightId}
                 onChange={e => onInputChange(e)}/>
            </div>

            <div className="form-group">
                <label>Flight Name</label>
                <input type="text" className="form-control" placeholder="Enter Flight Name" 
                 name="flightName"
                 value={flightName}
                 onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Flight From</label>
                <input type="text" className="form-control" placeholder="Enter Flight From" 
                 name="flightFrom"
                 value={flightFrom}
                 onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Flight To</label>
                <input type="text" className="form-control" placeholder="Enter Flight To" 
                 name="flightTo"
                 value={flightTo}
                 onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input type="text" className="form-control" placeholder="Enter Date" 
                 name="date"
                 value={date}
                 onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Flight Price</label>
                <input type="text" className="form-control" placeholder="Enter Flight Price" 
                 name="price"
                 value={price}
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
