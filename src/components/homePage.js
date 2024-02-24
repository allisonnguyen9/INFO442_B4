import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import  ItemList  from './foodPost.js';
import {Filter} from './filter.js';
import { getDatabase, ref as dbRef, set as firebaseSet } from 'firebase/database'


function Homepage (props) {
    const [items, setItems] = useState(props.foodData);
    const [selectedCategory, setselectedCategory] = useState('');

    function filterPostings(selected) {
      setselectedCategory(selected);
    }
  
  
    function clearFilter() {
      setselectedCategory('');
    }

    const filteredItems = Array.isArray(props.foodData) ? props.foodData.filter((item) => {
        const conditionMatch = !selectedCategory || selectedCategory === item.category;
  
        return conditionMatch;
      })
    : [];

  return (
    <div>
      <nav></nav>
      <main>
        <div className="text-align">
              <Filter onFilterChange={filterPostings} clearFilter={clearFilter}></Filter>
        </div>
        <div className='container'>
          <div className='row'>
            {/* <ItemList snackSwap={props.snackSwap}></ItemList> FOR DUMMY DATA*/}
            <ItemList foodData={filteredItems}></ItemList>
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