import { Box } from "@chakra-ui/react";
import Charizard3D from "./assets/charizard3d.png";
import Silohuette from "./assets/silohuette.png";
import Carousel, { CarouselProps } from "./components/Carousel";

const CAROUSEL_SLIDES: CarouselProps["slides"] = [
  {
    id: 1,
    title: "Play: Who's That Pokémon?",
    imageSrc: Silohuette,
    subText:
      "Think you know your Pokémon? Prove it! This game is all about guessing which Pokémon is hiding in the shadows. You'll see a blurry pic of a Pokémon and have to guess who it is.",
    btn: {
      name: "Play!",
      to: "/videogame",
    },
  },
  {
    id: 2,
    title: "Pokédex",
    imageSrc: Charizard3D,
    subText:
      "Your personal Pokémon encyclopedia! This is where you collect information about all the amazing creatures you encounter. It's like a digital binder filled with facts, stats, and pictures of every Pokémon.",
    btn: {
      name: "Discover",
      to: "/pokedex",
    },
  },
];

const Home = () => {
  return (
    <>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        h={"100vh"}
        overflow={"hidden"}
        zIndex={-1}
      >
        <Box
          position="absolute"
          top="-30%"
          right={"-45%"}
          width="100vw"
          height="150vh"
          bg="#b8c370"
          transform={"rotate(8deg)"}
          zIndex={-9}
        />
      </Box>
      <Carousel slides={CAROUSEL_SLIDES} />
    </>
  );
};

export default Home;
