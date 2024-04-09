
import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [searchTerm, setSearchTerm] = useState(search);

 
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    
    if (typeof onSearchChange === 'function') {
      onSearchChange(newSearchTerm);
    }
  };

  

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;