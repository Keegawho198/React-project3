import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserCreate from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import MasterCreate from './pages/MasterSignUp';
import MasterDashboard from './pages/MasterDashboard';
import UserLogin from "./pages/UserLogin";
import MasterLogin from "./pages/MasterLogin"
import NutritionSearch from './pages/NutritionSearch';

import Program from "./pages/Program"
import FoodCal from "./pages/FoodCal"
import ViewProgram from "./pages/ViewPrograms"
import AddExercise from "./pages/AddExercise"
import viewExercise from "./pages/ViewExercise"
import viewClient from "./pages/ViewClient"


import DataTableP from "./pages/DatatablePage"


function App() {
  return (
    <div className="App">

     <Router>
    <div>
      
   
      <Switch>
         <Route exact path="/" component={UserLogin} />
         <Route exact path="/master-login" component={MasterLogin} />
         <Route exact path="/signup" component={UserCreate} />
         <Route exact path="/dashboard" component={Dashboard} />
         <Route exact path="/master" component={MasterCreate} />
         <Route exact path="/master-dashboard" component={MasterDashboard} />
         <Route exact path="/nutrition-search" component={NutritionSearch} />
         <Route exact path="/program" component={Program} />
         <Route exact path="/user/viewprogram/:id" component={ViewProgram} />
         <Route exact path="/foodCal" component={FoodCal} />
         <Route exact path="/addExercise" component={AddExercise} />
         <Route exact path="/viewExercise" component={viewExercise} />
         <Route exact path="/viewClient/:id" component={viewClient} />
        
          </Switch>

        </div>
      </Router>


    </div>
  );
}

export default App;
