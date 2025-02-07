"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1>Artigos</h1>
      <ul>
        {articles.map((article) => (
          <li key={article}>
            <a href={`/articles/${article}`}>article.title</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
