import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Hero from "./Pages/Hero/Hero.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },

      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl m-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
