import React, { useEffect, useState } from "react";
import { AppProvider } from "../appContext";

function useArticles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await fetch(
          "https://devnewsbucket.margaiwangara.me/api/articles"
        );
        const articles = await data.json();
        return setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, []);

  return articles;
}

export default function Page({ children }) {
  const articles = useArticles();
  return (
    <AppProvider value={articles}>
      <div className="page">{children}</div>
    </AppProvider>
  );
}
