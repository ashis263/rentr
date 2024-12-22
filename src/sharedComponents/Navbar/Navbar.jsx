import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
    const navigate = useNavigate();
    const navLinks = <>
        <NavLink className="" to="/">Home</NavLink>
        <NavLink className="" to="/">Available Cars</NavLink>
        <NavLink className="" to="/">Add Car</NavLink>
        <NavLink className="" to="/">My Cars</NavLink>
        <NavLink className="" to="/">My Bookings</NavLink>
        <NavLink className="btn sm:btn-sm bg-primary text-white hover:bg-primary btn-xs" to="/">Log In</NavLink>
        <NavLink className="btn sm:btn-sm bg-primary text-white hover:bg-primary btn-xs" to="/">Logout</NavLink>
    </>
    return (
        <div className="navbar w-11/12 border rounded-full mx-auto px-3 py-0 my-2 sm:px-5 sm:my-5">
            <div className="navbar-start">
                <button onClick={() => navigate('/')} className="btn btn-ghost hover:bg-transparent text-xl px-0">
                    <h2 className='text-2xl sm:text-4xl font-mono font-bold'><span className='text-primary'>R</span>entr</h2>
                    <img src={logo} className='w-3 sm:w-5 sm:mt-1' alt="" />
                </button>
            </div>
            <div className="navbar-end space-x-2">
                <ul className="menu menu-horizontal px-1 gap-2 hidden lg:flex items-center">
                    {navLinks}
                </ul>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="px-0 btn btn-ghost lg:hidden">
                        < IoIosMenu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-28 p-2 shadow relative right-0 text-center">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
