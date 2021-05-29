import { useLocation, useHistory } from "react-router-dom";
import SearchResults from "../../components/SearchResults";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Session";
import queryString from "query-string";

const SearchPage = () => {
  const { searchMeal } = useContext(Context);
  const history = useHistory();
  const { search } = useLocation();
  const searchQuery = queryString.parse(search);

  useEffect(() => {
    const q = searchQuery.q;
    if (!q) history.push("/");
    searchMeal(q);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <SearchResults param={searchQuery.q} />
    </main>
  );
};

export default SearchPage;
