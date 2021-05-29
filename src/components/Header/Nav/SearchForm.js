import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = searchVal.trim();
    if (trimmed) {
      history.push(`/search?q=${trimmed}`);
      setSearchVal("");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="search"
          name="q"
          id="q"
          placeholder="Search recipes"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button className="btn search-btn">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
