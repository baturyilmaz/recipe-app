import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import Search from "./pages/SearchPage";
import Category from "./pages/CategoryPage";
import Error from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/saved" exact component={Saved} />
        <Route path="/meal/:id" exact component={Detail} />
        <Route path="/search" exact component={Search} />
        <Route
          path="/search/c/:category"
          exact
          component={Category}
        />
        <Route path="/" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
