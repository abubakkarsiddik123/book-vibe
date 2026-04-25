import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/homepage/HomePage";
import Books from "../Pages/books/Books";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
        path:"books",
        element:<Books/>
      },
      {
        path:"/bookDetails/:booksId",
        element:<BookDetails/>,
        loader:()=> fetch("/booksData.json")

      }
    ],
    errorElement:<ErrorPage/>
  },
]);