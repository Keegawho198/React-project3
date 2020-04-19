import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import API from '../../../../../utils/api'

function Chart(props) {

  const [chartData, setChartData] = useState({});


  useEffect(() => {
    console.log(props.user);
    if (props.user) {
      changeChart();
    }
  }, [props.user])



  function changeChart() {
    console.log(props.user);
    let data = {
      labels: props.user.week,
      datasets: [
        {
          label: 'Weight',
          fill: false,
          lineTension: 0.1,
          type: 'line',
          backgroundColor: '#d7ded4',
          borderColor: '#d7ded4',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#d7ded4',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          responsive: false,
          pointHoverBackgroundColor: '#d7ded4',
          pointHoverBorderColor: '#d7ded4',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.user.weights
        },
        {
          label: 'Sleep Pattern',
          fill: false,
          lineTension: 0.1,
         
          backgroundColor: '#3d5362',
          borderColor: '#3d5362',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#3d5362',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          skipLabels : 3,
          responsive: false,
          pointHoverBackgroundColor: '#3d5362',
          pointHoverBorderColor: '#3d5362',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.user.sleep
        },
      ]
    };

    setChartData(data);
    console.log(props.user.weights);
    console.log(props.user.week);
    console.log(data);
  }



  return (
    <>
      <Bar
        data={chartData}
        width={1}
        height={1}
        
        options={{ maintainAspectRatio: false }}
      />
    </>
  )

}

export default Chart;