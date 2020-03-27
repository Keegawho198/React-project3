import React, { useEffect, useState } from 'react';
// import Form from '../Form/Form';
// import DeleteBtn from "../components/DeleteBtn";
import API from '../../utils/api'
import _ from 'lodash';
//var _ = require('lodash')
import './style.css';



const TableDisplay = (props) => {
  const [tableData, setTableData] = useState([]);
  const [dayNum, setDayNum] = useState(0);
  const [focus, setFocus] = useState([]);
  useEffect(() => {
    console.log("useEffect hit")
    setDayNum(props.dayNum);
    setFocus(props.focus);
    setTableData([...tableData, props.data])


    //console.log(props.data)
  }, [props.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit btn work");


    //connect to get/ backend get

    // console.log('HELLO');
    // console.log(API);
    // console.log(tableData);
    let valuesAdded = tableData.map((data) => {
      console.log(data);
      return _.omit(data, "dayNum", "focus")
      //return _.omit(data, "focus")
    });
    console.log(valuesAdded[1])
    var apiData = {
      dayNum: tableData[1].dayNum,
      focus: tableData[1].focus,
//animals.slice(2)

      exercise: valuesAdded.slice(1)
      //will ignore empty array value
    }
    console.log(tableData);

    console.log(apiData);

    API.saveProgram(apiData)
      .catch(err => console.log(err));

      window.location.reload(false);

  };

  //this.setTableData("");

  // this.setState({
  //   city: ''
  // })
  //  function deleteProgram(id) {
  //   API.deleteBook(id)
  //     .then(res => loadPrograms())
  //     .catch(err => console.log(err));
  // }

  
  return (
    <div>

      <table className="table-form" >
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

              <br></br>

      <div className="text-align text-center">
      <button type="button" className="btn btn-lg btn-primary text-center" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  );
}

export default TableDisplay;

//get data by property mongo