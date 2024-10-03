import { useEffect, useState } from "react";
import GuessPokemonBg from "../..//assets/guess-pokemon.jpeg";
import FullScreenBackground from "../FullScreenBackground";
import GlobalLoader from "@shared/components/common/GlobalLoader";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "@shared/routes/constants";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

const PlayGround = () => {
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Simulate initial loading. Also giving time for the background image to load
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!location.state || !location.state.difficulty) {
    navigate(routes.play);
    return toast({
      title: "Difficulty not set",
      description: "Please select a difficulty",
      position: "top-right",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  }

  console.log(location.state.difficulty, "location");

  return (
    <>
      <FullScreenBackground
        img={GuessPokemonBg}
        brightness={initialLoading ? 40 : 80}
      />
      {initialLoading && <GlobalLoader thickness="8px" />}
    </>
  );
};

export default PlayGround;
