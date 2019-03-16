import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./views/saved"
import Search from "./views/search"

import 'materialize-css/dist/css/materialize.min.css'
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
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}

export default App;
