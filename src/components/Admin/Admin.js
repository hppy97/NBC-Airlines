import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function Admin() {
    
    let history = useHistory();

    const [res, setRes] = useState([]);
    const [user, setUser] = useState({
        password: "",
        username:""
    });

    const {password, username } = user;
    const onInputChange = e => {
        // setRes({ ...res, [e.target.name]: e.target.value });

        setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const login = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Username or Password cannot be empty");
        } else 
            if(username==="admin" && password==="admin")
            {
                alert("Logged in sucessfully!")
                history.push({
                    pathname:"/adminview",
                    
                });
            }
            else {
                alert("invalid credentials");
            }
        }
    
    
    return ( 
        <div className="outer">
        <div className="inner">
            <form onSubmit={e => login(e)}>
            <Image  className='login' src="../img/login.gif" />
 
                <h3>Admin Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter your username"
                        name="username"
                        onChange={e => onInputChange(e)}

                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        name="password"
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                    Sign in</button>
            </form>

        </div>
        </div>
     );
}

export default Admin;