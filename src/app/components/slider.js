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
    initial: 3,
    slides: {
      origin: "center",
    },
    selector: ".first > .keen-slider__slide",
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider first">
        <div className="keen-slider__slide number-slide1">
          <Image src="/img/newKitchen.jpg" fill alt="img1" />
        </div>
        {/* <div className="keen-slider__slide number-slide2">
        <Image src="/img/pic1.jpg" fill alt="img2" />
      </div> */}
        <div className="keen-slider__slide number-slide4">
          <Image src="/img/pic7.jpg" fill alt="img7" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src="/img/shingles.jpg" fill alt="shingles" />
        </div>
      </div>
    </>
  );
}
