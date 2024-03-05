import {
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom"

import ChannelsPage from "./pages/ChannelsPage";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage";
import App from "./App";
import { ProgramPage } from "./pages/ProgramPage";

   export const router = createBrowserRouter(
     createRoutesFromElements(
       <Route>
         <Route path="/" element={<App />}>
           <Route element={<ChannelsPage />} index />
           <Route path="/search" element={<SearchPage />} />
           <Route path="/favorites" element={<FavoritePage />} />
           <Route path="/programs/:id" element={<ProgramPage />} />
         </Route>
       </Route>
     )
   );