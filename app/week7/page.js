"use client";
import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(''); 

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  }

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.trim(); 

    setSelectedItemName(cleanedItemName);
  }

  const pageStyle = {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const itemListStyle = {
    flex: '1',
    marginRight: '20px',
  };

  return (
    <main style={pageStyle}>
      <div style={itemListStyle}>
        <h1 className="text-3xl font-semibold">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} /> {/* hold onItemSelect to ItemList */}
      </div>
      <MealIdeas ingredient={selectedItemName} /> {/* hold selectedItemName to MealIdeas as ingredient */}
    </main>
  );
}




