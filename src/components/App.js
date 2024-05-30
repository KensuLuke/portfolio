import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../styles/App.css";
// import CV from "./CV";
import HomePage from "./HomePage";
import MainPage from "./MainPage";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import ErrorElement from "./ErrorElement";

function App() {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: <HomePage />,
      errorElement: <ErrorElement />,
      children: [
        { path: "", element: <MainPage />, index: true },
        { path: "projects", element: <Projects /> },
        { path: "info", element: <About /> },
        { path: "contact", element: <Contact /> },
        // { path: "cv", element: <CV /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
