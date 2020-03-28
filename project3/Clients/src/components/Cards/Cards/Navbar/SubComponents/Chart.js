import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import API from '../../../../../utils/api'

function Chart() {

  const [chartData, setChartData] = useState({});
  const [user, setUser] = useState({});
  

  useEffect(() => {
    loadUser();
 
  }, [])

  useEffect(() => {
    console.log(user);
    if (user) {
      changeChart();
    }
  }, [user])

  function loadUser() {
     
      API.getUser("5e7e913118bec020a43b85ec")
        .then(res => {
          console.log(res);
          setUser(res.data);
         
        }
        )
        .catch(err => console.log(err));

  
  };

  function changeChart() {
    console.log(user);
    let data = {
      labels: user.week,
      datasets: [
        {
          label: 'Weight',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          responsive: true,
          width:"30%",
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: user.weights
        }
      ]
    };
    
    setChartData(data);
    console.log(user.weights);
    console.log(user.week);
    console.log(data);
  }

  return (
    <div>
      <Line
        data={chartData}

      />
    </div>
  )

}

export default Chart;