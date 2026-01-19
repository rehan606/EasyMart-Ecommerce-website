import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home/Home';
import ShopPage from './Pages/ShopPage/ShopPage';
import ProductDetails from './Pages/ProductsDetails/ProductDetails';
import About from './Pages/About/About';

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
        {
          path: '/products/:id', 
          element: <ProductDetails />
        },
        {
          path: '/about', 
          element: <About />
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
