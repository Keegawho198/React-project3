import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
import API from '../../utils/api'
import _ from 'lodash'; 
//var _ = require('lodash')
import './style.css';



const TableDisplay = (props) => {
  const [tableData, setTableData] = useState([]);
  const[dayNum, setDayNum] = useState(0);
  useEffect(() => {
    console.log("useEffect hit")
    setDayNum(props.dayNum);
    setTableData([...tableData, props.data])


    //console.log(props.data)
  }, [props.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("btn work");


    //connect to get/ backend get

    console.log('HELLO');
    console.log(API);
    console.log(tableData);

    var apiData = {
      dayNum: tableData.dayNum,
      exercise: _.omit(tableData, "dayNum"),
    }

    console.log(apiData);

    API.saveProgram({
      dayNum: apiData.dayNum,
      exercise: [{
        exerciseName: apiData
      }]
      // name: tableData.exerciseName
    })
      .catch(err => console.log(err));
  };

  return (
    <div>

      <table className="table">
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
              </tr>)
            )}

        </tbody>
      </table>

      <button type="button" className="btn btn-lg btn-primary " onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TableDisplay;

