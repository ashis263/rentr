import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Lottie from "lottie-react";
import loader from ".././assets/loader.json";

const MainLayout = () => {
    const location = useLocation();
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className="w-lvw h-lvh flex items-center justify-center">
            <Lottie className='w-40' animationData={loader} loop={true} />
        </div>
    }
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
