import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
// import DeleteBtn from "../components/DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
//var _ = require('lodash')
// import './style.css';



const Viewprogram = (props) => {
  const [tableData, setTableData] = useState([]);
  const [dayNum, setDayNum] = useState(0);
  useEffect(() => {
    console.log("useEffect hit")
    loadPrograms();
    // setDayNum(props.dayNum);
    // setTableData([...tableData, props.data])


    //console.log(props.data)
  }, []);

  function loadPrograms() {
    let task = []
    API.getPrograms()
      .then(res => {
        res.data.map((value, index) => {
          value.exercise.map((exercise) => {
            // console.log(exercise);
            exercise.dayNum = value.dayNum;
            task.push(exercise);
          })
        }
        )
        setTableData(task);
        //here setfilterData(task)
      }


        //loop through res.data
        //loop through row.exercise
        //add daynum to all exercise
        //set exerciese to tableData

        /*
          {
            daynum: ""
            exercise:[{},{}]
          }

          {
            daynum: "",
            exerciseName,: ""
            reps: ""
          },
          {
            daynum: "",
            exerciseName,: ""
            reps: ""
          }
        */
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
        
      <table className="table-form">
        <thead>
          <tr>
            <th scope="col">Day Number</th>
            <th scope="col">Exercise Name</th>
            <th scope="col">Sets</th>
            <th scope="col">Reps</th>
            <th scope="col">Tempo</th>
            <th scope="col">Rest</th>
          </tr>
        </thead>
        <tbody>

          {tableData
            .map(row => (
              <tr>
                <td>{row.dayNum}</td>

                <td>{row.exerciseName}</td>
                <td>{row.sets}</td>
                <td>{row.reps}</td>
                <td>{row.tempo}</td>
                <td>{row.rest}</td>
                {/* <DeleteBtn onClick={() => deleteProgram(program._id)} /> */}
              </tr>)
            )}

        </tbody>
      </table>
    </div>
  );
}

export default Viewprogram;



// onchange on dropdown, loop through tabledata. 
//only return data where tableData.dayNum == value
// set value to filtered data array, filter data to display instead of table data.