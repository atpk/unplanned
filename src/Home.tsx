import Carousel from "./components/Carousel";
import ImageCard from "./components/ImageCard";
import Testimonial from "./components/Testimonial";
import VerticalSpace from "./components/VerticalSpace";

function Home() {
  const cardData = [
    {
      imageUrl: "/images/11.jpg",
      caption:
        "Image 1 Caption it said tha t asdfjsa fsadfijw klsd jsdoicawca ldkawd;o n",
    },
    {
      imageUrl: "/images/10.jpg",
      caption: "Image 2 Caption",
    },
    {
      imageUrl: "/images/9.jpg",
      caption: "Image 3 Caption",
    },
    {
      imageUrl: "/images/8.jpg",
      caption: "Image 4 Caption",
    },
    {
      imageUrl: "/images/7.jpg",
      caption: "Image 5 Caption",
    },
    {
      imageUrl: "/images/6.jpg",
      caption: "Image 6 Caption",
    },
    // Add more card data as needed
  ];

  const testimonials = [
    {
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere sapien eget nibh egestas, ac luctus lorem euismod.",
      avatar: "/images/5.jpg",
    },
    // Add more testimonials here
  ];

  return (
    <>
      <VerticalSpace space="2px" />
      <Carousel />
      <VerticalSpace space="5rem" />

      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mx-auto" key={index}>
              <ImageCard imageUrl={card.imageUrl} caption={card.caption} />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </>
  );
}

export default Home;
