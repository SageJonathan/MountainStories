
import { Link } from "react-router-dom";
import GlobeScene from "../components/GlobeScene";

const Home = () => {
  return (
    <div className="home">
      <div className="page-content">
        <section className="globe-section">
          <GlobeScene />
          <h2>Explore Mountain Stories</h2>
          <p className="globe-description">
            Journey through tales from the world's most beautiful peaks
          </p>
        </section>
          <h2> Choose your path through the Mountains</h2>
        <div className="card-grid">
          <Link to="/travel-stories" className="card travel-stories">
            <div className="card-content">
              <h3>Travel Stories</h3>
              <p>Journey through the world's most breathtaking landscapes</p>
              <div className="card-icon">
                <i className="fas fa-mountain"></i>
              </div>
            </div>
          </Link>

          <Link to="/alpine-journal" className="card alpine-journal">
            <div className="card-content">
              <h3>Alpine Journal</h3>
              <p>Technical insights and climbing adventures</p>
              <div className="card-icon">
                <i className="fas fa-climbing"></i>
              </div>
            </div>
          </Link>

          <Link to="/poetry" className="card poetry">
            <div className="card-content">
              <h3>Poetry</h3>
              <p>Words inspired by the mountains</p>
              <div className="card-icon">
                <i className="fas fa-feather-alt"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
