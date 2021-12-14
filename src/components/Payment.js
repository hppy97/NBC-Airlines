import React, { useState, useEffect } from 'react';
import Navb2 from '../Navb2';
import { Navbar, Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Payment() {
    let history = useHistory();
    const [user, setUser] = useState({
        card: "",
        edate:"",
        cv:"",
        owner:""
    });
    const {card,edate,cv,owner } = user;
    const onInputChange = e => {
    
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const login = (e) => {
        e.preventDefault();
        if(!card || !cv || !edate || !owner)
        alert("Fields can't be empty")
        else{
        alert("Ticket Booked sucessfully!")
        history.push({
            pathname: "/ticket",

        });
    }
    }

    return (

        <div>
            <Navbar bg="#060b26" variant="dark" expand="lg">
                <Navb2 />

                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />

            <div className="outer">
                <div className="inner">
                    <form className="form-horizontal" onSubmit={e => login(e)}>


                        <h3>Payment Details</h3>

                        <div className="form-group">
                            <label>Card Number</label>
                            <input type="text" className="form-control" placeholder="Valid Card Number"
                                name="card"
                                value={card}
                                onChange={e => onInputChange(e)}


                            />
                        </div>
                        <div className="form-group">

                            <label >Expiration Date</label>
                            <input type="text" className="form-control" placeholder="MM/YY"
                                name="edate"
                                value={edate}
                                onChange={e => onInputChange(e)}
                            />

                        </div>
                        <div className="form-group">
                            <label>CV Code</label>
                            <input type="text" className="form-control" placeholder="CVC"
                                name="cv"
                                value={cv}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Card Owner</label>
                            <input type="text" className="form-control" placeholder="Card Owner Name"
                                name="owner"
                                value={owner}
                                onChange={e => onInputChange(e)}
                            />
                        </div>

                        <br />
                        <button type="submit" className="btn btn-dark btn-lg btn-block"
                        >
                            Confirm Payment</button>




                    </form>
                </div>
            </div>

        </div>


    )
}
