interface PoemDisplayProps {
  title: string;
  imageUrl: string;
  imageAnnotation: string;
  poemText: string;
}

const PoemDisplay = ({
  title,
  imageUrl,
  imageAnnotation,
  poemText,
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
    </article>
  );
};

export default PoemDisplay;
