import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ReciepeHome from "./Pages/Recipe/RecipeHome";
import NewsPage from "./Pages/NewsPage/NewsPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recipehome" component={ReciepeHome} />
          <Route exact path="/newsPage" component={NewsPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
