import { useContext } from "react";
import { AppContext } from "../appContext";

export default function Data() {
  const scrapeData = useContext(AppContext);
  const { articles, setLimit } = scrapeData;
  const data = articles
    ? articles.data.map(v => (
        <ul key={v._id}>
          <li>{v.title}</li>
          <li>{v.summary}</li>
          <li>{v.datePublished}</li>
        </ul>
      ))
    : null;

  return (
    <div>
      <button onClick={setLimit}>View More</button>
      <br />
      {data}
    </div>
  );
}
