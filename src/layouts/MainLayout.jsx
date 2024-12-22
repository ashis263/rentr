import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl text-textPrimary">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}

export default MainLayout;
