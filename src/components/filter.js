import React, { useState } from 'react';

export function Filter(props) {
    const [selected, setSelected] = useState('');
  
    function handleSelected(e) {
      const selectedValue = e.target.value;
      setSelected(selectedValue);
      props.onFilterChange(selectedValue);
    }
  
    function clear() {
      setSelected('');
      props.clearFilter();
    }
  
    return (
      <div className="filter-category">
        <label htmlFor="filtercategory">Filter Food Category</label>
        <select
          id="filtercategory"
          name="filtercategory"
          value={selected}
          onChange={handleSelected}
        >
          <option value="" disabled>
            Select condition
          </option>
          <option value="Meat or Dairy">Meat or Dairy</option>
          <option value="Beverage">Beverage </option>
          <option value="Produce">Produce</option>
          <option value="Non-perishable (canned, boxed, dried fruit)">Non-perishable (canned, boxed, dried fruit)</option>
        </select>
        <button className="filter-button" onClick={clear}>
          Clear Filters
        </button>
      </div>
    );
  } 

