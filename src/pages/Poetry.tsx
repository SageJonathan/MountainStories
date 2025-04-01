import PoemDisplay from "../components/PoemDisplay";

const Poetry = () => {
  const poems = [
    {
      title: "Summit Dawn",
      imageUrl: "/vert.webp",
      imageAnnotation: "First light on the Matterhorn, Zermatt, Switzerland",
      poemText: `The mountain wakes in golden light,
A silent sentinel of night.
Its peaks reach for the morning sky,
As shadows slowly pass us by.

The air is crisp, the world is still,
As we begin our upward climb.
Each step a testament to will,
Each breath a rhythm, keeping time.`,
      location: {
        name: "Matterhorn, Zermatt, Switzerland",
        latitude: 45.9766,
        longitude: 7.6586,
      },
    },
    {
      title: "Alpine Echoes",
      imageUrl: "/horz.webp",
      imageAnnotation: "The Eiger North Face, Grindelwald, Switzerland",
      poemText: `In the shadow of the wall,
Where echoes of the past still call,
The mountain speaks in whispers low,
Of climbers who have come and gone.

The rock, it holds their stories still,
In every crack and every hill.
And as we climb, we add our own,
To the mountain's ancient tone.`,
      location: {
        name: "Eiger North Face, Grindelwald, Switzerland",
        latitude: 46.5778,
        longitude: 8.0053,
      },
    },
  ];

  return (
    <div className="poetry">
      <section className="hero">
        <h1>Poetry</h1>
        <p>Visions from the peaks</p>
      </section>
      <div className="page-content">
        {poems.map((poem, index) => (
          <PoemDisplay
            key={index}
            title={poem.title}
            imageUrl={poem.imageUrl}
            imageAnnotation={poem.imageAnnotation}
            poemText={poem.poemText}
            location={poem.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Poetry;
