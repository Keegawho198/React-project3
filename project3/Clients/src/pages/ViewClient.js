



import React, { useEffect, useState } from 'react';


import './style.css';

import API from '../utils/api'
import _ from 'lodash';
import { Link } from "react-router-dom";
import { Form, Col } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';




const ViewClient = (props) => {

  const [tableData, setTableData] = useState([]);
  const [Client, Setclient] = useState({});

  useEffect(() => {

    console.log("useEffect hit")
    loadClient();
    loaduserPrograms();

  }, []);

  function loadClient() {
    API.getUser(props.match.params.id)
      .then(res =>

        Setclient(res.data)

      )
      .catch(err => console.log(err));
  }

  function loaduserPrograms() {
    let task = []

    API.getUser(props.match.params.id)
      .then(res => {
        console.log(res)
        res.data.programs.map((value, index) => {
          value.exercise.map((exercise) => {
            console.log(exercise);
            exercise.p_id = value._id;
            exercise._id = exercise._id;
            exercise.dayNum = value.dayNum;
            exercise.focus = value.focus;
            task.push(exercise);
          })
        }
        )
        setTableData(task);
        console.log(task)
      }
      )
      .catch(err => console.log(err));
  };



  const data = {
    columns: [{
      label: 'Day Number',
      field: 'dayNum',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Focus',
      field: 'focus',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Exercise Name',
      field: 'exerciseName',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Sets',
      field: 'sets',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Reps',
      field: 'reps',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Tempo',
      field: 'tempo',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Rest',
      field: 'rest',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Complete',
      field: 'Handle',
      sort: 'asc',
      width: 100
    },
    ],

    rows: tableData.map(tableData => {
      return {
        dayNum: tableData.dayNum,
        focus: tableData.focus,
        exerciseName: tableData.exerciseName,
        sets: tableData.sets,
        reps: tableData.reps,
        tempo: tableData.tempo,
        rest: tableData.rest,
        'Handle': <MDBBtn className="btn-red" style={{ backgroundColor: "green", color: "white" }}
          color="red" size="sm" onClick={() => deleteProgram(tableData.p_id, tableData._id)}>Done</MDBBtn>
      }

    })



  }

  function deleteProgram(p_id, e_id) {
    console.log("delete hitting");
    console.log(p_id, e_id);
    API.deleteProgram(p_id, e_id)
      .then(res => loaduserPrograms())
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="text-center">
        <div className="color text-center">
          <br></br>
          <img src={Client.img} alt="placeholder" />

          <h1 className="white">Name: {Client.name}</h1>
          <br></br>
          <p className="white">Email: {Client.email}</p>
          <br></br>

          <p className="white">Weight: {Client.weight}</p>
          <br></br>

          <p className="white">Weight Goal: {Client.goalWeight}</p>
          <br></br>

          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <p className="white"> Age: {Client.age} </p>
              </div>

              <div class="col-sm-3">
                <p className="white">Gender: {Client.gender} </p>
              </div>

              <div class="col-sm-3">
                <p className="white">Height: {Client.height}</p>
              </div>

              <div class="col-sm-3">
                <p className="white">Energy Expenditure: {Client.energyExpenditure} </p>
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
        <button type="button" className="btn btn-lg btn-primary text-center" ><Link to={"/program"} style={{ color: 'white' }}>Set Workout for Today</Link></button>
        <br></br>


        <br></br>
        <br></br>



        <MDBDataTable className="tableDisplay"
          responsive="sm"
          noBottomColumns
          striped
          bordered
          hover
          data={data}
          sorting={false}

        />

      </div>
      <br></br>


    </div>
  );
}



export default ViewClient;