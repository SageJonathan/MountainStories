import React from "react";

const WeatherReport = () => {
  return (
    <div className="blog-post">
      <section className="hero">
        <h1>Weather Report</h1>
        <p className="subtitle">
          Understanding weather patterns in the high Alps
        </p>
      </section>
      <div className="content">
        <div className="article-content">
          <p>
            Weather in the high Alps can change rapidly, presenting unique
            challenges for climbers and hikers. Understanding these patterns is
            crucial for safe mountain travel.
          </p>

          <p>
            The high-altitude environment creates its own weather systems,
            influenced by the complex topography of the Alps. Local conditions
            can differ significantly from valley forecasts.
          </p>

          <div className="article-image">
            <img src="/alpineBanner.webp" alt="Alpine Weather" />
            <p className="image-caption">
              Dramatic weather patterns in the high Alps
            </p>
          </div>

          <p>
            Early morning often brings the most stable conditions, with
            thunderstorms typically developing in the afternoon. Monitoring
            weather patterns and having a flexible schedule is essential.
          </p>

          <p>
            Always check multiple weather sources and local conditions before
            setting out. The mountain environment demands respect and careful
            planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
