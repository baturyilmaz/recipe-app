import { useContext, useState, useEffect } from "react";
import { Context } from "../../../context/Session";
import Card from "../../../components/Card";
import "./style.css";

const RandomRecipe = () => {
  const { fetchMealAPI } = useContext(Context);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRandomRecipe = async () => {
      const data = await fetchMealAPI("random.php");
      setRecipe(data.meals);
    };

    getRandomRecipe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="random-recipe">
      <p className="text-info">
        Search a recipe! <br /> <br />
        <em>Can't decide what to cook?</em>
      </p>
      {recipe &&
        recipe.map((r) => (
          <Card
            key={r.idMeal}
            meal={r}
            mealStrArea={r.strArea || null}
          />
        ))}
    </div>
  );
};

export default RandomRecipe;
