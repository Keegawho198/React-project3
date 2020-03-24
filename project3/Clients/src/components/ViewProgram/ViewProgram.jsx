import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
import DeleteBtn from "../DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
// import './style.css';

// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Form, Col } from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton'






const Viewprogram = (props) => {
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
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
            exercise._id = value._id;
            exercise.dayNum = value.dayNum;
            exercise.focus = value.focus;
            task.push(exercise);
          })
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


  function deleteProgram(id) {
    API.deleteProgram(id)
      .then(res => loadPrograms())
      .catch(err => console.log(err));
  }

  function handleChange(event) {

    console.log(event.target.value);

    setFilterData({ dayNum: event.target.name });
    console.log(filterData);

    // console.log(event);
    // console.log(event.traget.name);

    event.data.map((value, index) => {
      console.log(value);
    })

  };

  return (
    <div>
      <Form.Group as={Col} controlId="formGridState">
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
      </Form.Group>

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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

          {tableData
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
            )}

        </tbody>
      </table>
    </div>
  );
}

export default Viewprogram;

//deletebtn not working

// onchange on dropdown, loop through tabledata. 
//only return data where tableData.dayNum == value
// set value to filtered data array, filter data to display instead of table data.

//