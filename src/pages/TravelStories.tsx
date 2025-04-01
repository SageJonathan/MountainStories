import ArticleCard from "../components/ArticleCard";

const TravelStories = () => {
  const articles = [
    {
      title: "Himalayan Trek",
      description:
        "A journey through the Annapurna Circuit, experiencing the rich culture and stunning landscapes of Nepal.",
      imageUrl: "/himalayanTrek.webp",
      link: "/travel-stories/himalayan-trek",
      location: {
        name: "Annapurna Circuit, Nepal",
        latitude: 28.5964,
        longitude: 83.8203,
      },
    },
    {
      title: "Alps Crossing",
      description:
        "Traversing the classic Haute Route from Chamonix to Zermatt, following in the footsteps of mountaineering history.",
      imageUrl: "/alpsCrossing.webp",
      link: "/travel-stories/alps-crossing",
      location: {
        name: "Chamonix to Zermatt, Swiss Alps",
        latitude: 46.0207,
        longitude: 7.7491,
      },
    },
    {
      title: "Patagonian Traverse",
      description:
        "Exploring the wild landscapes of Torres del Paine, where wind and weather shape the mountains.",
      imageUrl: "/patagonianTraverse.webp",
      link: "/travel-stories/patagonian-traverse",
      location: {
        name: "Torres del Paine, Chile",
        latitude: -50.9423,
        longitude: -73.4068,
      },
    },
  ];

  return (
    <div className="travel-stories">
      <section className="hero">
        <h1>Travel Stories</h1>
        <p>Tales from the road less traveled</p>
      </section>
      <div className="page-content">
        <div className="content-grid">
          {articles.map((article) => (
            <ArticleCard
              key={article.link}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              link={article.link}
              location={article.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelStories;
