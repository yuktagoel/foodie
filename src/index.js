import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/header-pages/About";
import AppLayout from "./App";
import ContactUs from "./components/header-pages/ContactUs";
import ErrorPage from "./components/error-page/ErrorPage";
import Container from "./components/Container";
import RestroMenu from "./components/menu-page/RestroMenu";
import girl from "./assets/girl.gif";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/about",
        element: (
          <About name={"hello"} img={girl} desc={"Hi, I am Yukta Goel"} />
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestroMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
