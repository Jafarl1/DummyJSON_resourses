import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import Products from "../pages/Products/Products";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
