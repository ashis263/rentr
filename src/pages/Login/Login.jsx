import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from 'react';
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { user, setUser, auth } = useContext(AuthContext);
    const [isPassShowing, setIsPassShowing] = useState(false);
    const handleShowPass = () => setIsPassShowing(!isPassShowing);
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state === '/register') {
        if (user) { return <Navigate to={location.state ? location.state : "/"} /> };
    }
    const handleGoogleClick = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const user = res.user;
                const current = { name: user.displayName, email: user.email, createdAt: user.metadata.creationTime, lastLogin: user.metadata.lastSignInTime, photo: user.photoURL };
                fetch('https://rentr-server.vercel.app/users', {
                    method: 'put',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(current)
                })
                axios.post('https://rentr-server.vercel.app/auth', { name: user.displayName, email: user.email}, { withCredentials: true});
                setUser(res.user);
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                navigate(location.state ? location.state : "/");
            })
            .catch(err => {
                Toast.fire({
                    icon: "error",
                    title: err.code
                });
            })
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                const current = { name: user.displayName, email: user.email, createdAt: user.metadata.creationTime, lastLogin: user.metadata.lastSignInTime, photo: user.photoURL };
                fetch('https://rentr-server.vercel.app/users', {
                    method: 'put',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(current)
                })
                axios.post('https://rentr-server.vercel.app/auth', { name: user.displayName, email: user.email}, { withCredentials: true});
                setUser(res.user);
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                e.target.reset();
                navigate(location.state ? location.state : "/");
            })
            .catch(err => {
                Toast.fire({
                    icon: "error",
                    title: err.code
                });
            })
    }
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
    return (
        <div className='flex flex-col sm:flex-row items-center justify-center w-11/12 mx-auto'>
            <div >
                <Lottie className='sm:block w-4/5 mx-auto sm:w-72 lg:w-96 max-sm:mb-5 sm:mt-10 lg:-ml-10' animationData={login} loop={true} />
            </div>
            <div className='w-4/5 lg:w-1/3 sm:w-1/2'>
                <div className="w-full">
                    <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary">Login</h1>
                    <div className="w-11/12 mx-auto pt-5">
                        <button onClick={handleGoogleClick} className="btn w-full max-lg:btn-sm btn-outline text-gray-400 hover:bg-primary text-xl">
                            <img className="w-8" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                            Continue with Google
                        </button>
                        <p className='text-center pt-2 sm:p-5  text-gray-500'>or with email and password</p>
                    </div>
                    <form onSubmit={handleFormSubmit} className="w-11/12 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text`}>Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input max-lg:input-sm input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className={`label-text`}>Password</span>
                            </label>
                            <input type={!isPassShowing ? 'password' : 'text'} name="password" placeholder="Password" className="input max-lg:input-sm input-bordered" required />
                            <div onClick={handleShowPass} className="absolute right-4 text-gray-300 top-10 text-2xl lg:right-6 lg:top-12">
                                {
                                    !isPassShowing ? <IoIosEye /> : <IoIosEyeOff />
                                }
                            </div>
                            <label className="label flext flex-col items-start gap-1 sm:gap-2">
                                <p>Don&apos;t have an account? <Link to="/register" className=" text-sky-600">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn max-lg:btn-sm hover:bg-primary border-none bg-primary text-white lg:text-xl">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
