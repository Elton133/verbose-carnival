import React from "react";
import "@dotlottie/player-component";

const Banner = () => {
  return (
    <section
      id="banner-image"
      className="row pb-0 flex items-center justify-center"
    >
      <dotlottie-player
        src="https://lottie.host/3b20cccc-85b1-4a8b-94f0-475ac9919f31/YOHxwUAy23.json"
        background="transparent"
        speed="1"
        style={{ width: "400px", height: "350px" }}
        direction="1"
        playMode="normal"
        loop
        autoplay
      ></dotlottie-player>
    </section>
  );
};

export default Banner;
