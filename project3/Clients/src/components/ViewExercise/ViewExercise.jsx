import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
import DeleteBtn from "../DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
import './style.css';

// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBDataTable } from 'mdbreact';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
// import { Dropdown, DropdownMenu } from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton'


const ViewExercise = (props) => {
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  //const [dayNum, setDayNum] = useState(0);

  const data = {
    columns: [{
      label: 'Exercise Name',
      field: 'exerciseName',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Instructions',
      field: 'instructions',
      sort: 'asc',
      width: 250
    },
    {
      label: 'Img',
      field: 'img',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Delete',
      field: 'Handle',
      sort: 'asc',
      width: 100
    },
    ],
    
      rows: tableData.map(tableData => {
        return {
          
          exerciseName: tableData.exerciseName,
          instructions: tableData.instructions,
          img: tableData.img,

          
          'Handle': <MDBBtn className="btn-red" style={{backgroundColor:"red", color:"white"}}
          color="red" size="sm" onClick={() => deleteExercise(tableData._id)} >Delete</MDBBtn>

          // clickEvent: () => this.handleClick(params)
        }  
        // <MDBBtn color="purple" size="sm">Button</MDBBtn>
      })
      
    

  }

  useEffect(() => {
    console.log("useEffect hit")
    loadExercises();
    // setDayNum(props.dayNum);
    // setTableData([...tableData, props.data])
    //console.log(props.data)
  }, []);

  function loadExercises() {
    let task = []
    API.getExercise()
      .then(res => {
        res.data.map((value, index) => {
          console.log(res);
          const exercise = {};
          exercise._id = value._id;
          exercise.exerciseName = value.exerciseName;
          exercise.instructions = value.instructions;
          exercise.img = value.img;

          task.push(exercise);

        
        }
        )
        setTableData(task);
        setFilterData(task);
        //here setfilterData(task)
      }
        //loop through res.data
        //loop through row.exercise
        //add daynum to all exercise
        //set exerciese to tableData

      )
      .catch(err => console.log(err));
  };


  function deleteExercise(id) {
    API.deleteExercise(id)
      .then(res => loadExercises())
      .catch(err => console.log(err));
  }

  // function handleChange(event) {
  //   // event: event.target.value;
  //   console.log(event.target.value);
  //   console.log(event.target.name);

  //   setFilterData({ dayNum: event.target.name });
  //   //console.log(setFilterData);


  //   // event.value.map((value, index) => {
  //   //   console.log(value);
  //   // })

  //   // {tableData
  //   //   .map(row => (
  //   //     <tr key={row._id}>
  //   //       <td>{row.exerciseName}</td>
  //   //       <td>{row.instructions}</td>
  //   //       <td>{row.img}</td>
  //   //       <td><DeleteBtn onClick={() => deleteExercise(row.id)} /></td>
  //   //     </tr>)
  //   //   )}

  // };

  return (
    <div>
      {/* <DropdownMenu id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownMenu> */}

    {/* <div className="form-group">
    <label htmlFor="exampleInputEmail1">Filter Exercise Name</label>
    <input type="text" className="form-control" id="inputExercise" placeholder="Enter Exercise Filter"/>
      </div> */}

      {/* <MDBDropdown size="lg" className="text-center" onChange={handleChange}>
        <MDBDropdownToggle caret color="primary" >
          Filter Exercise
        </MDBDropdownToggle>
        <MDBDropdownMenu color="danger" >
          <MDBDropdownItem value="1" >1</MDBDropdownItem>
          <MDBDropdownItem value="2" >2</MDBDropdownItem>
        
        </MDBDropdownMenu>
      </MDBDropdown> */}

      <br></br>

      <MDBDataTable
        noBottomColumns
        striped
        bordered
        hover
        data={data}
        sorting={false}
      />

      {/* <table className="table-form">
        <thead>
          <tr>
            <th scope="col">Exercise Name</th>
            <th scope="col">Instructions</th>
            <th scope="col">Image</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

          {tableData
            .map(row => (
              <tr key={row._id}>
                <td>{row.exerciseName}</td>
                <td>{row.instructions}</td>
                <td>{row.img}</td>
                <td><DeleteBtn onClick={() => deleteExercise(row.id)} /></td>
              </tr>)
            )}

        </tbody>
      </table> */}
    </div>
  );
}

export default ViewExercise;