import React from "react";
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Link from "next/link";

// components
import Page from "../components/Page";
import Header from "../components/Header";

export default function App({ children }) {
  return (
    <Page>
      <Header />
      <p>Routing in Next.js</p>
    </Page>
  );
}
