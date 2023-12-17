"use client";

import React from "react";
//import * as pics from "/img";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      origin: "center",
    },
    selector: ".first > .keen-slider__slide",
  });

  return (
    <div ref={sliderRef} className="keen-slider first">
      <div className="keen-slider__slide number-slide1">
        <Image src="/img/pic1.jpg" fill alt="img1" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image src="/img/pic2.jpg" width={600} height={700} alt="img2" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image src="/img/pic3.jpg" width={600} height={700} alt="img3" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <Image src="/img/pic7.jpg" width={600} height={700} alt="img7" />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image src="/img/pic5.jpg" width={600} height={700} alt="img5" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <Image src="/img/pic6.jpg" width={600} height={700} alt="img6" />
      </div>
    </div>
  );
}
