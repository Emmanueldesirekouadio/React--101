import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Universities from "./pages/Universities";
import UniversityDetails from "./pages/UniversityDetails";
import NotFound from "./pages/NotFound";
import { RoutePage } from "./routes";

const router = createBrowserRouter([
  {
    path: RoutePage.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RoutePage.ABOUT,
        element: <About />,
      },
      {
        path: RoutePage.CONTACT,
        element: <Contact />,
      },
      {
        path: "test",
        element: <div>Test</div>,
      },
      {
        path: RoutePage.UNIVERSITIES,
        element: <Universities />,
      },
      {
        path: RoutePage.UNIVERSITY_DETAILS,
        element: <UniversityDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
