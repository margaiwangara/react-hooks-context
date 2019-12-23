import React, { useState, useEffect } from "react";

export default function Home() {
  const [articles, getArticles] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await fetch(
          "https://devnewsbucket.margaiwangara.me/api/articles"
        );
        const articles = await data.json();
        return getArticles(articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, []);

  return <div>data:{console.log(articles)}</div>;
}
