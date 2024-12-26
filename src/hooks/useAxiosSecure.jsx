import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
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
            }
            return Promise.reject(error);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;