import Image from "next/image";
import Slider from "react-slick";
import ButtonComponent from "./ButtonComponent";

function CardScroll() {
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="bg-white mx-4 px-8 py-10 rounded-xl flex flex-col gap-2 items-center text-center space-y-6">
          <div className="w-12 h-12">
            <Image
              src="/icons/personalized.svg"
              width={50}
              height={50}
              objectFit="contain"
              alt="icon"
            />
          </div>

          <p className="font-bold">On-Site Energy Audit</p>
          <p>
            Assess your consumpion and identify inefficient energy use and areas
            to save.
          </p>
          <ul className="space-y-8 text-left py-8">
            <li className="flex gap-4">
              <Image
                src="/icons/flame.svg"
                width={15}
                height={15}
                objectFit="contain"
              />
              <p> Discount on fee for Origin customers</p>
            </li>
            <li className="flex gap-4">
              <Image
                src="/icons/flame.svg"
                width={15}
                height={15}
                objectFit="contain"
              />
              <p> Provided by an experienced auditor</p>
            </li>
            <li className="flex gap-4">
              <Image
                src="/icons/flame.svg"
                width={15}
                height={15}
                objectFit="contain"
              />
              <p> Guaranteed return on fee</p>
            </li>
            <li className="flex gap-4">
              <Image
                src="/icons/flame.svg"
                width={15}
                height={15}
                objectFit="contain"
              />
              <p> Business club exclusive services</p>
            </li>
          </ul>
          <ButtonComponent type="border" text="Find out more" />
        </div>
      </Slider>
    </div>
  );
}

export default CardScroll;
