import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RecipePage from "./Pages/Recipe/RecipePage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/recipe_page" component={RecipePage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
