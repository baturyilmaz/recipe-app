import { useParams } from "react-router-dom";
import SearchResults from "../../components/SearchResults";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Session";

const CategoryPage = () => {
  const { category } = useParams();
  const { filterCategory } = useContext(Context);

  useEffect(() => {
    filterCategory(category);
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <SearchResults param={category} />
    </main>
  );
};

export default CategoryPage;
