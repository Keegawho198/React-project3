import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
//import DeleteBtn from "../DeleteBtn";
//import API from '../../utils/api'
import _ from 'lodash';

import './style.css';

//import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
//import viewClient from '../../pages/ViewClient';
// import { Dropdown, DropdownMenu } from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton'

import placeholder from "./img/placeholder.jpg"
//import Main from "./ProfilePic.jpg"


const ViewClient = (props) => {
  // const [tableData, setTableData] = useState([]);
  // const [filterData, setFilterData] = useState([]);
  //const [dayNum, setDayNum] = useState(0);
  useEffect(() => {
    console.log("useEffect hit")
    // loadExercises();
    // setDayNum(props.dayNum);
    // setTableData([...tableData, props.data])
    //console.log(props.data)
  }, []);

  // function loadExercises() {
  //   let task = []
  //   API.getExercise()
  //     .then(res => {
  //       res.data.map((value, index) => {
  //         console.log(res);
  //         const exercise = {};
  //         exercise._id = value._id;
  //         exercise.exerciseName = value.exerciseName;
  //         exercise.instructions = value.instructions;
  //         exercise.img = value.img;

  //         task.push(exercise);


  //       }
  //       )
  //       setTableData(task);
  //       setFilterData(task);
  //       //here setfilterData(task)
  //     }
  //       //loop through res.data
  //       //loop through row.exercise
  //       //add daynum to all exercise
  //       //set exerciese to tableData

  //     )
  //     .catch(err => console.log(err));
  // };


  // function deleteExercise(id) {
  //   API.deleteExercise(id)
  //     .then(res => loadExercises())
  //     .catch(err => console.log(err));
  // }

  // function handleChange(event) {
  //   // event: event.target.value;
  //   console.log(event.target.value);
  //   console.log(event.target.name);

  //   setFilterData({ dayNum: event.target.name });
  //   //console.log(setFilterData);


  //   event.value.map((value, index) => {
  //     console.log(value);
  //   })

  // {tableData
  //   .map(row => (
  //     <tr key={row._id}>
  //       <td>{row.exerciseName}</td>
  //       <td>{row.instructions}</td>
  //       <td>{row.img}</td>
  //       <td><DeleteBtn onClick={() => deleteExercise(row.id)} /></td>
  //     </tr>)
  //   )}

  //};

  return (
    <div>
      <div className="text-center">
        <div className="color text-center">
          <br></br>
          <img id="placeHolder" src={placeholder} alt="placeholder" />

          <h1 className="white">Name Here</h1>
          <p className="white">Email.Email@email.com Here</p>
          <br></br>

          <p className="white">Current Weight : Weight Here</p>
          <br></br>

          <p className="white">Weight Goal: Goal Here</p>
          <br></br>

          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <p className="white"> Age: Age here </p>
              </div>

              <div class="col-sm-3">
                <p className="white">Gender: Gender </p>
              </div>

              <div class="col-sm-3">
                <p className="white">Height: height (CM or something)</p>
              </div>

              <div class="col-sm-3">
                <p className="white">Calories Expenditure: 1000kj </p>
              </div>

            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>


        </div>


        <br></br>


        <h1>Current Workout</h1>
<br></br>
        <button type="button" className="btn btn-lg btn-primary text-center" onClick="">Set Workout for Today</button>
        <br></br>


        <br></br>
        <br></br>



        <table align="center" className="table-form">
          <thead>
            <tr>
              <th scope="col">Focus</th>
              <th scope="col">Exercise Name</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope="col">Tempo</th>
              <th scope="col">Rest</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>


            <tr>
              <td>Chest</td>
              <td>Bench Press</td>
              <td>5</td>
              <td>5</td>
              <td>Medium</td>
              <td>30</td>
              <td></td>

            </tr>


          </tbody>
        </table>

      </div>
      <br></br>

      <p>Test</p>
    </div>
  );
}

export default ViewClient;