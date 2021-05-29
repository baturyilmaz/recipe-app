import { createContext, useState, useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { fetchMealAPI } from "../../services/theMealAPI";

export const Context = createContext();

const Session = ({ children }) => {
  const [meals, setMeals] = useState(null);
  const [saveds, setSaveds] = useStorage("savedMeals");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchMealAPI("categories.php");
      setCategories(data.categories);
    };

    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filterCategory = async (categoryName) => {
    setMeals(null);
    const data = await fetchMealAPI(`filter.php?c=${categoryName}`);
    setMeals(
      data.meals
        ? data.meals.map((meal) => {
            return { ...meal, strCategory: categoryName };
          })
        : []
    );
  };

  const searchMeal = async (mealName) => {
    setMeals(null);
    const data = await fetchMealAPI(`search.php?s=${mealName}`);
    setMeals(data.meals || []);
  };

  const handleSaved = (meal) => {
    if (saveds.find((f) => f.idMeal === meal.idMeal)) {
      setSaveds(saveds.filter((f) => f.idMeal !== meal.idMeal));
    } else {
      setSaveds([...saveds, meal]);
    }
  };

  return (
    <Context.Provider
      value={{
        fetchMealAPI,
        filterCategory,
        searchMeal,
        meals,
        categories,
        saveds,
        handleSaved,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Session;
