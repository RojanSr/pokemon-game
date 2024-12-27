import { createBrowserRouter, Outlet } from "react-router-dom";
import { routes } from "./constants";
import Home from "../../home";
import Pokedex from "../../pokedex";
import Layout from "../layout";
import PokeNews from "../../news";
import ErrorPage from "../../../error-page";
import Play from "../../play/Play";
import PokeTV from "../../tv";
import PlayGround from "@play/components/PlayGround/PlayGround";

export const router = createBrowserRouter([
  {
    path: routes.play,
    element: <Play />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.playground,
    element: <PlayGround />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.home,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <ErrorPage />,
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
        path: routes.tv,
        element: <PokeTV />,
      },
    ],
  },
]);
