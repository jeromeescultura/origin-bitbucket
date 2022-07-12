import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useState } from "react";
import { Button } from "@mui/material";

function ProductContainer({ source, version }) {
  const productDetails = [
    {
      title: "GreenPower",
      leaf: 3,
      icon: "/icons/products/windpower.png",
      impact: "Through supporting Australian renewables",
      plan: "Available on any Origin Electricity plan",
      siteChanges: "None",
      contracts: "None",
      benefits: [
        <span key="0">
          All standard{" "}
          <u
            className="hover:cursor-pointer"
            onClick={() =>
              document.getElementById("business-club").scrollIntoView()
            }
          >
            Business Club benefits
          </u>
        </span>,
        "Plus tariff review to potentially minimise electricity costs",
      ],
    },
    {
      title: "Solar",
      leaf: 4,
      icon: "/icons/products/solar.svg",
      impact: "Through using self generated renewable electricity",
      plan: "A range of solar plans available",
      siteChanges: "Yes",
      contracts: "None",
      benefits: [
        <span key="0">
          All standard{" "}
          <u
            className="hover:cursor-pointer"
            onClick={() =>
              document.getElementById("business-club").scrollIntoView()
            }
          >
            Business Club benefits
          </u>
        </span>,
        "Aim to minimise ongoing electricity costs by using clean self generated solar power",
      ],
    },
    {
      title: "Origin Go Zero",
      leaf: 2,
      icon: "/icons/products/go-zero.svg",
      impact: "Through offsetting your electricity use",
      plan: `Available on ${
        source === "edm" && version === "a" ? "select" : "any"
      } Origin Electricity plan`,
      siteChanges: "None",
      contracts: "None",
      benefits: [
        <span key="0">
          All standard{" "}
          <u
            className="hover:cursor-pointer"
            onClick={() =>
              document.getElementById("business-club").scrollIntoView()
            }
          >
            Business Club benefits
          </u>
        </span>,
      ],
    },
    {
      title: "Decarbonisation Interview",
      leaf: 5,
      icon: "/icons/products/netzero.png",
      impact:
        "Participate in research to help develop future services tailored to your business",
      plan: "Available on any Origin Energy plan",
      siteChanges: "None",
      contracts: "None",
      benefits: [
        <span key="0">
          All standard{" "}
          <u
            className="hover:cursor-pointer"
            onClick={() =>
              document.getElementById("business-club").scrollIntoView()
            }
          >
            Business Club benefits
          </u>
        </span>,
        "Have your say in future energy solutions",
      ],
    },
  ];

  var settings = {
    speed: 500,
    arrows: false,
    centerPadding: "30px",
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 lg:w-[80vw] mx-auto mb-16">
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
