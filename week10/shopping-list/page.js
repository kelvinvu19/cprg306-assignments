import React, { useState, useEffect } from 'react';
import { getItems, addItem } from './_services/shopping-list-service.js'; 

import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemData from './items.json';

function Page() {
  const [selectedItemName, setSelectedItemName] = useState(""); 
  const [items, setItems] = useState(itemData); 
  const [numberOfMeals, setNumberOfMeals] = useState(0);

  useEffect(() => {
    const userId = 'exampleUserId';
    getItems(userId)
      .then((items) => {
        console.log('Items:', items);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); 

  const handleItemSelect = (selectedItem) => {
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (newItem) => {
    const userId = 'exampleUserId';
    addItem(userId, newItem)
      .then((itemId) => {
        console.log('Item added with ID:', itemId);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-gray-900 mb-4 py-4 px-8 rounded flex">
      <div>
        <h1 className="text-white">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      {selectedItemName && (
        <MealIdeas ingredient={selectedItemName} updateNumberOfMeals={setNumberOfMeals} />
      )}
    </main>
  );
}

export default Page;
