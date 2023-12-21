"use client";

import React from "react";
import "../globals.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    dragSpeed: 1,
    initial: 1,
    slides: {
      origin: "center",
    },
    selector: ".first > .keen-slider__slide",
  });

  return (
    <div ref={sliderRef} className="keen-slider first">
      <div className="keen-slider__slide number-slide1">
        <Image src="/img/pic2.jpg" fill priority={true} alt="img1" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image src="/img/pic1.jpg" fill alt="img2" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image src="/img/pic3.jpg" fill alt="img3" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <Image src="/img/pic7.jpg" fill alt="img7" />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image src="/img/pic5.jpg" fill alt="img5" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <Image src="/img/pic6.jpg" fill alt="img6" />
      </div>
    </div>
  );
}
