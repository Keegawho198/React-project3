import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
// import DeleteBtn from "../components/DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
//var _ = require('lodash')
import './style.css';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ExerciseTable = (props) => {
  const [tableData, setTableData] = useState([]);
  const [exerciseName, setExerciseName] = useState(0);
  const [instructions, setInstructions] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload()
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("useEffect hit")
    setExerciseName(props.exerciseName);
    setInstructions(props.instructions);
    setTableData([...tableData, props.data])


    //console.log(props.data)
  }, [props.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit btn work");


    //connect to get/ backend get
    // console.log(API);
    // console.log(tableData);
    // let test = tableData.map((data) => {
    //   return _.omit(data, "dayNum", "focus")
    //   //return _.omit(data, "focus")
    // });
    //console.log(test)
    var apiData = {
      exerciseName: tableData[1].exerciseName,
      instructions: tableData[1].instructions,
      img: tableData[1].image
      //_.omit(tableData, "dayNum"),
    }

    console.log(apiData);

    API.saveExercise(apiData)
      .catch(err => console.log(err));

    handleShow();

  };

  //  function deleteProgram(id) {
  //   API.deleteBook(id)
  //     .then(res => loadPrograms())
  //     .catch(err => console.log(err));
  // }

  return (
    <div>

      <table className="table-form">
        <thead>
          <tr>
            <th scope="col">Exercise Name</th>
            <th scope="col">Instructions</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>

          {tableData
            .map(row => (
              <tr>
                <td>{row.exerciseName}</td>
                <td>{row.instructions}</td>
                <td><img src={row.image}></img></td>
                {/* <DeleteBtn onClick={() => deleteProgram(program._id)} /> */}
              </tr>)
            )}

        </tbody>
      </table>

      <br></br>

      <div className="text-align text-center">
        <button type="button" className="btn btn-lg btn-primary " onClick={handleSubmit}>Submit</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exercise Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Exercise Submitted Success</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>


    </div>
  );
}

export default ExerciseTable;