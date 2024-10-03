export const routes = {
  home: "/",
  pokedex: "/pokedex",
  news: "/news",
  play: "/play",
  tv: "/tv",
  playground: "/playground",
} as const;

export type RouteValues = (typeof routes)[keyof typeof routes];
