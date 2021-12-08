import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import SearchApartment from "./components/SearchApartment";

const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route
            path="/searchforapartments/:id"
            exact
            component={SearchApartment}
          />
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
