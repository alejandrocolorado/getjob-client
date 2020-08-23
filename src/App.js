import React, { Component } from "react";
import "./App.css";

import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup.jsx";
import Proving from './components/Proving'
import Login from "./pages/Login.jsx";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile.jsx";
import Options from "./pages/Options.jsx";
import Search from "./pages/Search.jsx";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className=" navigate cover wrapper">
          <div className=" js-content app cover">

          <Navbar/>
          <Switch>
            <AnonRoute exact path="/signup" component={Proving} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/options" component={Options} />
            <PrivateRoute path="/search" component={Search} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
