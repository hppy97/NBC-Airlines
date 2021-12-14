import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Navb from "../../Navb";

const EditList = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        flightId: "",
        flightName: "",
        flightFrom: "",
        flightTo: "",
        date: "",
        price: " "
    });

    const { flightId,
        flightName,
        flightFrom,
        flightTo, date, price } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {

        loadUser();

    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:9001/lists/flights/${id}`, user);
        history.push("/availableList");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9001/lists/${id}`);
        setUser(result.data);
        console.log(result);

    };
    return (
        <div><Navb />
            <div className="bound-e">
                <div className="outer">
                    <div className="inner">

                        <form onSubmit={e => onSubmit(e)}>
                            <h3>Edit details</h3>
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
                <input type="date" className="form-control" placeholder="Enter Date" 
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


                            <br />
                            <button type="submit" className="btn btn-dark btn-lg btn-block">Update</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditList;
