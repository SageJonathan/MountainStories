import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

const ArticleCard = ({ title, excerpt, imageUrl, slug }: ArticleCardProps) => {
  return (
    <Link to={`/article/${slug}`} className="article-card">
      <div
        className="article-card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="article-card-overlay">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="article-card-content">
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
