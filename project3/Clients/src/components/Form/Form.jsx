import React, { useState } from 'react';

import _ from 'lodash'; 


import FormInput from '../FormInput';
import TableDisplay from '../TableDisplay'


const Form = () => {
  // console.log(TableDisplay);
  //const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    dayNum: "",
    exerciseName: "",
    sets: "",
    reps: "",
    tempo: "",
    rest: ""
  });

  const [tableData, setTableData] = useState({
    exerciseName: "",
    sets: "",
    reps: "",
    tempo: "",
    rest: ""
  });


  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('saved')
    var exerciseDat = _.omit(formData, 'dayNum')
    setTableData({ ...formData });
  }


  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [key]: value })
  }

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   console.log('HELLO');
  //   console.log(API);
  //   // console.log(formObject);

  //   // API.savePrograms({
  //   //   // email: formObject.email,
  //   //   // password: formObject.password,
  //   //   // name: formObject.name,
  //   //   // qualifications: formObject.qualifications,
  //   //   // image: formObject.image

  //   //   day[0].exercise[0].exerciseName : formData.name
  //   // })


  return (
    <>
      <div style={{ margin: '2rem' }}>
      <FormInput label="Day Number" type="number" name="dayNum" value={formData.dayNum} onChange={handleChange} />
        <FormInput label="Exercise Name" type="text" name="exerciseName" value={formData.exerciseName} onChange={handleChange} />
        <FormInput label="Sets" type="number" name="sets" value={formData.sets} onChange={handleChange} />
        <FormInput label="Reps" type="number" name="reps" value={formData.reps} onChange={handleChange} />
        <FormInput label="Tempo" type="text" name="tempo" value={formData.tempo} onChange={handleChange} />
        <FormInput label="Rest" type="number" name="rest" value={formData.rest} onChange={handleChange} />
        <button type="button" className="btn btn-lg btn-primary " onClick={handleSave}>Save</button>
      </div>
      
      <TableDisplay dayNum={formData.dayNum} data={tableData}>
      </TableDisplay>

    </>

  )
}

export default Form;