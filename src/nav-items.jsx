import Index from "./pages/Index.jsx";
import Roadmap from "./pages/Roadmap.jsx";

export const navItems = [
  {
    title: "Courses",
    to: "/courses",
    page: <div>Courses Page</div>,
  },
  {
    title: "Practice",
    to: "/practice",
    page: <div>Practice Page</div>,
  },
  {
    title: "Roadmap",
    to: "/roadmap",
    page: <Roadmap />,
  },
  {
    title: "Home",
    to: "/",
    page: <Index />,
  },
];
