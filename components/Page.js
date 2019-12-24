import React, { useEffect, useState } from "react";
import { AppProvider } from "../appContext";
import Data from "./Data";

function useArticles(limit) {
  const [articles, setArticles] = useState({ data: [] });

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await fetch(
          `https://devnewsbucket.margaiwangara.me/api/articles?sort=-datePublished&limit=${limit}`
        );
        const articles = await data.json();
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, [limit]);

  return articles;
}

export default function Page({ children }) {
  const [limit, setLimit] = useState(10);
  const articles = useArticles(limit);
  return (
    <AppProvider value={{ articles, setLimit: () => setLimit(limit + 10) }}>
      <div className="page">{children}</div>
    </AppProvider>
  );
}
