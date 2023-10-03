import Carousel from "react-bootstrap/Carousel";
import miImagen1 from "../../images/major.jpg";
import miImagen2 from "../../images/math.webp";
import miImagen3 from "../../images/unah.webp";
import "./styles.css";

function MainCarousel() {
  return (
    <Carousel variant="dark" className="lessWidth mainSlider">
      <Carousel.Item>
        <img className="carousel-image " src={miImagen1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className=" carousel-image " src={miImagen3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
export default MainCarousel;
