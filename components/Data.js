import { useContext } from "react";
import { AppContext } from "../appContext";

export default function Data() {
  const scrapeData = useContext(AppContext);
  const data = scrapeData
    ? scrapeData.data.map(v => (
        <ul key={v._id}>
          <li>{v.title}</li>
          <li>{v.summary}</li>
          <li>{v.datePublished}</li>
        </ul>
      ))
    : null;

  return <div>{data}</div>;
}
