import HomePage from "./assets/pages/HomePage";
import AllRecipesPage from "./assets/pages/AllRecipesPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recipes",
    element: <AllRecipesPage />,
  },
]);
