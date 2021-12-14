import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
// import { useForm } from 'react-hook-form';

function Signup() {

    // const { register, handleSubmit, errors } = useForm();

    let history = useHistory();


    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
        password: ""
    });

    const { name, email, phone, password, username } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        if (!name || !email || !phone || !password)
            alert("You can't leave fields empty");
        else {
            e.preventDefault();
            const url = "http://localhost:8080/api/users";
            const data = {
                name:name,
                email: email,
                password: password,
                username: username,
                phone:phone
            }

            axios.post(url, data).then(
                res => {

                    console.log("success");
                    console.log(res);
                }
            );


            // await axios.post("http://localhost:8000/users", user);
            alert("Registered Successfully, now please login!");
            alert(username + " " + password);
            history.push("/");
        }
    };

    return (

        <div className="outer">
            <div className="inner">
                {/* <form onSubmit={e => handleSubmit(onSubmit(e))}> */}

                <form onSubmit={e => onSubmit(e)}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your full name"
                            name="name"
                            value={name}
                            // {...register('name', { required: true })}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" placeholder="Enter Phone Number"
                            name="phone"
                            value={phone}
                            // {...register('phone', { required: true })}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email address"
                            name="email"
                            value={email}
                            // {...register('email', { required: true })}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter your username"
                            name="username"
                            value={username}
                            // {...register('password', { required: true })}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            name="password"
                            value={password}
                            // {...register('password', { required: true })}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/Login">log in?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;