import Index from "./pages/Index.jsx";

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
    page: <div>Roadmap Page</div>,
  },
  {
    title: "Home",
    to: "/",
    page: <Index />,
  },
];
