import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root/Root.jsx";
import Home from "./routes/home/Home.jsx";
import Shop from "./routes/shop/Shop.jsx";
import Login from "./routes/login/Login.jsx";
import Checkout from "./routes/checkout/Checkout.jsx";
import { action as checkoutAction } from "./routes/checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        action: checkoutAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
