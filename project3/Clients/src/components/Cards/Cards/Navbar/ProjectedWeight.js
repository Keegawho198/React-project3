import React from 'react';
import './style.css';
import Chart from './SubComponents/Chart'


function ProjectedWeight(){
    return(
    <div class="card" id="projected">
  <div class="card-body" id="projectBody">
 <Chart/>
  </div>
</div>
    )
}

export default ProjectedWeight;