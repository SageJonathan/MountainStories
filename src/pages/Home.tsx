import React from "react";
import { Link } from "react-router-dom";
import GlobeScene from "../components/GlobeScene";

const Home = () => {
  const locations = [
    // Poems
    {
      name: "Matterhorn, Zermatt, Switzerland",
      latitude: 45.9766,
      longitude: 7.6586,
      type: "poem" as const,
    },
    {
      name: "Eiger North Face, Grindelwald, Switzerland",
      latitude: 46.5778,
      longitude: 8.0053,
      type: "poem" as const,
    },
    // Travel Stories
    {
      name: "Annapurna Circuit, Nepal",
      latitude: 28.5964,
      longitude: 83.8203,
      type: "travel" as const,
    },
    {
      name: "Chamonix to Zermatt, Swiss Alps",
      latitude: 46.0207,
      longitude: 7.7491,
      type: "travel" as const,
    },
    {
      name: "Torres del Paine, Chile",
      latitude: -50.9423,
      longitude: -73.4068,
      type: "travel" as const,
    },
    // Alpine Journal
    {
      name: "Matterhorn, Zermatt, Switzerland",
      latitude: 45.9766,
      longitude: 7.6586,
      type: "alpine" as const,
    },
    {
      name: "Alpine region, Europe",
      latitude: 46.2276,
      longitude: 6.1432,
      type: "alpine" as const,
    },
    {
      name: "European Alps",
      latitude: 46.2276,
      longitude: 6.1432,
      type: "alpine" as const,
    },
  ];

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
                <p>Words inspired by the peaks</p>
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
