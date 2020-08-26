import React, { Component } from "react";
import "./App.css";

import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile.jsx";
import Options from "./pages/Options.jsx";
import Search from "./pages/Search.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import PendingJobs from "./pages/PendingJobs.jsx";
import CompletedJobs from "./pages/CompletedJobs.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import JobDetail from "./pages/JobDetail.jsx";
import Technology from "./pages/Technology.jsx";
import JobDetailSaved from "./pages/JobDetailSaved.jsx";
import Home from "./pages/Home.jsx";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className=" navigate cover wrapper">
          <div className=" js-content app cover">

          <Navbar/>
          <Switch>
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/options" component={Options} />
            <PrivateRoute path="/search" component={Search} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/pending" component={PendingJobs} />
            <PrivateRoute exact path="/completed" component={CompletedJobs} />
            <PrivateRoute exact path="/portfolio" component={Portfolio} />
            <PrivateRoute exact path="/job-detail/:id" component={JobDetail} />
            <PrivateRoute exact path="/technology/:tag" component={Technology} />
            <PrivateRoute exact path="/job-detail-saved/:id" component={JobDetailSaved} />
          </Switch>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
