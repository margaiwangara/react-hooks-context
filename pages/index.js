import React from "react";
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Link from "next/link";

// components
import Page from "../components/Page";
import Header from "../components/Header";
import Data from "../components/Data";

export default function App({ children }) {
  return (
    <Page>
      <Data />
    </Page>
  );
}
