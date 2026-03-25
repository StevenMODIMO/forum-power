import { Outlet, NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 md:text-sm">
      <header className="md:flex md:justify-between">
        <div className="flex items-center justify-between md:justify-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="./favicon.svg"
              alt="logo"
              className="w-6 md:w-8  h-6 md:h-8"
            />
            <p>Forum Power</p>
          </NavLink>
          <Menu onClick={() => setOpen(true)} className="w-6 h-6 md:hidden" />
        </div>
        <div
          className={`${open ? "absolute top-0 left-0 p-3 flex flex-col gap-4 md:flex md:flex-row md:items-center md:p-3 md:gap-2" : "hidden md:flex md:flex-row md:items-center md:p-3 md:gap-2"} h-screen w-full md:w-auto bg-white dark:bg-black dark:text-white md:static md:dark:bg-transparent md:text-black md:h-fit`}
        >
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2 md:hidden">
              <img
                src="./favicon.svg"
                alt="logo"
                className="w-6 md:w-8 h-6 md:h-8"
              />

              <p>Forum Power</p>
            </NavLink>
            <X onClick={() => setOpen(false)} className="w-6 h-6 md:hidden" />
          </div>
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={({ isActive }) => (isActive ? "text-purple-500" : "")}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/forum"
            className={({ isActive }) => (isActive ? "text-purple-500" : "")}
          >
            Forum
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/login"
            className={({ isActive }) => (isActive ? "text-purple-500" : "")}
          >
            Sign in
          </NavLink>
          <Button onClick={() => setOpen(false)}>
            <NavLink to="/signup">Get started</NavLink>
          </Button>
          <ModeToggle />
        </div>
      </header>
      <Outlet />
    </div>
  );
}
