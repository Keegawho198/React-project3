import React, { useState } from 'react';

import _ from 'lodash'; 

import './style.css';

import FormInput from '../FormInput';
import TableDisplay from '../TableDisplay'


const Form = () => {
  // console.log(TableDisplay);
  //const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    dayNum: "",
    //exerciseId: 0,
    focus: "",
    exerciseName: "",
    sets: "",
    reps: "",
    tempo: "",
    rest: ""
  });

  const [tableData, setTableData] = useState({
    exerciseName: "",
    //exerciseId: 0,
    focus: "",
    sets: "",
    reps: "",
    tempo: "",
    rest: ""
  });


  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('saved')
    // var exerciseId = 0;
    // console.log(exerciseId);
    // exerciseId++;
    // console.log(exerciseId);

    
    //var exerciseDat = _.omit(formData, 'dayNum')
    setTableData({ ...formData });
  }


  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [key]: value })
  }


  return (
    <>
  <div className="row">
    <div className="Form col-sm-4 col-lg-4">
      <FormInput label="Day Number" type="number" name="dayNum" value={formData.dayNum} onChange={handleChange} />
      <FormInput label="Focus" type="text" name="focus" value={formData.focus} onChange={handleChange} />
        <FormInput label="Exercise Name" type="text" name="exerciseName" value={formData.exerciseName} onChange={handleChange} />
        <FormInput label="Sets" type="number" name="sets" value={formData.sets} onChange={handleChange} />
        <FormInput label="Reps" type="number" name="reps" value={formData.reps} onChange={handleChange} />
        <FormInput label="Tempo" type="text" name="tempo" value={formData.tempo} onChange={handleChange} />
        <FormInput label="Rest" type="number" name="rest" value={formData.rest} onChange={handleChange} />
        <button type="button" className="btn btn-lg btn-primary " onClick={handleSave}>Save</button>
    </div>

    <div class="col-sm-8 col-md col-lg-8">
      <TableDisplay dayNum={formData.dayNum} data={tableData}>
      </TableDisplay>
    </div>
  </div>
      <p>Submited programs might go down here?</p>
      
      

    </>

  )
}

export default Form;