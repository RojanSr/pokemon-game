import { usePokeStore } from "@shared/store/pokemonStore";
import { useEffect, useState } from "react";

export type UseAudioReturnType = {
  playing: boolean;
  toggle: () => void;
  stop: () => void;
};

const useAudio = (
  url: string | string[],
  config: { loop?: boolean; shuffle?: boolean }
): UseAudioReturnType => {
  const playing = usePokeStore((store) => store.value.isMusicPlaying);
  const setPlaying = usePokeStore((store) => store.setter.setIsMusicPlaying);

  const [audioIndex, setAudioIndex] = useState(
    Array.isArray(url) && config.shuffle
      ? Math.floor(Math.random() * url.length)
      : 0
  );
  const [audio, setAudio] = useState<HTMLAudioElement>(
    Array.isArray(url) ? new Audio(url[audioIndex]) : new Audio(url)
  );

  const toggle = () => setPlaying(!playing);

  const handleNextAudio = ({ play }: { play: boolean }) => {
    const nextAudioIndex = audioIndex === url.length - 1 ? 0 : audioIndex + 1;
    const nextAudio = new Audio(url[nextAudioIndex]);
    setAudioIndex(nextAudioIndex);
    setAudio(nextAudio);
    if (play) {
      nextAudio.play();
    }
  };

  const stopAndReset = () => {
    if (playing) {
      setPlaying(false);
      audio.pause();
      audio.currentTime = 0;
      handleNextAudio({ play: false });
    }
  };

  function handleEnd() {
    if (Array.isArray(url)) {
      const reachedEnd = audioIndex === url.length - 1;
      if (reachedEnd && !config.loop) {
        setPlaying(false);
        return;
      }
      handleNextAudio({ play: true });
      return;
    }

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
