import Slider from "react-slick";
import ScrollCard from "../components/ScrollCard";

function CardsScrollContainer() {
  var settings = {
    centerMode: false,
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 667,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerPadding: "30px",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="py-8 lg:w-[80vw] mx-auto mb-16 sm:mt-[110px] md:mt-[48px]">
      <Slider {...settings}>
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
      </Slider>
    </div>
  );
}

export default CardsScrollContainer;
