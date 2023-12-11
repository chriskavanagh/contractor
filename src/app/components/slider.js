"use client";

import React from "react";
//import * as pics from "/img";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="number-slide1">
        <Image src="/img/pic1.jpg" width={600} height={500} alt="img1" />
      </div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
}
