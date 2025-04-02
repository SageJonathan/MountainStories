import React from "react";

const SoloInTheAlps = () => {
  return (
    <div className="blog-post">
      <section className="hero">
        <h1>Solo in the Alps</h1>
        <p className="subtitle">
          A personal journey through the high mountains
        </p>
      </section>
      <div className="content">
        <div className="article-content">
          <p>
            Solo climbing in the Alps offers a unique experience of
            self-reliance and personal challenge. This article explores the
            mental and physical aspects of climbing alone in the high mountains.
          </p>

          <p>
            The solitude of solo climbing brings both challenges and rewards.
            Every decision, every movement, every moment of doubt must be
            handled independently.
          </p>

          <div className="article-image">
            <img src="/alpineBanner.webp" alt="Solo Climbing" />
            <p className="image-caption">
              The freedom and challenge of solo climbing in the Alps
            </p>
          </div>

          <p>
            Preparation is key for solo climbing. This includes thorough route
            planning, careful equipment selection, and developing strong
            self-assessment skills.
          </p>

          <p>
            The experience of climbing alone in the Alps is both humbling and
            empowering, offering unique insights into personal limits and
            capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoloInTheAlps;
