import { NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";

function DashboardLayout({cartLength}) {
      const location = useLocation();
      console.log(location);
      

  const getLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-2 transition-colors ${
      isActive
        ? "bg-[#4C2304] font-semibold text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen bg-gray-100">
       <Header cart={cartLength}/>

      <div className="mx-auto grid max-w-6xl gap-6 p-6 md:grid-cols-[220px_1fr]">
        <aside className="rounded-xl bg-white p-4 shadow-sm">
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/dashboard"
              end
              className={getLinkClass}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className={getLinkClass}
            >
              Profile
            </NavLink>

            <NavLink
              to="/dashboard/settings"
              className={getLinkClass}
            >
              Settings
            </NavLink>
          </nav>
        </aside>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;