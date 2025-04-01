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
        <section className="featured-content">
          <h2>Latest Stories</h2>
          <div className="content-grid">
            <article className="content-card">
              <h3>Alpine Journal</h3>
              <p>Latest entries from the mountains</p>
            </article>
            <article className="content-card">
              <h3>Travel Stories</h3>
              <p>Journeys through wild places</p>
            </article>
            <article className="content-card">
              <h3>Poetry</h3>
              <p>Words from the peaks</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
