import ArticleCard from "../components/ArticleCard";

const TravelStories = () => {
  const articles = [
    {
      title: "Himalayan Trek",
      excerpt:
        "Walking the Annapurna Circuit through Nepal's most stunning landscapes, from lush valleys to high-altitude passes.",
      imageUrl: "/himalayanTrek.webp",
      slug: "himalayan-trek",
    },
    {
      title: "Alps Crossing",
      excerpt:
        "From Chamonix to Zermatt, following the footsteps of mountaineering history across the Swiss Alps.",
      imageUrl: "/alpsCrossing.webp",
      slug: "alps-crossing",
    },
    {
      title: "Patagonian Traverse",
      excerpt:
        "Exploring the wild landscapes of Torres del Paine, where wind and weather shape the land.",
      imageUrl: "/patagonia.webp",
      slug: "patagonian-traverse",
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
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.imageUrl}
              slug={article.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelStories;
