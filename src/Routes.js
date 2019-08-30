import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RecipePage from "./Pages/Recipe/RecipePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ReciepeHome from "./Pages/Recipe/RecipeHome";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/recipe_page" component={RecipePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/recipehome" component={ReciepeHome} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
