import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Navb from "../../Navb";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",  
    phone: "",
    username:"",
    password:""
  });

  const { name, email, phone,password,username} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {

    loadUser();
      
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/users/${id}`, user);
    history.push("/display");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/users/${id}`);
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
                <input type="text" className="form-control" placeholder="Enter your full name" 
                 name="name"
                 value={name}
                 onChange={e => onInputChange(e)}/>
            </div>

            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter Phone Number" 
                 name="phone"
                 value={phone}
                 onChange={e => onInputChange(e)}/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter Username" 
                 name="username"
                 value={username}
                 onChange={e => onInputChange(e)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" 
                name="password"
                value={password}
                onChange={e => onInputChange(e)} />
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

export default EditUser;
