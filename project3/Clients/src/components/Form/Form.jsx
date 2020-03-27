import React, { useState } from 'react';

import _ from 'lodash';

import './style.css';

import FormInput from '../FormInput';
import TableDisplay from '../TableDisplay'
import ProgramSelected from "../Forms/ProgramSelectedInput";

// import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
//import Select from 'react-select';
// import Select from "react-dropdown-select";
import Select from 'react-select'


//Options for Dropdown list in form
const options = [
  { label: 'One', value: 'One' },
  { label: 'Two', value: 'Two' },
  { label: 'Three', value: 'Three' },
  { label: 'Four', value: 'Four' },
  { label: 'Five', value: 'Five' },
  { label: 'Six', value: 'Six' },
  { label: 'Seven', value: 'Seven' },

];

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


//This function Handles changes for the dropdown only!!!!
  const handleChange = (e) => {
    console.log(e);
    console.log(e.value);
    
    alert("Day Number " + e.value +" Selected"); 
    //daynumber not showing on input when selected

    setFormData({ ...formData, dayNum: e.value })
  }

  //this handles changes for the other form inputs!
  const handleChangeSecond = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    // console.log(key);
    // console.log(value);
    setFormData({ ...formData, [key]: value })
  }

  console.log(formData);
  return (
    <>
      <br></br>

      <div className="row">
        <div className="Form col-sm-4 col-lg-4 formInput">
          <p>Day Number</p>
          <Select label="DayNum" name="dayNum" value={formData.dayNum} options={options}
            onChange={handleChange} />

          <FormInput label="Focus" type="text" name="focus" value={formData.focus} onChange={handleChangeSecond} />
          <FormInput label="Exercise Name" type="text" name="exerciseName" value={formData.exerciseName} onChange={handleChangeSecond} />
          <FormInput label="Sets" type="number" name="sets" value={formData.sets} onChange={handleChangeSecond} />
          <FormInput label="Reps" type="number" name="reps" value={formData.reps} onChange={handleChangeSecond} />
          <FormInput label="Tempo" type="text" name="tempo" value={formData.tempo} onChange={handleChangeSecond} />
          <FormInput label="Rest" type="number" name="rest" value={formData.rest} onChange={handleChangeSecond} />
          <button type="button" className="btn btn-lg btn-primary " onClick={handleSave}>Save</button>
        </div>

        <div class="col-sm-6 col-md col-lg-6 tableDisplay">
          <TableDisplay dayNum={formData.dayNum} data={tableData}>
          </TableDisplay>
        </div>
      </div>
      <p>Only submit for one day! Don't add a day 1 and day 2 exercise in one submission</p>



    </>

  )
}

export default Form;