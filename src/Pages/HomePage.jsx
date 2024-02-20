import React from "react";
import Carousel from "../Components/home/carousel/Carousel";
import InfoBox from "../Components/home/infoBox/InfoBox";
import CounterBox from "../Components/home/counterBox/CounterBox";
import ProductBox from "../Components/home/productBox/ProductBox";
import FaQsBox from "../Components/home/faQsBox/FaQsBox";
import ContactMapBox from "../Components/home/contactMapBox/ContactMapBox";

function HomePage() {
  return (
    <div style={{ margin: "0" }}>
      <Carousel />
      <InfoBox
        src="./image/pokemon4.jpg"
        title="About us"
        description="Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers."
        contacts
      />
      <InfoBox
        src="./image/pokemon2.jpg"
        title="Our journey"
        description="Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers."
      />
      <CounterBox />
      <ProductBox />
      <FaQsBox />
      <ContactMapBox />
    </div>
  );
}

export default HomePage;
