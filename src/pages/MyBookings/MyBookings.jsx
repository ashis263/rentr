import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import MyBooking from "../../components/MyBooking/MyBooking";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area
} from "recharts";

const MyBookings = () => {
    const [myBookings, setMybookings] = useState([]);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    useEffect((() => {
        axiosSecure.get(`/userBookings/?email=${user.email}`)
            .then(res => {
                setMybookings(res.data);
                setIsDataLoaded(true);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [])
    return (
        <div className='animate__animated animate__fadeIn w-11/12 mx-auto rounded-xl'>
            <HelmetProvider>
                <Helmet>
                    <title>My Bookings</title>
                </Helmet>
                <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary pb-2 sm:pb-5">My Bookings</h1>
                <div className="overflow-x-auto shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-bold bg-[#01959a42] dark:text-gray-50">
                                <th className="max-sm:hidden text-center">Car image</th>
                                <th>Car model</th>
                                <th>Booking date</th>
                                <th className="max-sm:hidden">Total price</th>
                                <th>Booking status</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isDataLoaded && myBookings.map((booking, index) => <MyBooking key={booking._id} index={index} booking={booking}></MyBooking>)
                            }
                        </tbody>
                    </table>
                    {
                        !isDataLoaded && <div className="w-full flex items-center justify-center">
                            <div className="flex w-full flex-col gap-4">
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                                <div className="skeleton h-14 mx-5 w-[calc(100%-40px)] my-2 dark:bg-gray-700"></div>
                            </div>
                        </div>
                    }
                </div>
                <div className="mt-10 sm:mt-20 w-full">
                    <p className="text-center text-primary">Statistics</p>
                    <h4 className="text-center text-xl sm:2xl lg:text-4xl xl:5xl">Booking trends</h4>
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart
                            data={myBookings}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="1" />
                            <XAxis dataKey="carModel" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="dailyRentalPrice" fill="#01949A" />
                            <Area type="monotone" dataKey="bookingCount" fill="#ac203cef" stroke="#ac203cef" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </HelmetProvider>
        </div>
    );
}

export default MyBookings;
