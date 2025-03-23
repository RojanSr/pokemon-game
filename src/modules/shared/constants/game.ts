import { DifficultyType } from "@play/Play";
import { PokeRegions } from ".";

type GameConfig = {
  showImage: boolean;
  options: "given" | "user_input";
  timerForEachGuess: null | 60000 | 30000; // null | one minute | thirty-seconds
  amountOfWrongGuesses: "infinite" | 5 | 3 | "instant_death";
  regions: PokeRegions[];
};

export const DIFFICULTY_DESCRIPTION: Record<DifficultyType, string[]> = {
  easy: [
    "Image of Pokemon",
    "Four options",
    "No Timer",
    "Infinite wrong guesses",
    "Kanto and Johto regions",
  ],
  medium: [
    "Silhouette of Pokemon",
    "Four options",
    "One minute Timer for each guess",
    "Five Wrong Guesses",
    "Kanto, Johto, Hoenn regions",
  ],
  hard: [
    "Silhouette of Pokemon",
    "Four options",
    "Thirty seconds Timer for each guess",
    "Three Wrong Guesses",
    "Kanto, Johto, Hoenn, Sinnoh, Unova regions",
  ],
  hardcore: [
    "Silhouette of Pokemon",
    "User has to type",
    "Thirty seconds Timer for each guess",
    "Instant Death",
    "All regions",
  ],
};

export const DIFFICULTY_CONFIG: Record<DifficultyType, GameConfig> = {
  easy: {
    showImage: true,
    options: "given",
    timerForEachGuess: null,
    amountOfWrongGuesses: "infinite",
    regions: ["kanto", "johto"],
  },
  medium: {
    showImage: false,
    options: "given",
    timerForEachGuess: 60000,
    amountOfWrongGuesses: 5,
    regions: ["kanto", "johto", "hoenn"],
  },
  hard: {
    showImage: false,
    options: "given",
    timerForEachGuess: 30000,
    amountOfWrongGuesses: 3,
    regions: ["kanto", "johto", "hoenn", "sinnoh", "unova"],
  },
  hardcore: {
    showImage: false,
    options: "user_input",
    timerForEachGuess: 30000,
    amountOfWrongGuesses: "instant_death",
    regions: [
      "kanto",
      "johto",
      "hoenn",
      "sinnoh",
      "unova",
      "alola",
      "galar",
      "kalos",
      "paldea",
    ],
  },
};

export const REGION_POKEDEX_MAP: Record<
  PokeRegions,
  {
    from: number;
    to: number;
  }
> = {
  kanto: {
    from: 1,
    to: 151,
  },
  johto: {
    from: 152,
    to: 251,
  },
  hoenn: {
    from: 252,
    to: 386,
  },
  sinnoh: {
    from: 387,
    to: 493,
  },
  unova: {
    from: 494,
    to: 649,
  },
  kalos: {
    from: 650,
    to: 721,
  },
  alola: {
    from: 722,
    to: 809,
  },
  galar: {
    from: 810,
    to: 898,
  },
  paldea: {
    from: 899,
    to: 1025,
  },
};
