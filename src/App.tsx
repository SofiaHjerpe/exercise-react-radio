import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { IRoute } from "./interfaces";
import "./scss/main.scss";
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

export const App = () => {

  return (
   <>
      <Header links={links} />
      <Outlet />
 </>
  );
};

export default App;
