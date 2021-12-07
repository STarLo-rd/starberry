import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchApartment from "./components/SearchApartment";

const Routing = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={App} />
          <Route
            path="/searchforapartments/:id"
            exact
            // element={<SearchApartment />}
            component={SearchApartment}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;
