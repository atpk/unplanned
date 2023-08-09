interface Props {
  review: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
}
const ReviewItem = ({ review, imageSrc, imageAlt, reverse }: Props) => {
  const orderClass = reverse ? "order-lg-2" : "";

  return (
    <div className="row align-items-center my-5">
      <div className={`col-lg-6 ${orderClass}`}>
        <div className="review-text">
          <p>{review}</p>
        </div>
      </div>
      <div className={`col-lg-6 ${orderClass}`}>
        <img src={imageSrc} alt={imageAlt} className="img-fluid" />
      </div>
    </div>
  );
};

export default ReviewItem;
