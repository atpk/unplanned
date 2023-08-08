import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  const style = { width: "100%", height: "100%", borderRadius: "5px" };
  return (
    <MDBCarousel showControls fade className="container">
      <MDBCarouselItem
        className="d-block carousel-image"
        style={style}
        itemId={1}
        src="/images/6.jpg"
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="d-block carousel-image"
        style={style}
        itemId={2}
        src="/images/7.jpg"
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="d-block carousel-image"
        style={style}
        itemId={3}
        src="/images/8.jpg"
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
