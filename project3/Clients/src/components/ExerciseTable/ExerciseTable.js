import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
// import DeleteBtn from "../components/DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
//var _ = require('lodash')
import './style.css';



const ExerciseTable = (props) => {
  const [tableData, setTableData] = useState([]);
  const [exerciseName, setExerciseName] = useState(0);
  const [instructions, setInstructions] = useState([]);
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
      img: tableData[1].img
      //_.omit(tableData, "dayNum"),
    }

    console.log(apiData);

    API.saveExercise(apiData)
      .catch(err => console.log(err));
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
                <td>{row.img}</td>
                {/* <DeleteBtn onClick={() => deleteProgram(program._id)} /> */}
              </tr>)
            )}

        </tbody>
      </table>

      <button type="button" className="btn btn-lg btn-primary " onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ExerciseTable;