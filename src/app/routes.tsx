import { createHashRouter } from "react-router";
import { Home } from "./pages/Home";
import { NeuroBrowser } from "./pages/NeuroBrowser";
import { ITDBrowser } from "./pages/ITDBrowser";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";

export const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/neuro-browser",
    Component: NeuroBrowser,
  },
  {
    path: "/itd-browser",
    Component: ITDBrowser,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contacts",
    Component: Contacts,
  },
]);