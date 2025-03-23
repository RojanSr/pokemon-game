import { DifficultyType } from "@play/Play";
import { create } from "zustand";

type PokeStoreType = {
  value: {
    selectedID: number;
    isMusicPlaying: boolean;
    gameDifficulty: DifficultyType | null;
  };
  setter: {
    setSelectedID: (value: number) => void;
    setIsMusicPlaying: (value: boolean) => void;
    setGameDifficulty: (value: DifficultyType) => void;
  };
  clearPokeStore: () => void;
};

const initialState: Omit<PokeStoreType, "setter" | "clearPokeStore"> = {
  value: {
    selectedID: 0,
    isMusicPlaying: false,
    gameDifficulty: null,
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
    setGameDifficulty(value) {
      set((state) => {
        return {
          value: { ...state.value, gameDifficulty: value },
        };
      });
    },
  },
  clearPokeStore() {
    set(initialState);
  },
}));
