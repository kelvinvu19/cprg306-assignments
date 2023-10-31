"use client"
import React, { useEffect, useState } from 'react';

function MyComponent({ ingredient }) {
  const [meals, setMeals] = useState([]);

  function fetchMealIdeas(ingredient) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response.json();
      })
      .then((data) => {
        return data.meals || [];
      })
      .catch((error) => {
        console.error('Error', error);
        return [];
      });
  }

  function loadMealIdeas() {
    fetchMealIdeas(ingredient)
      .then((data) => {
        setMeals(data);
      });
  }

  useEffect(() => {
    loadMealIdeas(); 
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;

