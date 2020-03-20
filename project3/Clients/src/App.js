import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserCreate from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import MasterCreate from './pages/MasterSignUp';
import MasterDashboard from './pages/MasterDashboard';
import Program from "./pages/Program"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>


          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={UserCreate} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/master" component={MasterCreate} />
            <Route exact path="/master-dashboard" component={MasterDashboard} />
            <Route exact path="/program" component={Program} />

          </Switch>

        </div>
      </Router>

    </div>
  );
}

export default App;
