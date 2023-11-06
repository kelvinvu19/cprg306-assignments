"use client";

import ItemList from "./item-list"
import NewEvent from "./new-item"
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Home() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    const handleItemSelect = (selectedItems) => {
        const cleanedItemName = selectedItem.name
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '')
        .trim();

        setSelectedItemName(cleanedItemName);
    }
    
    return (
        <div className="flex">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect prop */}
          </div>
          <div>
            <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as ingredient prop */}
          </div>
        </div>
      );
}