import { useEffect, useState } from "react";

const useActiveBtnToggler = (options: string[]): { activeOption: string } => {
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(0);

  function handleUpDownArrowKeyPress(e: KeyboardEvent) {
    if (e.key === "ArrowUp") {
      if (activeOptionIndex === 0) {
        setActiveOptionIndex(options.length - 1);
      } else {
        setActiveOptionIndex((prev) => prev - 1);
      }
    } else if (e.key === "ArrowDown") {
      if (activeOptionIndex === options.length - 1) {
        setActiveOptionIndex(0);
      } else {
        setActiveOptionIndex((prev) => prev + 1);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleUpDownArrowKeyPress);

    return () => {
      document.removeEventListener("keydown", handleUpDownArrowKeyPress);
    };
  }, [activeOptionIndex]);
  return { activeOption: options[activeOptionIndex] };
};

export default useActiveBtnToggler;
