// import "./card.css";

interface Props {
  imageUrl: string;
  caption: string;
}

const ImageCard = ({ imageUrl, caption }: Props) => {
  const imageStyle = {
    width: "20rem",
    height: "10rem",
    borderRadius: "3%",
  };
  const cardStyle = { width: "20rem" };
  return (
    <div className="card border-0" style={cardStyle}>
      <img
        src={imageUrl}
        className="card-img-top"
        style={imageStyle}
        alt="Card"
      />
      <div className="card-body d-flex align-items-center justify-content-center">
        <p className="card-text">{caption}</p>
      </div>
    </div>
  );
};

export default ImageCard;
