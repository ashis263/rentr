import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
    baseURL: 'https://rentr-server.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                signOut(auth)
                navigate('/login')
                Toast.fire({
                    icon: "warning",
                    title: "Session expired! Please login."
                });
            }
            return Promise.reject(error);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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

    return axiosInstance;
};

export default useAxiosSecure;