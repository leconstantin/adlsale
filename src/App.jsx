import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/layout";
import LandingPage from "./pages/landing";
import About from "./pages/about";
import Academics from "./pages/academics";
import Admission from "./pages/admission";
import Blog from "./pages/blog";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
