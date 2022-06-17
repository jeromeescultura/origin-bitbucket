import Slider from "react-slick";
import ProductCard from "../components/ProductCard";

function ProductContainer() {
  const productDetails = [
    {
      title: "Origin Go Zero",
      leaf: 2,
      icon: "/icons/products/go-zero.svg",
      impact: "Through offsetting your energy use",
      plan: "Available on any Origin Energy plan",
      siteChanges: "None",
      contracts: "None",
      benefits: ["All standard clean business club benefits"],
    },
    {
      title: "GreenPower",
      leaf: 3,
      icon: "/icons/products/greenpower.svg",
      impact: "Through funding renewable generators",
      plan: "Available on any Origin Energy plan",
      siteChanges: "None",
      contracts: "None",
      benefits: [
        "All standard clean business club benefits",
        "Tariff review to reduce your energy costs",
      ],
    },
    {
      title: "Solar",
      leaf: 4,
      icon: "/icons/products/solar.svg",
      impact: "Through using self generated renewable energy",
      plan: "Competitive solar plans available",
      siteChanges: "Yes",
      contracts: "None",
      benefits: [
        "All standard clean business club benefits",
        "Mimise energy costs by using clean, self generated solar power",
      ],
    },
    {
      title: "Net-Zero strategy review",
      leaf: 5,
      icon: "/icons/products/net-zero.svg",
      impact: "Have input in the development of impact reduction services",
      plan: "Available on any Origin Energy plan",
      siteChanges: "None",
      contracts: "None",
      benefits: [
        "All standard clean business club benefits",
        "Have your say in future & upcoming solutions",
      ],
    },
  ];

  var settings = {
    centerMode: false,
    infinite: false,
    slidesToShow: 4,
    speed: 500,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerMode: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 840,
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
          centerPadding: "30px",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
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
        {productDetails.map((detail, index) => (
          <ProductCard
            key={index}
            title={detail.title}
            leaf={detail.leaf}
            icon={detail.icon}
            impact={detail.impact}
            plan={detail.plan}
            siteChanges={detail.siteChanges}
            contracts={detail.contracts}
            benefits={detail.benefits}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ProductContainer;
