import React, { useState, useEffect } from "react";
import "./style.css";
import { Navbar } from '../components/Cards/Cards/Navbar/Navbar';
import ProjectedWeight from '../components/Cards/Cards/Navbar/ProjectedWeight';
import { TodaysIntake } from '../components/Cards/Cards/Navbar/TodaysIntake'
import { TodaysWorkout } from '../components/Cards/Cards/Navbar/TodaysWorkout'
import { FoodToday } from '../components/Cards/Cards/Navbar/FoodToday'
import API from '../utils/api'
import { Modal, Button } from 'react-bootstrap'

function Dashboard() {

  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [tempweight, SetTempWeight] = useState("");
  const [newWeek, SetnewWeek] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    loadUsers();
    handleShow();
  }, [])


  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(name, value);

    if (name === "currentWeight") {
      SetTempWeight(parseInt(value));
    }
    SetnewWeek(value);

  }


  function loadUsers() {
    API.getUser("5e7c88c6b0c5b99b942bd00c")
      .then(res =>
        setUser(res.data)

      )

      .catch(err => console.log(err));
  };

  function updatingUser(newUser) {
    console.log(newUser);
    API.updateUser(newUser)
      .then(res => {
        console.log(res);
      })
  }


  async function saveWeight() {

    console.log(tempweight);
    console.log(newWeek);
    const newUser = {
      ...user,
      currentWeight: tempweight,
      weights: [...user.weights, tempweight],
      week: [...user.week, newWeek]
    };
    setUser(newUser);

    await updatingUser(newUser);

    handleClose();

    console.log(user);




  }

  //udpate function in save button to call handleSave
  // push the new weight in to weights
  //update user
  //close

  // await setUser({ ...user, weights: user.weights.push(tempweight) });

  return (

    <div >
      <Navbar />

      <>

        <Modal show={show} onHide={handleClose} size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Your Weight !
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              Enter Your Weight in (Kg)
            <input className="form-control" id="exampleInput" type="number" name="currentWeight" onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
              Enter the Week
            <input className="form-control" id="exampleInput" type="text" name="currentWeek" onChange={handleInputChange}></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={saveWeight}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>


      <div className="row">


        <TodaysIntake>
          <div className="row">
            <div className="col">
              <h2>Hello {user.name}  </h2>
            </div>
            <div className="col">
              <img src={user.image} style={{ borderRadius: "50%", height: "350%", marginTop: "-45px", marginLeft: "900px", position: "absolute" }}></img>
            </div>
          </div>

          <h4>You're currently on track with the progress keep it up!</h4>
        </TodaysIntake>




      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <div className="row">
        <div class="col">
          <ProjectedWeight />
        </div>
        <div class="col">
          <div className="row">
            <FoodToday>
              <p style={{ fontSize: "20px", textAlign: "center" }}>Todays Nutrition</p>
              <p style={{ fontSize: "40px", color: "#c5d3c1", textAlign: "center" }}>{user.calories}</p>
              <p style={{ fontSize: "20px", color: "#c2c2c2", textAlign: "center" }}>Search Food</p>
            </FoodToday>
            <TodaysWorkout>
              <p style={{ fontSize: "20px", textAlign: "center" }}>Todays Workout</p>
              <p style={{ fontSize: "40px", color: "#c5d3c1", textAlign: "center" }}>Push Day</p>
              <p style={{ fontSize: "20px", color: "#c2c2c2", textAlign: "center" }}>View all Workout</p>
            </TodaysWorkout>
            <br></br>


          </div>
        </div>

      </div>



    </div>





  );
}

export default Dashboard