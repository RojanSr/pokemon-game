import { create } from "zustand";

const initialState = {
  pokeState: {
    selectedID: 0,
  },
};

export const usePokeStore = create<{
  pokeState: {
    selectedID: number;
  };
  setSelectedID: (value: number) => void;
  clearPokeStore: () => void;
}>()((set) => ({
  ...initialState,
  setSelectedID(value) {
    set((state) => {
      return {
        pokeState: { ...state.pokeState, selectedID: value },
      };
    });
  },
  clearPokeStore() {
    set(initialState);
  },
}));
