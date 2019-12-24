import React from "react";
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// components
import Page from "../components/Page";
import Header from "../components/Header";
import Articles from "../components/Data";

export default function App({ children }) {
  return (
    <Page>
      <Header />
      <Articles />
    </Page>
  );
}
