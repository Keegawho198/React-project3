import React, { useState } from 'react';

import _ from 'lodash'; 

import './style.css';

import FormInput from '../FormInput';
import TableDisplay from '../TableDisplay'
import ProgramSelected from "../Forms/ProgramSelectedInput";


const Form = () => {

  const [formData, setFormData] = useState({
    dayNum: "",
    focus: "",
    exerciseName: "",
    sets: "",
    reps: "",
    tempo: "",
    rest: "",
    select:""
  });

  const [tableData, setTableData] = useState({
    exerciseName: "",
    focus: "",
    sets: "",
    reps: "",
    tempo: "",
    rest: "",
    select:""

  });

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    console.log(key,value);

    setFormData({ ...formData, [key]: value })
  }



  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('saved')
   
    setTableData({ ...formData });
    
    
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
        <ProgramSelected
        onChange={handleChange}
        />
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