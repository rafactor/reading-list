import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


export function NavBar(props) {
  return (
    
      <Router>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Google Books
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/saved"
                      className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                >Saved</Link>
              </li>
              <li>
                <Link to="/search"
                      className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                >Search</Link>
              </li>
            </ul>
          </div>
          {/* <Route path="/saved" component={Saved} />
          <Route path="/search" component={Search} /> */}
        </nav>
        
      </Router>
   
  );
}
