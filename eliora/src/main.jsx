import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contract from "./pages/Contract.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import Clients from "./pages/Clients.jsx";
import Career from "./pages/Career.jsx";
import Gallery from "./pages/Gallery.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blog from "./pages/Blog.jsx";
import PayNow from "./pages/PayNow.jsx";
import Placement from "./pages/Placement.jsx";
import { AppProvider } from "./components/context.jsx";
import WebDesigning from "./pages/WebDesigning.jsx";
import WordPress from "./pages/WordPress.jsx";
import AppDevelopment from "./pages/AppDevelopment.jsx";
import Ecommerce from "./pages/EcommerceDevelopment.jsx";
import GraphicsLogo from "./pages/GraphicsLogo.jsx";
import DigitalMarketing from "./pages/DigitalMarketing.jsx";
import UiAndUx from "./pages/UiAndUx.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/placement",
        element: <Placement/>
      },

      {
        path: "/contract",
        element: <Contract/>
      },

      {
        path: "/webDevelopment",
        element: <WebDevelopment />,
      },

      {
        path: "/wordpressdevelopment",
        element: <WordPress />,
      },

      {
        path: "/appdevelopment",
        element: <AppDevelopment />,
      },

      {
        path: "/ecommercedevelopment",
        element: <Ecommerce/>,
      },

      {
        path: "/graphicsandlogo",
        element: <GraphicsLogo/>,
      },

      {
        path: "/digitalandcontentmarketing",
        element: <DigitalMarketing/>,
      },

      {
        path: "/uiuxdesign",
        element: <UiAndUx/>,
      },

      {
        path:"/websitedesign",
        element:<WebDesigning/>

      },

      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/ourportfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/payNow",
        element: <PayNow />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AppProvider>
);
