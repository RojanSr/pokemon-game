export type PokedexByRegionResponse = {
  pokemon_entries: {
    entry_number: number;
    pokemon_species: {
      name: string;
      url: string;
    };
  }[];
  region: {
    name: string;
  };
};
