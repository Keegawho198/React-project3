import React from "react";
import "./style.css";
import { Navbar } from '../components/Cards/Cards/Navbar/Navbar';
import ProjectedWeight from '../components/Cards/Cards/Navbar/ProjectedWeight';
import {TodaysIntake} from '../components/Cards/Cards/Navbar/TodaysIntake'
import {TodaysWorkout} from '../components/Cards/Cards/Navbar/TodaysWorkout'
import {FoodToday} from '../components/Cards/Cards/Navbar/FoodToday'




function Dashboard() {
  return (
   
    <div >
      <Navbar />
      
     
     
      <div className="row">
       
      <TodaysIntake/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     
      <br></br>
      <div className="row">
      <div class="col">
      <ProjectedWeight/>
    </div>
    <div class="col">
      <div className="row">
        <FoodToday/>
        <TodaysWorkout/> 
    <br></br>
    
    
    </div>
    </div>
    
      </div>
     

      
    </div>
  
    



  );
}

export default Dashboard