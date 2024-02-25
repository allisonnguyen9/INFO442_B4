import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import  ItemList  from './foodPost.js';

function Homepage (props) {

  return (
    <div>
      <nav></nav>
      <main>
        <div className="text-align">
        </div>
        <div className='container'>
          <div className='row'>
            <ItemList></ItemList> 
          </div>
        </div>
        <div className="btn-container">
          <button className="btn btn-success filter-btn" id="add-item-btn">
            <NavLink to="/addListing" id="add-itm-text">Add New Listing</NavLink>
          </button>
        </div>
      </main>
    </div>
  );
}
export default Homepage;