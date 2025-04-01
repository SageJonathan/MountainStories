const AlpineJournal = () => {
  return (
    <div className="alpine-journal">
      <section className="hero">
        <h1>Alpine Journal</h1>
        <p>Adventures across mountain ranges</p>
      </section>
      <div className="page-content">
        <h2>Recent Entries</h2>
        <div className="content-grid">
          <article className="content-card">
            <h3>First Ascent</h3>
            <p>Climbing the Matterhorn in winter</p>
          </article>
          <article className="content-card">
            <h3>Mountain Weather</h3>
            <p>Understanding alpine conditions</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AlpineJournal;
