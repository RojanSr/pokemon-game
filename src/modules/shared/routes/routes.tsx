import { createBrowserRouter, Outlet } from "react-router-dom";
import { routes } from "./constants";
import Home from "../../home";
import Pokedex from "../../pokedex";
import Layout from "../layout";
import PokeNews from "../../news";
import ErrorPage from "../../../error-page";
import VideoGames from "../../play";
import PokeTV from "../../tv";

export const router = createBrowserRouter([
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
        path: routes.videogame,
        element: <VideoGames />,
      },
      {
        path: routes.tv,
        element: <PokeTV />,
      },
    ],
  },
]);
