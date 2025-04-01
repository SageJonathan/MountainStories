import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  location: {
    name: string;
    latitude: number;
    longitude: number;
  };
}

const ArticleCard = ({
  title,
  description,
  imageUrl,
  link,
  location,
}: ArticleCardProps) => {
  return (
    <Link to={link} className="article-card">
      <div
        className="article-card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="article-card-overlay">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="article-card-content">
        <p>{description}</p>
        <div className="article-location">
          <i className="fas fa-map-marker-alt"></i>
          <span>{location.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
