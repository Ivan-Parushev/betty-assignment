"use client";
import carouselStyles from "./carousel.module.css";
import { useState } from "react";
import { TouchContainer } from "./touch-container";
import { CarouselContainer } from "./carousel-container";
import { CarouselItem } from "./carousel-item";
import { CarouselText } from "./carousel-text";
import { CarouselCounter } from "./carousel-counter";

import { images } from "./mock-data";

export interface CarouselProps extends React.HTMLAttributes<HTMLElement> {}

export const Carousel = ({ ...props }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const maxIndex = images.length - 1;

  const onSwipeLeft = () => {
    setCurrent((prev) => {
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const onSwipeRight = () => {
    setCurrent((prev) => {
      return prev === maxIndex ? 0 : prev + 1;
    });
  };

  return (
    <TouchContainer onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <CarouselContainer className={carouselStyles.container}>
        <CarouselItem
          className={carouselStyles.item}
          imgSrc={images[current].src}
          alt={images[current].alt}
        />
        <CarouselText
          className={carouselStyles.text}
          text={`Image - ${images[current].alt}`}
        />
        <CarouselCounter
          className={carouselStyles.counter}
          total={images.length}
          current={current + 1}
        />
      </CarouselContainer>
    </TouchContainer>
  );
};
