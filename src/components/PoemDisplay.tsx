interface PoemDisplayProps {
  title: string;
  imageUrl: string;
  imageAnnotation: string;
  poemText: string;
  location: {
    name: string;
    latitude: number;
    longitude: number;
  };
}

const PoemDisplay = ({
  title,
  imageUrl,
  imageAnnotation,
  poemText,
  location,
}: PoemDisplayProps) => {
  return (
    <article className="poem-display">
      <h2>{title}</h2>
      <div className="poem-image">
        <img src={imageUrl} alt={title} />
        <p className="image-annotation">{imageAnnotation}</p>
      </div>
      <div className="poem-text">
        {poemText.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="poem-location">
        <i className="fas fa-map-marker-alt"></i>
        <span>{location.name}</span>
      </div>
    </article>
  );
};

export default PoemDisplay;
