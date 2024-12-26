import { create } from "zustand";

type PokeStoreType = {
  value: {
    selectedID: number;
    isMusicPlaying: boolean;
  };
  setter: {
    setSelectedID: (value: number) => void;
    setIsMusicPlaying: (value: boolean) => void;
  };
  clearPokeStore: () => void;
};

const initialState: Omit<PokeStoreType, "setter" | "clearPokeStore"> = {
  value: {
    selectedID: 0,
    isMusicPlaying: false,
  },
};

export const usePokeStore = create<PokeStoreType>()((set) => ({
  ...initialState,
  setter: {
    setSelectedID(value) {
      set((state) => {
        return {
          value: { ...state.value, selectedID: value },
        };
      });
    },
    setIsMusicPlaying(value) {
      set((state) => {
        return {
          value: { ...state.value, isMusicPlaying: value },
        };
      });
    },
  },
  clearPokeStore() {
    set(initialState);
  },
}));
