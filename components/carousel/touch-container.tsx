"use client";

import "./carousel.module.css";
import { useState } from "react";

export interface TouchContainerProps extends React.HTMLAttributes<HTMLElement> {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export const TouchContainer = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  ...props
}: TouchContainerProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe && typeof onSwipeLeft === "function") {
        onSwipeLeft();
      } else if (isRightSwipe && typeof onSwipeRight === "function") {
        onSwipeRight();
      }
    }
  };

  return (
    <div
      {...props}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
};
