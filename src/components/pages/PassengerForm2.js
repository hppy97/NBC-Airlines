import React, { useState } from "react";
import axios from 'axios'
import './passenger.css'
import { useHistory, useParams } from "react-router-dom";
import { Navbar,Container } from 'react-bootstrap';

import Navb4 from "../../Navb4";

export default function PassengerForm2() {

    let history = useHistory();
   

	const [user, setUser] = useState({
	  fId: localStorage.getItem("fid"),
	  name: "",
    country: "",
    aadharNo: "",
    passportNo: ""
  });

  const { fId,name,country,aadharNo,passportNo} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
	const onSubmit = async e => {
	  e.preventDefault();
	  localStorage.setItem("name",name);
	  await axios.post("http://localhost:8999/passenger/", user);
	  alert("Passenger Added")
	  history.push("/payment");
	};

    return (
        <div>
			 
          <Navbar bg="#060b26" variant="dark" expand="lg">
   <Navb4/>
   


   <Container>

     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

     </Navbar.Collapse>
   </Container>
 </Navbar>
        
<br/>
            <div class="wrapper">
	<div class="registration_form">
		<div class="title">
			Passenger Details
		</div>

		<form  onSubmit={e => onSubmit(e)}>
			<div class="form_wrap">
				
					<div class="input_wrap">
						<label> Flight Id</label>
						<input type="text"
						name="fId"
                        value={fId}
						onChange={e => onInputChange(e)}
						/>
					
				</div>
				<div class="input_wrap">
					<label >Name</label>
					<input type="text"
					 name="name"
					 value={name}
					
					 onChange={e => onInputChange(e)} />
				</div>
				<div class="input_wrap">
					<label>Country</label>
					<input type="text"
					 name="country"
					 value={country}
					 onChange={e => onInputChange(e)}/>
				</div>
				<div class="input_wrap">
					<label>Aaadhar Number</label>
					<input type="text" 
					 name="aadharNo"
					 value={aadharNo}
					 onChange={e => onInputChange(e)}
					/>
				</div>
                <div class="input_wrap">
					<label>Passport Number</label>
					<input type="text"
					 name="passportNo"
					 value={passportNo}
					 onChange={e => onInputChange(e)}/>
				</div>
				<div class="input_wrap">
					<input type="submit" value="Submit" class="submit_btn"/>
				</div>
			</div>
		</form>
	</div>
</div>

        </div>
    )
}