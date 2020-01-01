import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicLayout from "./layout/basicLayout";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <BasicLayout/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="page-container">
            <Switch>
              <Route path="/register">
                <RegistrationPage/>
              </Route>
              <Route path="/login">
                <LoginPage/>
              </Route>
              <Route path="/users">
                <Users/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
