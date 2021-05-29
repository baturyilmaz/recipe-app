import "./style.css";
import { useContext } from "react";
import { Context } from "../../../context/Session";
import { useHistory } from "react-router-dom";

const Categories = () => {
  const { categories } = useContext(Context);
  const history = useHistory();

  return (
    <section className="search-categories">
      <div className="container">
        <p>Search by categories:</p>
        <div className="categories">
          {!categories?.length ? (
            <h1>Loading...</h1>
          ) : (
            categories.map((category) => (
              <button
                key={category.strCategory}
                onClick={() => {
                  history.push(`/search/c/${category.strCategory}`);
                }}
              >
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
                <span className="category-name">
                  {category.strCategory}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
