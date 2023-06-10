import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");

  // function onItemFormSubmit(event) {
  //   setForm(event.target.value);
  // }

  // function handleSearchItem(event) {
  //   setSearchItem(event.target.value);
  // }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />

      <Filter
        searchItem={searchItem}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchItem}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
