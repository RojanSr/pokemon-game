export const routes = {
  home: "/",
  pokedex: "/pokedex",
  news: "/news",
  videogame: "/videogame",
  tv: "/tv",
} as const;

export type RouteValues = (typeof routes)[keyof typeof routes];
