import React from 'react';
import './style.css'

export function TodaysIntake(props){
    return(
<div class="card" id="intake">
  <div class="card-body" id="mainSection">
    <div className="row">
    <div className="col">
    <h2>Hello {props.child}!</h2>
  <h4>You're currently on track with the progress keep it up!</h4>
  </div>
<div className="col">
  
</div>
</div>
   
  <div className="row"> 
  <br></br>
  
    </div>
  </div>
</div>
    )
}

