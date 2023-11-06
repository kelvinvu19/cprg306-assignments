"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({items, onSelect}) { 
    const [sortBy, setSortBy] = useState("name");

    const sortedList = [...items]

    function sortByName() {
        setSortBy("name");
    }
    function sortByCategory() {
        setSortBy("category")
    }

    if(sortBy === "name"){
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if(sortBy === "category"){
        sortedList.sort((a, b) => a.category.localeCompare(b.category));
    }

      return (
        <main>
          <div>
            <button
              className={`border border-whi   te p-2 m-2 ${
                sortBy === "name" ? "bg-white text-black" : "bg-black"
              }`}
              onClick={sortByName}
            >
              Sort By Name
            </button>
            <button
              className={`border border-white p-2 m-2 ${
                sortBy === "category" ? "bg-white text-black" : "bg-black"
              }`}
              onClick={sortByCategory}
            >
              Sort By Category
            </button>
          </div>
          <div>
            {sortedList.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                category={item.category}
                quantity={item.quantity}
                onSelect={() => onItemSelect(item)}
              />
            ))}
          </div>
        </main>
      );
}