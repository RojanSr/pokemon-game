import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import PrimaryLogo from "../assets/primary_logo.svg";
import { Link, useLocation } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import ToggleEffect from "./common/ToggleEffect";
import { useEffect, useRef, useState } from "react";
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
    name: "Videogame",
    to: routes.videogame,
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
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [height, setHeight] = useState("0px");
  const flexRef = useRef<HTMLDivElement>(null);

  // Dynamically setting height of the menu
  useEffect(() => {
    if (flexRef.current) {
      setHeight(menuOpen ? `${flexRef.current.scrollHeight}px` : "0px");
    }
  }, [menuOpen]);

  return (
    <Flex py={5} justifyContent={"space-between"} gap={6}>
      <Link to={routes.home}>
        <Image src={PrimaryLogo} alt="Pokemon" h={"70px"} minW={"100px"} />
      </Link>

      <Flex alignItems={"center"} gap={{ sm: "10px", lg: "25px" }}>
        <InputGroup size={"sm"}>
          <Input
            placeholder="Search"
            bg={"white"}
            w={{ base: "120px", md: "200px" }}
            borderRadius={"30px"}
            _placeholder={{ color: "black", opacity: 1 }}
            _focus={{
              width: { base: "130px", md: "230px" },
              outline: "none",
              boxShadow: "none",
            }}
            border={"none"}
            transition={"ease-in-out 0.2s"}
          />
          <InputLeftElement
            pointerEvents="none"
            color="text.dark"
            fontSize="1em"
          >
            <Search2Icon />
          </InputLeftElement>
        </InputGroup>

        <Box position={"relative"}>
          <ToggleEffect onClick={() => setMenuOpen((prev) => !prev)}>
            <CgMenuGridO
              color={location.pathname === "/" ? "white" : "black"}
              fontSize={"35px"}
              cursor={"pointer"}
            />
          </ToggleEffect>

          <Flex
            ref={flexRef}
            height={height}
            display={menuOpen ? "flex" : "none"}
            flexDirection={"column"}
            position={"absolute"}
            bg={"white"}
            transform={"translateX(-50%)"}
            left={"50%"}
            borderRadius={"12px"}
            width={"50px"}
            alignItems={"center"}
            zIndex={1000}
            transitionProperty={"display opacity"}
            transitionDuration={"0.4s"}
            // NOTE: Only works on chrome and safari
            sx={{
              transitionBehavior: "allow-discrete",
            }}
            boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
          >
            {navItems.map((nav) => {
              return (
                <Box
                  key={nav.id}
                  opacity={menuOpen ? 1 : 0}
                  transitionProperty={"opacity"}
                  transitionDuration={"0.3s"}
                  sx={{
                    transitionBehavior: "allow-discrete",
                  }}
                  py={4}
                  onClick={() => {
                    setMenuOpen(false);
                    setHeight("0");
                  }}
                >
                  <Link to={nav.to}>
                    <Tooltip
                      label={nav.name}
                      borderRadius={"12px"}
                      fontSize={"14px"}
                    >
                      <Image src={nav.icon} w={6} h={6} />
                    </Tooltip>
                  </Link>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
