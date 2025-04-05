import ScreenReader from "../../../components/ScreenReader";

const Dharma = () => {
  const content = `
    Italian Dolomites
    Exploring the Dramatic Peaks and Rich Cultural Heritage

    The Italian Dolomites present a unique landscape of dramatic peaks and rich cultural heritage. This UNESCO World Heritage site offers a perfect blend of natural beauty and human history, with its distinctive pale mountains and charming mountain villages.

    The Unique Landscape
    The Dolomites are known for their unique geological formations and stunning natural beauty. The pale limestone peaks create a dramatic contrast against the deep blue sky, while the lush valleys below are dotted with picturesque villages and alpine meadows.

    Cultural Heritage
    The region's cultural heritage is deeply rooted in its mountain environment. Traditional Ladin culture thrives in the valleys, with its unique language, customs, and architecture. The mountain villages preserve centuries-old traditions while embracing modern mountain life.

    Mountain Life
    Life in the Dolomites revolves around the mountains. Traditional farming practices, alpine architecture, and seasonal festivals all reflect the deep connection between people and their mountain environment. The local cuisine, featuring hearty mountain dishes, is a testament to this relationship.

    Adventure Awaits
    The Dolomites offer endless opportunities for adventure. From challenging via ferrata routes to gentle valley walks, there's something for every level of experience. The region's extensive network of mountain huts and trails makes it a paradise for hikers and climbers.

    The Italian Dolomites are more than just a mountain range; they are a living landscape where nature and culture intertwine. The stunning natural beauty and rich human history create a unique experience that continues to inspire visitors from around the world.
  `;

  return (
    <div className="blog-post">
      <section className="hero">
        <div className="hero-content">
          <h1>Italian Dolomites</h1>
          <div className="hero-text">
            <p>Exploring the Dramatic Peaks and Rich Cultural Heritage</p>
          </div>
        </div>
      </section>

      <div className="article-content">
        <ScreenReader content={content} title="Italian Dolomites" />

        <p>
          The Italian Dolomites present a unique landscape of dramatic peaks and
          rich cultural heritage. This UNESCO World Heritage site offers a
          perfect blend of natural beauty and human history, with its
          distinctive pale mountains and charming mountain villages.
        </p>

        <h2>The Unique Landscape</h2>
        <p>
          The Dolomites are known for their unique geological formations and
          stunning natural beauty. The pale limestone peaks create a dramatic
          contrast against the deep blue sky, while the lush valleys below are
          dotted with picturesque villages and alpine meadows.
        </p>

        <h2>Cultural Heritage</h2>
        <p>
          The region's cultural heritage is deeply rooted in its mountain
          environment. Traditional Ladin culture thrives in the valleys, with
          its unique language, customs, and architecture. The mountain villages
          preserve centuries-old traditions while embracing modern mountain
          life.
        </p>

        <h2>Mountain Life</h2>
        <p>
          Life in the Dolomites revolves around the mountains. Traditional
          farming practices, alpine architecture, and seasonal festivals all
          reflect the deep connection between people and their mountain
          environment. The local cuisine, featuring hearty mountain dishes, is a
          testament to this relationship.
        </p>

        <h2>Adventure Awaits</h2>
        <p>
          The Dolomites offer endless opportunities for adventure. From
          challenging via ferrata routes to gentle valley walks, there's
          something for every level of experience. The region's extensive
          network of mountain huts and trails makes it a paradise for hikers and
          climbers.
        </p>

        <p>
          The Italian Dolomites are more than just a mountain range; they are a
          living landscape where nature and culture intertwine. The stunning
          natural beauty and rich human history create a unique experience that
          continues to inspire visitors from around the world.
        </p>
      </div>
    </div>
  );
};

export default Dharma;
