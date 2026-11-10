import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout({cartlength}){
    const getLinkClass = ({ isActive }) =>
        `block rounded-lg px-4 py-2 transition-colors ${
            isActive
                ? "bg-amber-100 font-semibold text-white"
                : "text-gray-500 hover:bg-gray-200"
        }`;

    return(
        <div className="min-h-screen bg-[#F5EFE6] ">
            <Header cart={cartLength}/>
                <aside className="rounded-xl bg-white p-4 shadow-sm">
                    <nav>
                        <NavLink
                            to="/dashboard"
                            end
                            className={getLinkClass}
                        >
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
            <div className="mx-auto grid max-w-6xl gap-6 p-6 md:grid-cols-[220px-1fr"></div>
        </div>
        
        
    )
}

export default DashboardLayout