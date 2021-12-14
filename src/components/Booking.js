import { Form } from 'react-bootstrap';
import Navb from '../Navb';
import React,{useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { Input, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Navbar,Container } from 'react-bootstrap';

function Booking() {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)

  const[result,setResult]=useState([])

    const[user,setUser]=useState({
        date:"",
        flightFrom:"",
        flightTo:""
    });
    
    const {date,flightFrom,flightTo}=user; //destruction other wise u need to give in put as user.email,user,password
    
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const onSubmit=async e=>{
        e.preventDefault();
    const url="http://localhost:9001/lists/validate";
        const data={
          // "id":1,
         date:date,
         flightFrom:flightFrom,
         flightTo:flightTo
        }
    
    axios.post(url,data).then(
      res=>{
        
        // result=res.data
        setResult(res.data)

         
       
      }
      
    )
    }
  
  return (
      <div>
          <Navbar bg="#060b26" variant="dark" expand="lg">
   <Navb />


   <Container>

     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

     </Navbar.Collapse>
   </Container>
 </Navbar>
           <br/>
           <br/>
        <div className="outer">
        <div className="inner">
     
            <form onSubmit={e=>onSubmit(e)}>
                <h3>Booking</h3>
                <div>
                  <div className="form-group" >
                    <label htmlFor="appointmentDate">Booking Date</label>
                    <input
                      type="text"
                      className="form-control"
                      name="date"
                      placeholder="dd-mm-yyyy"
                      
                      value={date}
                      onChange={e => onInputChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="FromId">From:</label>
                    <select className="form-control" id="FromId" 
                    name="flightFrom"
                    value={flightFrom}
                    onChange={e => onInputChange(e)}>
                        <option>Select</option>
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ToId">To:</label>
                    <select className="form-control" id="ToId"   
                    name="flightTo"
                    value={flightTo}
                    onChange={e => onInputChange(e)}>
                        <option>Select</option>
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                    </select>
                    <br/>
                  </div>
                  <button type="submit" onClick={onClick} className="btn btn-dark btn-lg btn-block">Check</button>
                </div>
            </form>

          </div>
        </div>
        <div>
           
            {showResults ? <div className="container">
                <div className="py-4">
                    <h1>Available Flights Data</h1>
                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Flight-Id</th>
                                <th scope="col">Flight Name</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Date</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {result.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.flightId}</td>
                                    <td>{user.flightName}</td>
                                    <td>{user.flightFrom}</td>
                                    <td>{user.flightTo}</td>
                                    <td>{user.date}</td>
                                    <td>{user.price}</td>
                                    <td>
                  
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/pass/book/${user.flightId}`}
                  >
                    {localStorage.setItem("fid",user.flightId)}
                    Book
                  </Link>
</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
                : null}


        </div>
   </div>
      )
    
}

export default Booking;