import { NavLink, Outlet } from "react-router";

export default function ForumHeader() {
  return (
    <div className="flex gap-2">
      <header className="flex flex-col gap-2 border-r-2 px-2">
        <NavLink to="">Forums</NavLink>
        <NavLink to="/forum/new">New</NavLink>
        <NavLink to="/forum/settings">Settings</NavLink>
      </header>
      <Outlet />
    </div>
  );
}
