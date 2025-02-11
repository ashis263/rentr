import { Link, Navigate, useNavigate } from 'react-router-dom'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from 'react';
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";


const Register = () => {
    const { user, auth } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [isPassShowing, setIsPassShowing] = useState(false);
    const handleShowPass = () => setIsPassShowing(!isPassShowing);
    const navigate = useNavigate();
    if (user) { return <Navigate to={location.state ? location.state : "/"} /> };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setError('Password must be of atleast six characters');
        } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError('Password must contain one uppercase and one lowercase letter')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    e.target.reset();
                    setError('');
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                    })
                        .then(() => {
                            signOut(auth);
                            navigate("/login");
                            const user = res.user;
                            const current = { name: user.displayName, email: user.email, createdAt: user.metadata.creationTime, lastLogin: user.metadata.lastSignInTime, photo: user.photoURL };
                            fetch('https://rentr-server.vercel.app/users', {
                                method: 'put',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(current)
                            })
                            Toast.fire({
                                icon: "success",
                                title: "Registered successfully, please login!"
                            });
                        })
                        .catch(err => {
                            Toast.fire({
                                icon: "error",
                                title: err.code
                            });
                        });
                })
                .catch(err => {
                    Toast.fire({
                        icon: "error",
                        title: err.code
                    });
                })
        }
    };
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
        <div className='animate__animated animate__fadeIn flex flex-col sm:flex-row-reverse items-center justify-center w-11/12 mx-auto'>
            <HelmetProvider>
                <Helmet>
                    <title>Rentr | Register</title>
                </Helmet>
            <div >
                <Lottie className='sm:block w-4/5 mx-auto sm:w-72 lg:w-96 max-sm:mb-5' animationData={login} loop={true} />
            </div>
            <div className='w-4/5 lg:w-1/3 sm:w-1/2'>
                <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary">Register</h1>
                <form onSubmit={handleFormSubmit} className="w-11/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Photo URL</span>
                        </label>
                        <input type="url" name="photoUrl" placeholder="Photo URL" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className={`label-text`}>Password</span>
                        </label>
                        <input type={!isPassShowing ? 'password' : 'text'} name="password" placeholder="Password" className="input max-lg:input-sm input-bordered" required />
                        <div onClick={handleShowPass} className="absolute right-4 lg:right-6 lg:top-12 text-gray-300 top-10 text-2xl">
                            {
                                !isPassShowing ? <IoIosEye /> : <IoIosEyeOff />
                            }
                        </div>
                        <p className='text-red-500 font-bold text-center'>{error}</p>
                        <label className="label flext flex-col items-start gap-1 sm:gap-2">
                            <p>Already have an account? <Link to="/login" className=" text-sky-600">Login</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn max-lg:btn-sm className='btn bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 text-white border-none duration-1000 hover:bg-primary btn-sm' lg:text-xl">Register</button>
                    </div>
                </form>
            </div>
            </HelmetProvider>
        </div>
    );
}

export default Register;
