import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/common"
import Saved from "./views/saved"
import Search from "./views/search"
import Home from "./views/home"

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
import "./App.scss";

class App extends Component {

  state = {
    user: ""
  }

  
  componentDidMount(){
    M.AutoInit();
  }

  render() {
    return (
      <div>
      <NavBar />
     <Router>
        <div>
         

          <Route exact path="/" component={Home} />
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
