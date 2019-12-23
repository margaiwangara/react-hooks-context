import React from "react";
import Page from "../components/Page";
import Data from "../components/Data";

export default function App({ children }) {
  return (
    <Page>
      <Data />
    </Page>
  );
}
