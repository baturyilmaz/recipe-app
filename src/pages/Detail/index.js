import "./style.css";

import { useParams } from "react-router-dom";
import {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import { Context } from "../../context/Session";
import { BiFoodMenu } from "react-icons/bi";

const Detail = () => {
  const { id } = useParams();
  const { fetchMealAPI } = useContext(Context);

  const [detailedMeal, setDetailedMeal] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const getMealDetail = async () => {
      const data = await fetchMealAPI(`lookup.php?i=${id}`);
      setDetailedMeal(data.meals ? data.meals[0] : []);
    };

    getMealDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getIntgredients = (recipe) => {
    const intgredientsArr = [];
    for (let i = 1; i <= 20; i++) {
      const intgredientKey = "strIngredient" + i;
      const measureKey = "strMeasure" + i;

      if (!recipe[intgredientKey]) break;

      intgredientsArr.push({
        measure: recipe[measureKey],
        intgredient: recipe[intgredientKey],
      });
    }
    return intgredientsArr;
  };

  useEffect(() => {
    console.log(detailedMeal);
  }, [detailedMeal]);

  if (!detailedMeal) {
    return (
      <main className="recipe-detail container">
        <p className="text-info">Loading...</p>
      </main>
    );
  }

  return (
    <main className="recipe-detail container">
      {detailedMeal.length === 0 ? (
        <p className="text-info">No meal found.</p>
      ) : (
        <>
          <section className="instructions">
            <div className="instructions-head">
              <h2>{detailedMeal.strMeal}</h2>
              <div className="meal-img">
                <img
                  src={detailedMeal.strMealThumb}
                  alt={detailedMeal.strMeal}
                />
              </div>
            </div>
            <div className="instructions-body">
              <h3>INSTRUCTIONS</h3>
              <div className="instructions-content">
                {detailedMeal.strInstructions
                  .split("\r\n")
                  .filter((instruction) => instruction)
                  .map((instruction, i) => (
                    <div key={instruction} className="instruction">
                      <span>{i + 1}</span>
                      <p>{instruction}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          <section className="ingredients">
            <h2>Ingredients</h2>
            <hr />
            <ul>
              {getIntgredients(detailedMeal).map((intInfo) => (
                <li key={`${intInfo.measure}${intInfo.intgredient}`}>
                  <BiFoodMenu />
                  <span className="intgredient-info">{`${intInfo.measure} ${intInfo.intgredient}`}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
};

export default Detail;
