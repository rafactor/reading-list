import React, { Component } from "react";
import Search from "../../views/search"
import Saved from "../../views/saved"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';

export default class NavBar extends Component {

  componentDidMount(){
    M.AutoInit();
}

  render() {
  return (
    <Router>
      <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/saved">Saved Books</Link>
            </li>
          </ul>

          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />

        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/saved">Saved Books</a>
        </li>
      </ul>
      </div>
    </Router>
  );
        }
}
