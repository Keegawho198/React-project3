import React, { useState, useEffect } from "react";
import "./style.css";
import { Navbar } from '../components/Cards/Cards/Navbar/Navbar';
import { Link } from "react-router-dom";
import { TodaysIntake } from '../components/Cards/Cards/Navbar/TodaysIntake'

import API from '../utils/api'

import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";



function MasterDashboard() {
  const [master, Setmaster] = useState({
    id: "",
    tag: "",
    email: "",
    password: "",
    name: "",
    qualifications: "",
    bio: "",
    image: "",
    users: [

    ],

  });

  useEffect(() => {
    loadMaster()

  }, [])


  function loadMaster() {
    API.getMaster("5e7e90f018bec020a43b85eb")
      .then(res =>
        Setmaster({
          id: res.data._id,
          name: res.data.name,
          email: res.data.email,
          password: res.data.password,
          qualifications: res.data.qualifications,
          bio: res.data.bio,
          image: res.data.image,
          users: res.data.users


        })

      )

      .catch(err => console.log(err));
  };

  console.log(master);

  return (

    <div >
      <Navbar />

      <br></br>
      <br></br>

      <div className="row">

        <TodaysIntake><h2>Hello {master.name} ! </h2>
          <h2>Please add the excercises for all your clients</h2>
          <img src={master.image} style={{ borderRadius: "50%", height: "200%", marginTop: "-130px", marginLeft: "1200px", position: "absolute" }}></img>
        </TodaysIntake>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div className="container">

        <h2 id="clientHeader">  Clients</h2>

      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>



      <div className="row">
        {master.users.map((userList) => {
          return (
            // <div className="row">
            // <div className="tile" key={userList._id} >

            //   </div>
            //   </div>
            // <div class="container">
            //   <div class="row tile" key={userList._id}>

            //         <img id="tileImgID" src={userList.image}></img>


            //     <div class="col-lg-2 col-sm-2">
            //       <p className="title">{userList.name}</p>
            //     </div>

            //     <div class="col-lg-2 col-sm-2">
            //       <p className="title">{userList.email}</p>
            //     </div>

            //     <div class="col-lg-2 col-sm-2">
            //       <p className="title">Height: {userList.height}cm</p>
            //     </div>
            //     <div class="col-lg-2 col-sm-2">
            //       <p className="title">Weight: {userList.currentWeight} Kg</p>
            //     </div>

            //     <div class="col-lg-2 col-sm-2">
            //     <button type="button" className="viewMorebtn btn btn-primary">
            //       <Link to={"/viewClient/" + userList._id} style={{ color: "white" }}>View More</Link></button>
            //     </div>

            //   </div>
            //   <br></br>
            //   <br></br>
            //   <br></br>

            // </div>


            <MDBCard className="dashCard my-5 px-5 pb-1 text-center" key={userList._id}>
              <MDBCardBody>
                <MDBRow className="text-md-center">
                  <MDBCol lg="12" md="12" sm="12" className="mb-5 float-left">
                    <MDBCol md="4" lg="6" sm="12" className="float-left">
                      <img
                        src={userList.image}
                        className=""
                        id="tileImgID"
                        tag="img"
                        alt="Sample avatar"
                      />
                    </MDBCol>
                    <MDBCol md="8" lg="6" className="float-right">
                      <h4 className="font-weight-bold mb-3">{userList.name}</h4>
                      <h6 className="font-weight-bold grey-text mb-3">
                        {userList.email}
                      </h6>
                      <p className="grey-text">
                        {userList.height}cm
                      </p>
                      <p className="grey-text">
                        Weight {userList.currentWeight} Kg
                      </p>

                      <button type="button" className="viewMorebtn btn btn-primary">
                        <Link to={"/viewClient/" + userList._id} style={{ color: "white" }}>View More</Link></button>

                    </MDBCol>
                  </MDBCol>






                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          )




        })}





      </div>




    </div >





  );
}

export default MasterDashboard