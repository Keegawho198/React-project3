import React, { useEffect, useState } from 'react';

import API from '../../utils/api'
import _ from 'lodash';

import { Form, Col } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';



const Viewprogram = (props) => {
  const [tableData, setTableData] = useState([]);
  const [userProgram, setUserprogram] = useState({
    id: "",
    tag: "",
    name: "",
    age: "",
    programs: [

    ],

  });



  //const [dayNum, setDayNum] = useState(0);
  useEffect(() => {
    console.log("useEffect hit")
    loaduserPrograms();
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
            console.log(exercise);
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


  function loaduserPrograms() {
    let task = []
    API.getUser("5e7d85ea5c04ae499851c956")
      .then(res => {
        res.data.programs.map((value, index) => {
          value.exercise.map((exercise) => {
            console.log(exercise);
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
          color="red" size="sm" onClick={() => deleteProgram(tableData._id)} >Complete</MDBBtn>
      }
      // <MDBBtn color="purple" size="sm">Button</MDBBtn>
    })



  }


  function deleteProgram(id) {
    //new array 
    //loop through old array
    //return everything in old array in new array except for 
    // chosen .id

    console.log("delete hitting");
    console.log(id);
    API.deleteProgram(id)
      .then(res => loadPrograms())
      .catch(err => console.log(err));
  }

  // function handleChange(event) {

  //   console.log(event.target.value);

  //   setFilterData({ dayNum: event.target.name });
  //   console.log(setFilterData);

  // console.log(event);
  // console.log(event.traget.name);

  // event.data.map((value, index) => {
  //   console.log(value);
  // })
  // return (
  //   <div>
  //   {
  //     tableData
  //         .map(row => (
  //       <tr key={row._id == event.target.value}>
  //         {/* //only return data where tableData.dayNum == value */}
  //           <ul>
  //             {filterData}
  //             </ul>
  //         <td>{row.dayNum == event.target.value}</td>
  //         <td>{row.focus}</td>
  //         <td>{row.exerciseName}</td>
  //         <td>{row.sets}</td>
  //         <td>{row.reps}</td>
  //         <td>{row.tempo}</td>
  //         <td>{row.rest}</td>
  //         <td><DeleteBtn onClick={() => deleteProgram(row._id)} /></td>
  //       </tr>)

  //     )

  //   }
  //   </div>
  // )


  //console.log(tableData);
  //};

  console.log(tableData);
  return (
    <div>
      {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Filter by Day Number</Form.Label>
      <Form.Control as="select" value="Choose..." onChange={handleChange}>
        <option value="0"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </Form.Control>
    </Form.Group> */}

      <br></br>

      {/* <table className="table-form">
        <thead>
          <tr>
            <th scope="col">Day Number</th>
            <th scope="col">Focus</th>
            <th scope="col">Exercise Name</th>
            <th scope="col">Sets</th>
            <th scope="col">Reps</th>
            <th scope="col">Tempo</th>
            <th scope="col">Rest</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody> */}


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

      {/* </tbody>
      </table> */}
    </div>
  );
}

export default Viewprogram;

//deletebtn not working

// onchange on dropdown, loop through tabledata. 
//only return data where tableData.dayNum == value
// set value to filtered data array, filter data to display instead of table data.

//