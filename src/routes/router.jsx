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
import MyBookings from '../pages/MyBookings/MyBookings';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                element: <AvailableCars></AvailableCars>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: 'car/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`)
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            }
        ])
    }
])

export default router;
