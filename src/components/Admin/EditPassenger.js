import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Navb from "../../Navb";

const EditPassenger = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    country: "",
    aadharNo: "",
    passportNo: ""
  });

  const { name,country,aadharNo,passportNo} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {

    loadUser();
      
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8999/passenger/${id}`, user);
    history.push("/passengerList");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8999/passenger/${id}`);
    setUser(result.data);
        
  };
  return (
    <div><Navb/>
    <div className="bound-e">
    <div className="outer">
    <div className="inner">
    
        <form onSubmit={e => onSubmit(e)}>
            <h3>Edit details</h3>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" 
                 name="name"
                 value={name}
                 onChange={e => onInputChange(e)}/>
            </div>

            <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" placeholder="Enter Player Name" 
                 name="country"
                 value={country}
                 onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Aadhar No</label>
                <input type="text" className="form-control" placeholder="Enter Player Name" 
                 name="aadharNo"
                 value={aadharNo}
                 onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <label>Passport No</label>
                <input type="text" className="form-control" placeholder="Enter Player Name" 
                 name="passportNo"
                 value={passportNo}
                 onChange={e => onInputChange(e)}/>
            </div>

         
            <br/>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Update</button>
           
        </form>
    </div>
</div>
</div>
</div>
  );
};

export default EditPassenger;






