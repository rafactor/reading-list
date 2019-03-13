import React from "react";

export function SearchBox(props) {
    return (
        <div className="searchBox">
          <h6 className="searchBox-heading">Book Search</h6>
          <div className="row">
            <div className="input-field col s12">
              <input  value={props.state.search}
                      id="search-input" 
                      type="text" 
                      name="search"
                      onChange={props.handleInputChange} 
                      />
              <label htmlFor="search-input">Search for a Book</label>
            </div>
          </div>   
          <button className="waves-effect waves-light btn searchBox-btn-search"
                  onClick={props.handleFormSubmit}
                  >Search</button>
              
        </div>
      )
  }