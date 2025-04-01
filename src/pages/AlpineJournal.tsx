import ArticleCard from "../components/ArticleCard";

const AlpineJournal = () => {
  const articles = [
    {
      title: "First Ascent",
      excerpt:
        "A winter ascent of the Matterhorn, where every step is a dance with the mountain's icy embrace.",
      imageUrl: "/matterhorn.webp",
      slug: "first-ascent",
    },
    {
      title: "Mountain Weather",
      excerpt:
        "Understanding the complex patterns of alpine conditions and their impact on climbing decisions.",
      imageUrl: "/alpineWeather.webp",
      slug: "mountain-weather",
    },
    {
      title: "Solo in the Alps",
      excerpt:
        "The solitude and self-reliance of solo climbing in the heart of the European Alps.",
      imageUrl: "/soloAlps.webp",
      slug: "solo-alps",
    },
  ];

  return (
    <div className="alpine-journal">
      <section className="hero">
        <h1>Alpine Journal</h1>
        <p>Adventures across mountain ranges</p>
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

export default AlpineJournal;
