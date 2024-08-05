import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Slide } from "../../types";
import CarouselSlide from "./CarouselSlide";

interface CarouselProps {
  slides: Slide[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  useEffect(() => {
    const switchSlides = () => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const interval = setInterval(switchSlides, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box position={"relative"}>
      {slides.map((panel, index) => (
        <CarouselSlide
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
