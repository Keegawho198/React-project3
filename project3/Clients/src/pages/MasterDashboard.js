import React, { useState, useEffect } from "react";
import "./style.css";
import { Navbar } from '../components/Cards/Cards/Navbar/Navbar';

import {TodaysIntake} from '../components/Cards/Cards/Navbar/TodaysIntake'

import API from '../utils/api'




function MasterDashboard() {
  const [userList, setUserList] = useState([])
 
  useEffect(() => {
    loadUsers()
   
  }, [])


  function loadUsers() {
    API.getUsers()
      .then(res => 
        setUserList(res.data)
        
      )
      
      .catch(err => console.log(err));
  };



  return (
   
    <div >
      <Navbar />
      
     
     
      <div className="row">
       
      <TodaysIntake><h2>Hello  ! </h2>
         </TodaysIntake>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="container">

      <h2 id="clientHeader">  Clients</h2>
      </div>
      
     

<div className="row">
<div className="col-lg-3" style={{marginLeft:"5%"}}>
               
               <div className="tile">
               <div className="profile_pic" style={{backgroundColor:"white"}}>
       <img src="https://images.unsplash.com/photo-1563199611-373f88ed91ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
       <p className="title">Gus Agung</p>
       <br></br>
     
         <button type="button" className="btn btn-primary" style={{marginLeft:"38%"}}>View More</button>
      
       
      
     </div>
   </div>
 
             
   <br></br>
      <br></br>       
             </div>
             <div className="col-lg-3" style={{marginLeft:"5%"}}>
               
               <div className="tile">
               <div className="profile_pic" style={{backgroundColor:"white"}}>
       <img src="https://images.unsplash.com/photo-1563199611-373f88ed91ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
       <p className="title">Gus Agung</p>
       <br></br>
     
         <button type="button" className="btn btn-primary" style={{marginLeft:"38%"}}>View More</button>
      
       
      
     </div>
   </div>
 
             
   <br></br>
      <br></br>       
             </div>
             <div className="col-lg-3" style={{marginLeft:"5%"}}>
               
               <div className="tile">
               <div className="profile_pic" style={{backgroundColor:"white"}}>
       <img src="https://images.unsplash.com/photo-1563199611-373f88ed91ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
       <p className="title">Gus Agung</p>
       <br></br>
     
         <button type="button" className="btn btn-primary" style={{marginLeft:"38%"}}>View More</button>
      
       
      
     </div>
   </div>
 
             
   <br></br>
      <br></br>  
           
             </div>
             <div className="col-lg-3" style={{marginLeft:"5%"}}>
               
               <div className="tile">
               <div className="profile_pic" style={{backgroundColor:"white"}}>
       <img src="https://images.unsplash.com/photo-1563199611-373f88ed91ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
       <p className="title">Gus Agung</p>
       <br></br>
     
         <button type="button" className="btn btn-primary" style={{marginLeft:"38%"}}>View More</button>
      
       
      
     </div>
   </div>
 
             
   <br></br>
      <br></br>       
             </div>
             <div className="col-lg-3" style={{marginLeft:"5%"}}>
               
               <div className="tile">
               <div className="profile_pic" style={{backgroundColor:"white"}}>
       <img src="https://images.unsplash.com/photo-1563199611-373f88ed91ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
       <p className="title">Gus Agung</p>
       <br></br>
     
         <button type="button" className="btn btn-primary" style={{marginLeft:"38%"}}>View More</button>
      
       
      
     </div>
   </div>
 
             
   <br></br>
      <br></br>       
             </div>
             <div className="col-lg-3" style={{marginLeft:"5%"}}>
               
               <div className="tile">
               <div className="profile_pic" style={{backgroundColor:"white"}}>
       <img src="https://images.unsplash.com/photo-1563199611-373f88ed91ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
       <p className="title">Gus Agung</p>
       <br></br>
     
         <button type="button" className="btn btn-primary" style={{marginLeft:"38%"}}>View More</button>
      
       
      
     </div>
   </div>
 
             
   <br></br>
      <br></br>       
             </div>

  

</div>



      
    </div>
  
    



  );
}

export default MasterDashboard