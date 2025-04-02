import React from "react";
import ArticleCard from "../components/ArticleCard";
import { travelArticles } from "../content_data/travelArticles/travelArticles";

const TravelStories = () => {
  return (
    <div className="travel-stories">
      <section className="hero">
        <h1>Travel Stories</h1>
        <p>Journeys through mountain landscapes</p>
      </section>
      <div className="page-content">
        <div className="content-grid">
          {travelArticles.map((article) => (
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

export default TravelStories;
