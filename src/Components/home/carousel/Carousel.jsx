import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        right: "2.5%",
        transform: "translate(-2.5%,-50%)",
        height: "50px",
        width: "50px",
        zIndex: 100,
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "50%",
        border: "none",
      }}
      onClick={onClick}
    >
      <i style={{ fontSize: "1rem" }} className="fa-solid fa-arrow-right"></i>
    </button>
  );
}

function PreviousArrow(props) {
  const { onClick } = props;
  return (
    <button
      style={{
        position: "absolute",
        top: "50%",
        left: "2.5%",
        transform: "translate(-2.5%,-50%)",
        height: "50px",
        width: "50px",
        zIndex: 100,
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "50%",
        border: "none",
      }}
      onClick={onClick}
    >
      <i style={{ fontSize: "1rem" }} className="fa-solid fa-arrow-left"></i>
    </button>
  );
}

function Carousel() {
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspedd: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  const data = [
    {
      src: "https://images.unsplash.com/photo-1628526498666-add5eddf65df?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "03",
    },
    { src: "/image/pokemon2.jpg", alt: "02" },
    {
      src: "https://images.unsplash.com/photo-1600687692479-86b5e514a678?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "01",
    },
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
