import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    return (
        <div className="max-w-screen-2xl mx-auto text-textPrimary">
            <header>
                <Navbar></Navbar>
            </header>
            <main className={location.pathname === '/' ? 'sm:pt-5 lg:pt-5' : "pt-20 sm:pt-24 lg:pt-28"}>
                <Outlet></Outlet>
            </main>
        </div>
    );
}

export default MainLayout;
