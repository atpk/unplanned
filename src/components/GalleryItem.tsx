interface Props {
  imageSrc: string;
  title: string;
}

const GalleryItem = ({ imageSrc, title }: Props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* Add any additional information here */}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
