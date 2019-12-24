import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// components
import Page from "../components/Page";
import Data from "../components/Data";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";

export default function App({ children }) {
  return (
    <Page>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/data">
              <Data />
            </Route>
          </Switch>
        </div>
      </Router>
    </Page>
  );
}
