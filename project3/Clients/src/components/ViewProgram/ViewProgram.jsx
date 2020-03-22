import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
// import DeleteBtn from "../components/DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
//var _ = require('lodash')
// import './style.css';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";




const Viewprogram = (props) => {
  const [tableData, setTableData] = useState([]);
  //const [dayNum, setDayNum] = useState(0);
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
            console.log(exercise);
            exercise.dayNum = value.dayNum;
            exercise.focus = value.focus;
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

      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <MDBDropdown size="lg" className="text-center">
        <MDBDropdownToggle caret color="primary" >
        Filter Day Number
        </MDBDropdownToggle>
        <MDBDropdownMenu color="danger" basic>
          <MDBDropdownItem>1</MDBDropdownItem>
          <MDBDropdownItem>2</MDBDropdownItem>
          <MDBDropdownItem>3</MDBDropdownItem>
          <MDBDropdownItem>4</MDBDropdownItem>
          <MDBDropdownItem>5</MDBDropdownItem>
          <MDBDropdownItem>6</MDBDropdownItem>
          <MDBDropdownItem>7</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      <br></br>

      <table className="table-form">
        <thead>
          <tr>
            <th scope="col">Day Number</th>
            <th scope="col">Focus</th>
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
                <td>{row.focus}</td>
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

//focus not showing up. only shows up as undefined in console

// onchange on dropdown, loop through tabledata. 
//only return data where tableData.dayNum == value
// set value to filtered data array, filter data to display instead of table data.