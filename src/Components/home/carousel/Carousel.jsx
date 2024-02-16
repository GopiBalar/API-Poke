import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspedd: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const data = [
    { src: "/image/pokemon.jpg", alt: "01" },
    { src: "/image/pokemon2.jpg", alt: "02" },
    { src: "/image/pokemon3.jpeg", alt: "03" },
  ];

  const components = data.map((value, index) => {
    return <Slide key={index} src={value.src} alt={value.alt} />;
  });

  return (
    <div>
      <Slider {...settings}>{components}</Slider>
    </div>
  );
}

export default Carousel;
