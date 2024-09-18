import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "/Menu", element: <Menu /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
