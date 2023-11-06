"use client";

import { unstable_createNodejsStream } from "next/dist/compiled/@vercel/og";
import { useState, useEffect } from "react";

export default function MealIdeas(){
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

            const response = await fetch(url);
            const data = await response.json();

            const mealList = data.meals || [];

            setMeals(mealList);
        } catch (error) {
            console.error('Error fetching meal ideas: ', error);
        }
    };

    const loadMealIdeas = () => {
        fetchMealIdeas(ingredient);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
          <h2>Meal Ideas for {ingredient}</h2>
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        </div>
      );
}