export const routes = {
  home: "/",
  pokedex: "/pokedex",
  news: "/news",
  play: "/play",
  tv: "/tv",
} as const;

export type RouteValues = (typeof routes)[keyof typeof routes];
