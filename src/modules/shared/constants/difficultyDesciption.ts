import { DifficultyType } from "@play/Play";

export const difficultyDescription: Record<DifficultyType, string[]> = {
  easy: [
    "Image of Pokemon is shown",
    "Four options are given",
    "No Timer",
    "Infinite wrong guesses",
  ],
  medium: [
    "Silhouette of Pokemon is shown",
    "Four options are given",
    "One minute Timer for each guess",
    "Five Wrong Guesses",
  ],
  hard: [
    "Silhouette of Pokemon is shown",
    "No options given",
    "One minute Timer for each guess",
    "Three Wrong Guesses",
  ],
  hardcore: [
    "Silhouette of Pokemon is shown",
    "No options given",
    "Thirty second Timer for each guess",
    "Instant Death",
  ],
};
