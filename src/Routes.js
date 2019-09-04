import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import RecipePage from "./Pages/Recipe/RecipePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import RecipeHome from "./Pages/Recipe/RecipeHome";
import NewsHome from "./Pages/NewsPage/NewsHome";
import NewsPage from "./Pages/NewsPage/NewsPage";
import Navbar from "./Components/Home/Navbar";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup/" component={Signup} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          {/* <Route path="/recipe_page" component={RecipePage} /> */}
          <Route exact path="/news_page/:id" component={NewsPage} />
          <Route exact path="/news_page" component={NewsPage} />
          <Route exact path="/newshome" component={NewsHome} />
          <Route exact path="/recipe_page/:id" component={RecipePage} />
          <Route exact path="/recipehome" component={RecipeHome} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
