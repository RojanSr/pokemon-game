import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Slide } from "@home/types";
import CarouselPanel from "./CarouselPanel";

interface CarouselProps {
  slides: Slide[];
  intervalMS: number;
}

const Carousel = ({ slides, intervalMS }: CarouselProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  useEffect(() => {
    const switchSlides = () => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const interval = setInterval(switchSlides, intervalMS);

    return () => clearInterval(interval);
  }, [slides.length, intervalMS]);

  return (
    <Box position={"relative"}>
      {slides.map((panel, index) => (
        <CarouselPanel
          key={panel.id}
          panel={panel}
          activeSlideIndex={activeSlideIndex}
          index={index}
        />
      ))}
    </Box>
  );
};

export default Carousel;
