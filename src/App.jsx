import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home/Home';
import ShopPage from './Pages/ShopPage/ShopPage';
import ProductDetails from './Pages/ProductsDetails/ProductDetails';
import About from './Pages/About/About';
import BlogPage from './Pages/BlogPage/BlogPage';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/FAQ/Faq'; 

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
        {
          path: '/blogs', 
          element: <BlogPage />
        },
        {
          path: '/contact', 
          element: <Contact />
        },
        {
          path: '/faq', 
          element: <Faq />
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
