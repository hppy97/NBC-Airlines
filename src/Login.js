import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';
import Home from './Home';
import { Image } from 'react-bootstrap';

function Login() {
    let history = useHistory();

    const [res, setRes] = useState([]);

    const [user, setUser] = useState({
        email: "",
        password: "",
        username:""
    });


    useEffect(() => {
        loadUser();
    }, [])

    const { email, password, username } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8000/users`);
        setUser(result.data);
        setRes(result.data)
        // console.log(result.data)

    };

    const login = (e) => {
        let data = {
            "email": email,
            "password": password,
            "username":username
        }
     axios.post('http://localhost:8080/api/validation', data)
        .then(res => {
               console.log("res data is:" + res.data)
                if(res.data==="Success")
                {   
                    alert("Logged in successfully");
                    history.push({
                                pathname:"/home2",
                                state:{data: data.username}});
                }
                else
                alert(res.data);
            });
    e.preventDefault();

        
    }


    return (
    
         
        <div className="outer">
            <div className="inner">
                <form onSubmit={e => login(e)}>
                <Image  className='login' src="../img/login.gif" />
     
                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter your Email address"
                            name="email"
                            onChange={e => onInputChange(e)}

                        />
                    </div>
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
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark btn-lg btn-block"
                    >
                        Sign in</button>



                    <p className="forgot-password text-right">
                        Register <a href="/register">here</a>
                    </p>
                </form>

            </div>
            </div>
        
    );
}


export default Login;