import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { IRoute } from "../interfaces";

const links: IRoute[] = [
  {
    id: 1,
    name: "ChannelsPage",
    path: "/",
  },
  {
    id: 2,
    name: "SearchPage",
    path: "/search",
  },
  {
    id: 3,
    name: "FavoritesPage",
    path: "/favorites",
  },
];

const RootLayout = () => {
  return (
    <>
      <Header links={links} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
