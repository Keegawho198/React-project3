import React from 'react';
import './style.css'

export function FoodToday(props){
    return(
<div class="card" id="daysFood">
  <div class="card-body">
    <h3 style={{textAlign: "center"}}>{props.child}</h3>
   
  <div className="row"> 
  <br></br>
 
   
    </div>
  </div>
</div>
    )
}

