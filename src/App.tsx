import "./scss/main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage";
import ChannelsPage from "./components/Header";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<ChannelsPage links={[]} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
