import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { Navbar } from '../components/Cards/Cards/Navbar/Navbar';
import { Link } from "react-router-dom";

import { TodaysIntake } from '../components/Cards/Cards/Navbar/TodaysIntake'
import AuthContext from '../utils/auth.contect'


import API from '../utils/api'

import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";




function MasterDashboard(props) {
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

  const { userId } = useContext(AuthContext);


  useEffect(() => {
    loadMaster()

  }, [])


  function loadMaster() {
    API.getMaster(userId)
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

        <TodaysIntake><h1 className="hellotext">Hello {master.name}! </h1>
          <h4 className="hellotext">Please add the excercises for all your clients</h4>
          <img src={master.image} style={{
            borderRadius: "50%", height: "200%",
            marginTop: "-14%", marginLeft: "70%", position: "absolute"
          }}>
          </img>



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
      

      <button type="button" className="btn btn-lg btn-primary text-center" style={{ marginLeft: "40%" }}><Link to={"/program/" + master.id} style={{ color: 'white' }}>Set Workout for Today</Link></button>

      <div className="row">
        {master.users.map((userList) => {
          return (



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