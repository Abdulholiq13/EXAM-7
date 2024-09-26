import React, { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Suspense from "@/utilits";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Cart from "./cart/Cart";
import Subheader from "@/components/subhader/Subheader";

const Home = lazy(() => import("./home/Home"));
const Notfound = lazy(() => import("./notfound/Notfound"));
const Products = lazy(() => import("./products/Products"));
const SingleProduct = lazy(() => import("./singleProduct/SingleProduct"));

const RouteController = () => {
  return useRoutes([
    {
      element: (
        <Suspense>
          <Subheader />
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
          path: "/products/:id",
          element: (
            <Suspense>
              <SingleProduct />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense>
              <Cart />
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
