import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import RecipePage from "./Pages/Recipe/RecipePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ReciepeHome from "./Pages/Recipe/RecipeHome";
import NewsPage from "./Pages/NewsPage/NewsPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/recipe_page" component={RecipePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/recipehome" component={ReciepeHome} />
          <Route exact path="/newsPage" component={NewsPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
