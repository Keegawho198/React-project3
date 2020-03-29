import React from 'react';
import './style.css';
import Chart from './SubComponents/Chart'


function ProjectedWeight(props){
    return(

      <div className="card-projected" >
        <div className="card-body" >
          <Chart user={props.user} />
        </div>
      </div>

    )
}

export default ProjectedWeight;