import { FaUtensils, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import "./style.css";

const Nav = ({ children }) => {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <h1>
              <FaUtensils /> MealBTR
            </h1>
          </div>
        </Link>
        <SearchForm />
        <ul>
          <li className="favorites">
            <Link to="/saved">
              <FaRegBookmark />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
