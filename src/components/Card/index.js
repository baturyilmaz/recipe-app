import { FaRegStar, FaStar } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../context/Session";
import { Link } from "react-router-dom";
import "./style.css";

const Card = ({ meal, categoryName, mealStrArea }) => {
  const { saveds, handleSaved } = useContext(Context);

  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <div className="card">
        <div className="card-top">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strMeal}</h3>
          {mealStrArea ? (
            <span className="card-category">{mealStrArea}</span>
          ) : null}
        </div>
        <div className="card-main">
          {meal.strCategory ? (
            <span className="meal-area">{meal.strCategory}</span>
          ) : (
            <span className="meal-area">{categoryName}</span>
          )}
          <span
            className="heart"
            onClick={(e) => {
              e.preventDefault();
              handleSaved(meal);
            }}
          >
            {saveds.find((f) => f.idMeal === meal.idMeal) ? (
              <FaStar />
            ) : (
              <FaRegStar />
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
