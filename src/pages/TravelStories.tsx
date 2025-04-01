const TravelStories = () => {
  return (
    <div className="travel-stories">
      <section className="hero">
        <h1>Travel Stories</h1>
        <p>Tales from the road less traveled</p>
      </section>
      <div className="page-content">
        <h2>Featured Journeys</h2>
        <div className="content-grid">
          <article className="content-card">
            <h3>Himalayan Trek</h3>
            <p>Walking the Annapurna Circuit</p>
          </article>
          <article className="content-card">
            <h3>Alps Crossing</h3>
            <p>From Chamonix to Zermatt</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TravelStories;
