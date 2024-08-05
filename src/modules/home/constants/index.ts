import { Slide } from "../types";
import Charizard3D from "../assets/charizard3d.png";
import Silohuette from "../assets/silohuette.png";

export const CAROUSEL_SLIDES: Slide[] = [
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
