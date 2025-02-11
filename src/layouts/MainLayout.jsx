import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../sharedComponents/Footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className="w-11/12 mx-auto">
            <div className="flex w-full justify-between my-2">
                <div className="skeleton w-24 h-10"></div>
                <div className="skeleton w-96 h-10 max-sm:hidden"></div>
                <div className="skeleton w-10 h-10 sm:hidden"></div>
            </div>
            <div>
                <div className="skeleton w-1/2 mx-auto h-20 mt-40"></div>
                <div className="skeleton w-3/5 mx-auto h-12 mt-5"></div>
                <div className="skeleton w-2/5 mx-auto h-12 mt-5"></div>
            </div>
            <div>
                <div className="skeleton w-60 h-10 mx-auto mt-40"></div>
                <div className="skeleton w-72 h-5 mx-auto mt-5"></div>
            </div>
        </div>
    }
    return (
        <div className="max-w-screen-2xl mx-auto text-textPrimary bg-gray-50 dark:bg-gray-800 dark:text-gray-50 duration-1000">
            <header>
                <Navbar></Navbar>
            </header>
            <main className={location.pathname === '/' ? 'sm:pt-5 lg:pt-5' : "pt-20 sm:pt-24 lg:pt-28"}>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default MainLayout;
