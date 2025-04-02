import React from "react";
import ArticleCard from "../components/ArticleCard";
import { alpineArticles } from "../content_data/alpineArticles/alpineArticles";

const AlpineJournal = () => {
  return (
    <div className="alpine-journal">
      <section className="hero">
        <h1>Alpine Journal</h1>
        <p>Adventures across mountain ranges</p>
      </section>
      <div className="page-content">
        <div className="content-grid">
          {alpineArticles.map((article) => (
            <ArticleCard
              key={article.link}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              link={article.link}
              location={article.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlpineJournal;
