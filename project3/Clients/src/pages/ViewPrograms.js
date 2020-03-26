import React from 'react';
//import Form from "../components/Form/index";
import Program from "../components/ViewProgram/index"
import { Navbar } from '../components/Cards/Cards/Navbar/Navbar';

const ViewPrograms = () => {
  return(
    <>
    <Navbar/>
    <br></br>
    <h1 className="text-center">View Programs Page</h1>
      <Program /> </>
  );
}

export default ViewPrograms;