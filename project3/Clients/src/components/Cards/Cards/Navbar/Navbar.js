import React from "react";
import "./style.css";

import NavbarI from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



export function Navbar() {
  return (

    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-" id="nav">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img id="navImg" src={require('../../../../img/logo.jpg')} alt="" style={{height:"5rem"}}  id="logo"></img></a>
 
    <form className="topnav my-2 my-lg-0">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="link">
        <a className="nav-link active" href="#" id="navA">Home</a>

        <a className="nav-link" href="#"id="navA">Store</a>

        <a className="nav-link" href="#"id="navA">Nutrition</a>

        <a className="nav-link" href="#"id="navA">Blog</a>

        <a className="nav-link" href="#"id="navA">Members</a>
    </ul>
    </form>
</nav> */}
      <NavbarI bg="" expand="lg">
        <NavbarI.Brand href="#home"><a class="navbar-brand" href="#"><img id="navImg" src={require('../../../../img/logo.jpg')} alt="" style={{ height: "5rem" }} id="logo"></img></a>
        </NavbarI.Brand>

        <NavbarI.Toggle aria-controls="basic-navbar-nav" />
        <NavbarI.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><a className="nav-link active" href="#" id="navA">Home</a></Nav.Link>
            <Nav.Link href="#link"><a className="nav-link" href="#" id="navA">Store</a></Nav.Link>
            <Nav.Link href="#link"><a className="nav-link" href="#" id="navA">Nutrition</a></Nav.Link>
            <Nav.Link href="#link"><a className="nav-link" href="#" id="navA">Blog</a></Nav.Link>
            <Nav.Link href="#link"><a className="nav-link" href="#" id="navA">Store</a></Nav.Link>
            <Nav.Link href="#link"><a className="nav-link" href="#" id="navA">Members</a></Nav.Link>
          </Nav>
        </NavbarI.Collapse>
      </NavbarI>
    </div>





  );
}

