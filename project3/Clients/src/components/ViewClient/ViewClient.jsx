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
    <div className="text-center">
    
    <img src={placeholder} alt="placeholder"/>

        
    </div>
  );
}

export default ViewClient;