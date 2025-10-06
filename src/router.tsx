import HomePage from "./assets/pages/HomePage";
import AllRecipesPage from "./assets/pages/AllRecipesPage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./assets/components/Layout";
import SingleRecipePage from "./assets/pages/SingleRecipePage";
import FavoritesPage from "./assets/pages/FavoritesPage";
import ContactsPage from "./assets/pages/ContactsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      //Home page route
      { index: true, element: <HomePage /> },
      //All recipes page
      { path: "recipes", element: <AllRecipesPage /> },
      //Favorites page
      { path: "favorites", element: <FavoritesPage /> },
      //Single recipe page
      { path: "recipes/:id", element: <SingleRecipePage /> },
      //Contacts page
      { path: "contact", element: <ContactsPage /> },
    ],
  },
]);
