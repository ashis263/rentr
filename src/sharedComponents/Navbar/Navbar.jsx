import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { IoIosMenu } from "react-icons/io";
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import '../Navbar/navbar.css'
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler';


const Navbar = () => {
    const { auth, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Logged out successfully"
        });
        navigate('/');
        signOut(auth);
    };
    const navLinks = <>
        <NavLink className={user ? "" : ""} to="/">Home</NavLink>
        <NavLink className={user ? "" : ""} to="/cars">Available Cars</NavLink>
        <NavLink className={user ? "" : "hidden"} to="/addCar">Add Car</NavLink>
        <NavLink className={user ? "" : "hidden"} to="/myCars">My Cars</NavLink>
        <NavLink className={user ? "" : "hidden"} to="/myBookings">My Bookings</NavLink>
        <NavLink className={user ? "" : ""} to="/blogs">Blogs</NavLink>
        <button className='max-lg:hidden' to="/myBookings"><ThemeToggler></ThemeToggler></button>
        <NavLink className={user ? "hidden log" : "log btn sm:btn-sm bg-primary border-none text-gray-50  hover:bg-primary btn-xs rounded"} to="/login">Log In</NavLink>
        <button onClick={handleLogout} className={user ? "btn sm:btn-sm bg-primary border-none text-gray-50  hover:bg-primary btn-xs rounded" : "hidden"} to="/">Logout</button>
    </>
    return (
        <div className='fixed w-full max-w-screen-2xl shadow-sm dark:shadow-lg z-10 backdrop-blur-xl'>
            <div className="navbar w-11/12 mx-auto px-0 py-0 sm:my-1">
                <div className="navbar-start">
                    <button onClick={() => navigate('/')} className="btn btn-ghost hover:bg-transparent text-xl px-0">
                        <h2 className='text-3xl sm:text-4xl font-mono font-bold'><span className='text-primary'>R</span>entr</h2>
                        <img src={logo} className='w-3 sm:w-5 sm:mt-1' alt="" />
                    </button>
                </div>
                <div className="navbar-end w-2/3">
                    <ul className="p-0 menu menu-horizontal gap-2 hidden lg:flex items-center">
                        {navLinks}
                    </ul>
                    <div className='sm:hidden'>
                        <ThemeToggler></ThemeToggler>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="px-0 btn btn-ghost lg:hidden text-2xl">
                            < IoIosMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 rounded-box z-[1] mt-3 w-28 p-2 shadow relative right-0 text-center">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
