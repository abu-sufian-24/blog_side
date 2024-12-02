import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ProductList from './components/ProductList';
import CreatProduct from './components/CreatProduct';
import { allBlogsByCategoryProduct, allProductsLoader, categoriLoader } from './loader/blogLoader';
import CategoriBlogs from './components/CategoriBlogs';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      loader: categoriLoader,
      children: [
        {
          path: "/",
          element: <ProductList />,
          index: true,
          loader: allProductsLoader,
        },
        {
          path: "/creat",
          element: <CreatProduct />,
        },
        {
          path: "/categori/:categoryName",
          element: <CategoriBlogs />,
          loader: allBlogsByCategoryProduct,
        },
      ],
    },
  ],
  {
    // Add future flags here
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
