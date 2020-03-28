import React, { useState, useEffect } from "react";
import "./style.css";
import { Navbar } from '../components/Cards/Cards/Navbar/Navbar';
import { Link } from "react-router-dom";
import {TodaysIntake} from '../components/Cards/Cards/Navbar/TodaysIntake'

import API from '../utils/api'




function MasterDashboard() {
 const [master,Setmaster]=useState({
  id:"",
  tag:"",
  email: "",
  password: "",
  name: "",
  qualifications: "",
  bio: "",
  image: "",
  users: [
    
  ],
  
 });
 
  useEffect(() => {
    loadMaster()
   
  }, [])


  function loadMaster() {
    API.getMaster("5e7e90f018bec020a43b85eb")
      .then(res =>
        Setmaster({
          id:res.data._id,
          name:res.data.name,
          email:res.data.email,
          password:res.data.password,
          qualifications:res.data.qualifications,
          bio:res.data.bio,
          image:res.data.image,
          users:res.data.users


        })

      )

      .catch(err => console.log(err));
  };

console.log(master);

  return (

    <div >
      <Navbar />



      <div className="row">
       
      <TodaysIntake><h2>Hello {master.name} ! </h2>
      <h2>Please add the excercises for all your clients</h2>
      <img src={master.image} style={{ borderRadius: "50%", height:"200%",marginTop:"-130px", marginLeft:"1200px", position:"absolute"}}></img>
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
{master.users.map((userList)=>{
            return(
              <div className="col-lg-3" style={{marginLeft:"5%"}}>
               
              <div className="tile" key={userList._id}>
              <div className="profile_pic" style={{backgroundColor:"white"}} >
      <img src={userList.image}></img>
            <p className="title">{userList.name}</p>
      <br></br>
    
        <button type="button" className="btn btn-primary" style={{marginLeft:"38%"}}><Link to={"/viewClient/" + userList._id} style={{color:"white"}}>View More</Link></button>
     
      
     
    </div>
  </div>

            
  <br></br>
     <br></br>       
            </div>
            )
        })} 
   


  

</div>



      
    </div>





  );
}

export default MasterDashboard