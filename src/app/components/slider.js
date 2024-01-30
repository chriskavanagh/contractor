"use client";

import React, { useState } from "react";
import "../globals.css";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    dragSpeed: 1,
    initial: 3,
    slides: {
      origin: "center",
    },
    selector: ".first > .keen-slider__slide",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="navigation-wrapper keen-slider first">
        {/* <div ref={sliderRef} className="keen-slider first"> */}
        <div className="keen-slider__slide number-slide1">
          <Image src="/img/newKitchen.jpg" fill alt="img1" />
        </div>
        {/* <div className="keen-slider__slide number-slide2">
        <Image src="/img/pic1.jpg" fill alt="img2" />
      </div> */}
        <div className="keen-slider__slide number-slide2">
          <Image src="/img/pic7.jpg" fill alt="img2" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src="/img/shingles.jpg" fill alt="shingles" />
        </div>
      </div>

      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={e => e.stopPropagation() || instanceRef.current?.next()}
            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
          />
        </>
      )}
    </>
  );
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}
