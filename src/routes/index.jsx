import React, { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Suspense from "@/utilits";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Home = lazy(() => import("./home/Home"));
const Notfound = lazy(() => import("./notfound/Notfound"));
const Products = lazy(() => import("./products/Products"));
const SinglineProduct = lazy(() => import("./singleProduct/SinglineProduct"));

const RouteController = () => {
  return useRoutes([
    {
      element: (
        <Suspense>
          <Header />
          <Outlet />
          <Footer />
        </Suspense>
      ),

      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/products",
          element: (
            <Suspense>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "/porducts/:id",
          element: (
            <Suspense>
              <SinglineProduct />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense>
              <Notfound />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default RouteController;
