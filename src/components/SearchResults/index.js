import "./style.css";
import Card from "../Card";
import { useContext } from "react";
import { Context } from "../../context/Session";

const SearchResults = ({ param }) => {
  const { meals } = useContext(Context);

  return (
    <section className="search-results container">
      {meals === null ? null : !meals.length ? (
        <p className="text-info">
          Couldn't find any recipe for given search value.
        </p>
      ) : (
        <>
          <p className="text-info">{param}</p>
          {meals.map((meal) => (
            <Card
              key={meal.idMeal}
              meal={meal}
              mealStrArea={meal.strArea || null}
              categoryName={param}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default SearchResults;
