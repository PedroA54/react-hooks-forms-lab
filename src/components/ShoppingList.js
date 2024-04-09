import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  
  function handleSearchChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  }

  
  const itemsToDisplay = items.filter((item) => {
    
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

   
    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      {}
      {}
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchTerm} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
