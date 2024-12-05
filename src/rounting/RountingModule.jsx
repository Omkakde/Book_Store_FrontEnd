import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/home-Page/Home';
import BooksConainer from '../components/booksContainer/BooksConainer';
import BookDetail from '../components/bookDetails/BookDetail';

export function RountingModule() {
  const AppRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "/books",
          element: <BooksConainer/>,
        },
        {
          path: "/detail",
          element: <BookDetail/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={AppRoutes} />;
}
