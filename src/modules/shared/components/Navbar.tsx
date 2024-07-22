import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PokeballActive from "../assets/active/pokeball.svg";
import PokeballInactive from "../assets/inactive/pokeball.svg";
import PokedexActive from "../assets/active/pokedex.svg";
import PokedexInactive from "../assets/inactive/pokedex.svg";
import ControllerInactive from "../assets/inactive/controller.svg";
import ControllerActive from "../assets/active/controller.svg";
import TelevisionInactive from "../assets/inactive/television.svg";
import TelevisionActive from "../assets/active/television.svg";
import NewsInactive from "../assets/inactive/news.svg";
import NewsActive from "../assets/active/news.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/constants";
import { usePokeStore } from "../store/pokemonStore";
interface NavItem {
  icon: { active: string; inactive: string };
  name: string;
  to: string;
}

const navItems: NavItem[] = [
  {
    icon: { active: PokeballActive, inactive: PokeballInactive },
    name: "Home",
    to: routes.home,
  },
  {
    icon: { active: PokedexActive, inactive: PokedexInactive },
    name: "Pokedex",
    to: routes.pokedex,
  },
  {
    icon: { active: ControllerActive, inactive: ControllerInactive },
    name: "Videogame",
    to: routes.videogame,
  },
  {
    icon: { active: TelevisionActive, inactive: TelevisionInactive },
    name: "TV Pokemon",
    to: routes.tv,
  },
  {
    icon: { active: NewsActive, inactive: NewsInactive },
    name: "News",
    to: routes.news,
  },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("/");
  const location = window.location.href;
  const clearPokeStore = usePokeStore((store) => store.clearPokeStore);

  useEffect(() => {
    if (location.split("/")[3]) {
      setActive(`/${location.split("/")[3]}`.toLowerCase());
      clearPokeStore();
    }
  }, [location, clearPokeStore]);

  return (
    <Flex
      color={"#767a7d"}
      bg={"white"}
      borderRadius={"22px"}
      fontWeight={"600"}
      fontSize={"14px"}
      px={"100px"}
      mt={6}
      mb={10}
      boxShadow={"2px 2px 10px 0px rgba(0,0,0,0.1)"}
      justifyContent={"space-between"}
    >
      {navItems.map((nav) => {
        return (
          <Link to={nav.to || ""} key={nav.to}>
            <Flex
              alignItems="center"
              onClick={() => setActive(nav.to)}
              gap={2}
              py={6}
              position={"relative"}
              cursor={"pointer"}
              _after={{
                content: "''",
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "4px",
                backgroundColor: "primary.red",
                borderRadius: "99px",
                opacity: active === nav.to ? "1" : "0",
                transition: "all 0.18s ease-in-out",
              }}
            >
              <Box w={"32px"} h={"32px"}>
                <Image
                  src={active === nav.to ? nav.icon.active : nav.icon.inactive}
                  w="100%"
                  h="100%"
                  objectFit={"cover"}
                />
              </Box>
              <Text color={active === nav.to ? "primary.red" : "inherit"}>
                {nav.name}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Navbar;
