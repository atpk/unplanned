import ReviewItem from "./ReviewItem";

const ReviewPage = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5">Customer Reviews</h1>
      <ReviewItem
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat libero eget est cursus, eu aliquet justo tincidunt."
        imageSrc="/images/6.jpg"
        imageAlt="John Doe"
        reverse={false}
      />
      <ReviewItem
        review="Pellentesque efficitur arcu a lorem convallis, quis mattis erat laoreet. Nulla facilisi."
        imageSrc="/images/5.jpg"
        imageAlt="Jane Smith"
        reverse={true}
      />
      {/* Add more ReviewItems as needed */}
    </div>
  );
};

export default ReviewPage;
