import React from "react";

const FirstAscent = () => {
  return (
    <div className="blog-post">
      <section className="hero">
        <h1>First Ascent</h1>
        <p className="subtitle">
          A technical account of the first successful ascent of the Matterhorn
        </p>
      </section>
      <div className="content">
        <div className="article-content">
          <p>
            The Matterhorn stands as one of the most iconic peaks in the Alps,
            its distinctive shape recognized worldwide. This technical climbing
            article explores the challenges and techniques required for a
            successful ascent.
          </p>

          <p>
            The North Face presents the most technical challenge, requiring
            advanced climbing skills and proper equipment. The route demands
            careful navigation through mixed terrain, combining rock, ice, and
            snow sections.
          </p>

          <div className="article-image">
            <img src="/alpineBanner.webp" alt="Matterhorn North Face" />
            <p className="image-caption">
              The Matterhorn's North Face presents a formidable challenge to
              climbers
            </p>
          </div>

          <p>
            Timing is crucial for a successful ascent. The best conditions
            typically occur in early summer, when the snow is stable but not too
            soft. Early starts are essential to avoid afternoon thunderstorms
            common in the Alps.
          </p>

          <p>
            Remember, the mountain will always be there. Never hesitate to turn
            back if conditions aren't right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstAscent;
