import Carousel from "./components/Carousel/Carousel";
import { CAROUSEL_SLIDES } from "./constants";
import OverlayBG from "./components/OverlayBG";

const Home = () => {
  return (
    <>
      <OverlayBG />
      <Carousel slides={CAROUSEL_SLIDES} />
    </>
  );
};

export default Home;
