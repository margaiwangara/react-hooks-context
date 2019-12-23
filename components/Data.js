import { useContext } from "react";
import { AppContext } from "../appContext";

export default function Data() {
  const scrapeData = useContext(AppContext);
  console.log(scrapeData);
  return <p>Data</p>;
}
