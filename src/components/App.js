import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter"; // Assuming you have already created this component
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

 
  function handleSearchChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

 
  function filterItems(item) {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  
  const filteredItems = items.filter(filterItems);

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onSearchChange={handleSearchChange} search={searchTerm} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;