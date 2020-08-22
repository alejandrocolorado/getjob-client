import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Private from "./pages/Private.jsx";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile.jsx";
import Search from "./pages/Search.jsx";
import  SearchList  from "./pages/SearchList";


class App extends Component {
  render() {
    
    return (
      <AuthProvider>
        <div className='container'>
          <Navbar />

          <Switch>
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/search' component={Search} />
            <PrivateRoute exact path='/search-list' component={SearchList} />
            <PrivateRoute exact path='/private' component={Private} />
            <PrivateRoute exact path='/profile' component={Profile} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
