import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import PrivateRoute from './PrivateRoute';
import AddCar from '../pages/AddCar/AddCar';
import MyCars from '../pages/MyCars/MyCars';
import AvailableCars from '../pages/AvailableCars/AvailableCars';
import CarDetails from '../pages/CarDetails/CarDetails';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import MyBookings from '../pages/MyBookings/MyBookings';
import ErrorPage from '../pages/Errorpage/ErrorPage';
import Blogs from '../pages/Blogs/Blogs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'addCar',
                element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path: 'myCars',
                element: <PrivateRoute><MyCars>Z</MyCars></PrivateRoute>
            },
            {
                path: '/cars',
                element: <AvailableCars></AvailableCars>
            },
            {
                path: 'car/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://rentr-server.vercel.app/car/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://rentr-server.vercel.app/blog/${params.id}`)
            }
        ])
    }
])

export default router;
