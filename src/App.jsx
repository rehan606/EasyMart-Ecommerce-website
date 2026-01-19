import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home/Home';
import ShopPage from './Pages/ShopPage/ShopPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/', 
          element: <Home />
        },
        {
          path: '/products', 
          element: <ShopPage />
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
