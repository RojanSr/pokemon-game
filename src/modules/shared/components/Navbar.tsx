import { Flex, HStack, Image, Text, Tooltip } from "@chakra-ui/react";
import PrimaryLogo from "../assets/primary_logo.svg";
import { Link } from "react-router-dom";
import PokedexInactive from "../assets/inactive/pokedex.svg";
import ControllerInactive from "../assets/inactive/controller.svg";
import TelevisionInactive from "../assets/inactive/television.svg";
import NewsInactive from "../assets/inactive/news.svg";
import { routes, RouteValues } from "@shared/routes/constants";

interface NavItem {
  id: number;
  icon: string;
  name: string;
  to: RouteValues;
}

const navItems: NavItem[] = [
  {
    id: 2,
    icon: PokedexInactive,
    name: "Pokedex",
    to: routes.pokedex,
  },
  {
    id: 3,
    icon: ControllerInactive,
    name: "Play",
    to: routes.play,
  },
  {
    id: 4,
    icon: TelevisionInactive,
    name: "TV Pokemon",
    to: routes.tv,
  },
  {
    id: 5,
    icon: NewsInactive,
    name: "News",
    to: routes.news,
  },
];

const Navbar = () => {
  return (
    <Flex
      display={"flex"}
      bg={"white"}
      borderRadius={"12px"}
      alignItems={"center"}
      boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
      gap={8}
      px={8}
      py={2}
      my={5}
      justifyContent={"space-between"}
    >
      <Link to={routes.home}>
        <Image src={PrimaryLogo} alt="Pokemon" h={"50px"} minW={"100px"} />
      </Link>
      <HStack gap={8}>
        {navItems.map((nav) => {
          return (
            <Link to={nav.to}>
              <Flex
                key={nav.id}
                transitionProperty={"opacity"}
                transitionDuration={"0.3s"}
                sx={{
                  transitionBehavior: "allow-discrete",
                }}
                py={4}
                alignItems={"center"}
                gap={4}
              >
                <Tooltip
                  label={nav.name}
                  borderRadius={"12px"}
                  fontSize={"14px"}
                >
                  <Image src={nav.icon} w={6} h={6} />
                </Tooltip>
                <Text
                  fontSize={"lg"}
                  fontWeight={"600"}
                  color={"blackAlpha.700"}
                >
                  {nav.name}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </HStack>
    </Flex>
  );
};

export default Navbar;
