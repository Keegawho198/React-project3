import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
//import DeleteBtn from "../DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
// import './style.css';

// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Form, Col } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

//import {  MDBTableEditable } from "mdbreact";

// import DropdownButton from 'react-bootstrap/DropdownButton'



const Viewprogram = (props) => {
  const [tableData, setTableData] = useState([]);
  //const [filterData, setFilterData] = useState([]);

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
          color="red" size="sm" onClick={() => deleteProgram(tableData._id)} >Complete</MDBBtn>

        // clickEvent: () => this.handleClick(params)
      }
      // <MDBBtn color="purple" size="sm">Button</MDBBtn>
    })



  }

  //const [dayNum, setDayNum] = useState(0);
  useEffect(() => {
    console.log("useEffect hit")
    loadPrograms();
    // setDayNum(props.dayNum);
    //setTableData([...tableData, props.data])
    //console.log(props.data)
  }, []);

  function loadPrograms() {
    //console.log(tableData)
    let task = []
    API.getPrograms()
      .then(res => {
        res.data.map((value, index) => {
          value.exercise.map((exercise) => {
            // console.log(exercise);
            exercise._id = exercise._id;
            exercise.dayNum = value.dayNum;
            exercise.focus = value.focus;
            task.push(exercise);
          })
        }
        )
        setTableData(task);
        console.log(task)
        //setFilterData(task);
        //here setfilterData(task)
      }
        //loop through res.data
        //loop through row.exercise
        //add daynum to all exercise
        //set exerciese to tableData

      )
      .catch(err => console.log(err));
  };


  function deleteProgram(id) {
    console.log("delete hitting");
    console.log(id);
    API.deleteProgram(id)
      .then(res => loadPrograms())
      .catch(err => console.log(err));
  }

  //new array 
    //loop through old array
    //return everything in old array in new array except for 
    // chosen .id


  //console.log(tableData);
  return (
    <div>
      <br></br>
      <br></br>

      <MDBDataTable
        noBottomColumns
        striped
        bordered
        hover
        data={data}
        sorting={false}

      />
      {/* {tableData
            .map(row => (
              <tr key={row._id}>
                <td>{row.dayNum}</td>
                <td>{row.focus}</td>
                <td>{row.exerciseName}</td>
                <td>{row.sets}</td>
                <td>{row.reps}</td>
                <td>{row.tempo}</td>
                <td>{row.rest}</td>
                <td><DeleteBtn onClick={() => deleteProgram(row._id)} /></td>
              </tr>)
            )} */}

    </div>
  );
}

export default Viewprogram;

//deletebtn not working