import { CAROUSEL_SLIDES } from "./constants";
import OverlayBG from "./components/OverlayBG";
import Carousel from "./components/Carousel/Carousel";
import Reveal from "@shared/components/common/Reveal";

const Home = () => {
  return (
    <>
      <OverlayBG />
      <Reveal>
        <Carousel slides={CAROUSEL_SLIDES} intervalMS={4000} />
      </Reveal>
    </>
  );
};

export default Home;
