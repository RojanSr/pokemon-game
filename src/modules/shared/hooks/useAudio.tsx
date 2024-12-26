import { usePokeStore } from "@shared/store/pokemonStore";
import { useEffect, useState } from "react";

export type UseAudioReturnType = {
  playing: boolean;
  toggle: () => void;
  stop: () => void;
};

const useAudio = (
  url: string,
  config: { loop?: boolean }
): UseAudioReturnType => {
  const playing = usePokeStore((store) => store.value.isMusicPlaying);
  const setPlaying = usePokeStore((store) => store.setter.setIsMusicPlaying);

  const [audio] = useState(new Audio(url));

  const toggle = () => setPlaying(!playing);

  const stopAndReset = () => {
    if (playing) {
      setPlaying(false);
      audio.pause();
      audio.currentTime = 0;
    }
  };

  function handleEnd() {
    if (config.loop) {
      audio.play();
    } else {
      setPlaying(false);
    }
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", handleEnd);
    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, []);

  return { playing, toggle, stop: stopAndReset };
};

export default useAudio;
