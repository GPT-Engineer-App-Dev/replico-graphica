import { Rocket } from "lucide-react";
import { NavItem } from "./NavItem";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Rocket className="h-6 w-6" />
      <span>NeetCode</span>
    </NavItem>
    {navItems.filter(item => item.title !== "Home").map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);
