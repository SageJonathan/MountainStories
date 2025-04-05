import React from "react";
import { Link } from "react-router-dom";
import GlobeScene from "../components/GlobeScene";
import { poems } from "./Poems/poems";
import { alpineArticles } from "../content_data/alpineArticles/alpineArticles";
import { travelArticles } from "../content_data/travelArticles/travelArticles";

const Home: React.FC = () => {
  // Extract locations from poems
  const poemLocations = poems.map((poem) => ({
    name: poem.location.name,
    latitude: poem.location.latitude,
    longitude: poem.location.longitude,
    type: "poem" as const,
  }));

  // Extract locations from alpine articles
  const alpineLocations = alpineArticles.map((article) => ({
    name: article.location.name,
    latitude: article.location.latitude,
    longitude: article.location.longitude,
    type: "alpine" as const,
  }));

  // Extract locations from travel articles
  const travelLocations = travelArticles.map((article) => ({
    name: article.location.name,
    latitude: article.location.latitude,
    longitude: article.location.longitude,
    type: "travel" as const,
  }));

  // Combine all locations
  const locations = [...poemLocations, ...alpineLocations, ...travelLocations];

  return (
    <div className="home">
      <div className="globe-section">
        <div style={{ height: "400px", width: "100%" }}>
          <GlobeScene locations={locations} />
        </div>
        <div className="page-content">
          <h2 className="card-header">
            Choose your path through the Mountains
          </h2>
          <div className="card-grid">
            <Link to="/travel-stories" className="card travel-stories">
              <div className="card-content">
                <h3>Travel Stories</h3>
                <p>Adventures from around the world</p>
                <i className="fas fa-globe-americas card-icon"></i>
              </div>
            </Link>
            <Link to="/alpine-journal" className="card alpine-journal">
              <div className="card-content">
                <h3>Alpine Journal</h3>
                <p>Technical insights and climbing tales</p>
                <i className="fas fa-mountain card-icon"></i>
              </div>
            </Link>
            <Link to="/poetry" className="card poetry">
              <div className="card-content">
                <h3>Poetry</h3>
                <p>Poetic journeys through nature</p>
                <i className="fas fa-feather-alt card-icon"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
