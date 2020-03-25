import React from "react";
import "./style.css";





export function Navbar() {
  return (
    
<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-" id="nav">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img src={require('../../../../img/logo.jpg')} alt="" style={{height:"5rem"}} id="logo"></img></a>
 
    <form class="form-inline my-2 my-lg-0">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="link">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="navA">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"id="navA">Store</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"id="navA">Nutrition</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"id="navA">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"id="navA">Members</a>
      </li>
    </ul>
    </form>
  
</nav>
</div>





  );
}

