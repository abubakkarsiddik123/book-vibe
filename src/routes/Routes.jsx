import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/homepage/HomePage";
import Books from "../Pages/books/Books";
import ErrorPage from "../Pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"Books",
        element:<Books/>
      }
    ],
    errorElement:<ErrorPage/>
  },
]);