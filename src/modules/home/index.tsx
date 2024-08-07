import { CAROUSEL_SLIDES } from "./constants";
import OverlayBG from "./components/OverlayBG";
import Carousel from "./components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <OverlayBG />
      <Carousel slides={CAROUSEL_SLIDES} intervalMS={4000} />
    </>
  );
};

export default Home;
