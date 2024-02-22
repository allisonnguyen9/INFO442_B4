import React from 'react';
import { NavLink } from "react-router-dom";
import { Footer } from './footer.js';
import  ItemList  from './foodPost.js';


function Homepage (props) {

  return (
    <div>
      <nav></nav>
      <main>
        <div className='container'>
          <div className='row'>
            {/* <ItemList snackSwap={props.snackSwap}></ItemList> FOR DUMMY DATA*/}
            <ItemList />
          </div>
        </div>
        <div className="btn-container">
          <button class="btn btn-success filter-btn" id="add-item-btn" onclick="/addListing">
          <NavLink to="/addListing" id="add-itm-text">Add New Listing</NavLink>
          </button>
        </div>
      </main>
    </div>
  );
}
export default Homepage;