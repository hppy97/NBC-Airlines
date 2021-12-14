import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Users from './components/pages/Users';
import EditUser from './components/users/EditUser';
import User from './components/users/User';


import Admin from './components/Admin/Admin';
import Availablelist from './components/Admin/Availablelist';
import Passenger from './components/Admin/Passenger';
import EditPassenger from './components/Admin/EditPassenger';
import ViewPassenger from './components/Admin/ViewPassenger';
import Flights from './components/Admin/Flights';
import Booking from './components/Booking';
import AddFlight from './components/Admin/AddFlight';
import AddList from './components/Admin/AddList';
import Main from './components/pages/Main';
import EditList from './components/Admin/EditList';
import PassengerForm from './components/pages/PassengerForm';
import Home2 from './Home2';
import Booking2 from './components/Booking2';
import Payment from './components/Payment';
import AdminList from './components/Admin/AdminList';
import PassengerForm2 from './components/pages/PassengerForm2';
import BoardingPass from './components/pages/BoardingPass';
// import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
   
   <Router>
     {/* <Navbar/> */}
       <Switch>
       <Route exact path="/" component={Main}></Route>
       <Route path="/login" component={Login}></Route>
       <Route exact path="/register" component={Signup}></Route>
       <Route exact path="/home" component={Home}></Route>
       <Route exact path="/home2" component={Home2}></Route>
       <Route exact path="/display" component={Users}></Route>
       <Route exact path="/users/edit/:id" component={EditUser}></Route>

       <Route exact path="/passenger/edit/:id" component={EditPassenger}></Route>
      
       <Route exact path="/list/edit/:id" component={EditList}></Route>
       <Route exact path="/pass/book/:id" component={PassengerForm}></Route>
       <Route exact path="/pass2/book/:id" component={PassengerForm2}></Route>
       <Route exact path="/users/add" component={Signup}></Route>
       <Route exact path="/users/:id" component={User} />
       <Route exact path="/passenger/:id" component={ViewPassenger} />
     
       <Route exact path="/flightsList" component={Flights}></Route>
       <Route exact path="/addflight" component={AddFlight}></Route> 
       <Route exact path="/addlist" component={AddList}></Route>
       <Route exact path="/adminview" component={AdminList}></Route> 
       <Route exact path="/admin" component={Admin}></Route> 
       <Route exact path="/availableList" component={Availablelist}></Route> 
       <Route exact path="/passengerList" component={Passenger}></Route>
       <Route exact path="/booking" component={Booking}></Route>
       <Route exact path="/payment" component={Payment}></Route>
       <Route exact path="/booking2" component={Booking2}></Route>
       <Route exact path="/ticket" component={BoardingPass}></Route>
       </Switch>

     </Router>




    </div>
  );
}

export default App;
