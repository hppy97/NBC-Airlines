import React from 'react'
import './boardingpass.css';
import { useState , useEffect} from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BoardingPass() {
    

      


    return (
        <div>
            
            <Link to="/home2">
     <Button className="butt" variant="secondary">Return To Home</Button>{' '}
     </Link>

    <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
                
                <div class="col-sm-6" style={{display:'flex'}}>
                    <img src="data:image/jpeg;base64,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" style={{width:60}}/>
                   <label style={{fontSize:20,marginLeft:10}}>BRILLIANS AIRLINES</label>
                    <label style={{fontSize:20,marginLeft:500,marginTop:5}}>Boarding Pass</label>
                 
                    </div>
                <div class="col-sm-6">
                </div>
            </div>
          
        </div>
        <div  style={{margin:"auto"}}>
        <label style={{fontSize:30}}>NAME:&nbsp;</label>
        <label style={{fontSize:30}}>{localStorage.getItem("name")}</label>
        </div>
        <div  style={{margin:"auto",marginTop:50}}>
        
        <label style={{fontSize:30}}>{localStorage.getItem("from")}&nbsp;&nbsp;</label>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhdX_CEXTdgbrSCiKVoBCeYWl9yFaUE-tag&usqp=CAU" style={{width:150,height:40}}/>
        
       
        <label style={{fontSize:30}}>&nbsp;&nbsp;{localStorage.getItem("to")}</label>
       

        </div>
        <div  style={{margin:"auto",marginTop:50}}>
        <label style={{fontSize:30}}>DATE:&nbsp;</label>
        <label style={{fontSize:30}}>{localStorage.getItem("date")}&nbsp;&nbsp;</label>
        
        <label style={{fontSize:30}}>&nbsp;&nbsp;FLIGHTID:</label>
       
        <label style={{fontSize:30}}>&nbsp;{localStorage.getItem("fid")}</label>
       

        </div>
    </div>     

        </div>
    )
}