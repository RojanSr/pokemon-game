import { PaginationOptions } from "../types/global";

export type PokemonType =
  | "grass"
  | "poison"
  | "fire"
  | "flying"
  | "fighting"
  | "water"
  | "bug"
  | "normal"
  | "ground"
  | "rock"
  | "ghost"
  | "steel"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "stellar"
  | "unknown";

export type PokemonGrowthRate =
  | "fast"
  | "medium-fast"
  | "medium-slow"
  | "slow"
  | "fluctuating"
  | "erratic";

export const noOfBadgesToShow = 2;

export type StatNames =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed"
  | "tot";

export type PageSize = 12 | 20 | 30;

export const defaultPagination: PaginationOptions = {
  limit: 12,
  offset: 0,
};
