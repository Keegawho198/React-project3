import React from 'react';
import './style.css'

export function TodaysIntake({children}){
    return(
<div class="card" id="intake" style={{height:"148px"}}>
  <div class="card-body" id="mainSection">
    <div className="row">
    <div className="col">
    <h2>{children}</h2>

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

