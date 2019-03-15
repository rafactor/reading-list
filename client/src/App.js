import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/common/navbar"
import Saved from "./views/saved"
import Search from "./views/search"

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
import "./App.scss";

class App extends Component {

  state = {
    user: ""
  }


  render() {
    return (
      <div>
     <Router>
        <div>
         

          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />


          {/* <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} state={this.state} /> */}
          {/* <Route path="/login" component={Login} state={this.state} /> */}
          {/* <Route path="/signup" component={Signup} /> */}
        </div>
        
      </Router>
      </div>
    );
  }
}

export default App;
