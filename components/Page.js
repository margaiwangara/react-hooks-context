import React, { useEffect, useState } from "react";
import { AppProvider } from "../appContext";

export default function Page({ children }) {
  const [articles, storeArticles] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await fetch(
          "https://devnewsbucket.margaiwangara.me/api/articles"
        );
        const articles = await data.json();
        return storeArticles(articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, []);

  return (
    <AppProvider value={articles}>
      <div className="page">{children}</div>
    </AppProvider>
  );
}
