import { createBrowserRouter, Outlet } from "react-router-dom";
import { routes } from "./constants";
import Home from "../../home";
import Pokedex from "../../pokedex";
import Layout from "../layout";
import PokeNews from "../../news";

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.pokedex,
        element: <Pokedex />,
      },
      {
        path: routes.news,
        element: <PokeNews />,
      },
      {
        path: routes.videogame,
        element: <PokeNews />,
      },
      {
        path: routes.tv,
        element: <PokeNews />,
      },
      {
        path: routes.play,
        element: <PokeNews />,
      },
    ],
  },
]);
