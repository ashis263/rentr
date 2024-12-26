import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import MyBooking from "../../components/MyBooking/MyBooking";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Chart from "../../components/Chart/Chart";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyBookings = () => {
    const [myBookings, setMybookings] = useState([]);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    useEffect((() => {
        axiosSecure.get(`/userBookings/?email=${user.email}`)
            .then(res => {
                setMybookings(res.data);
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
                        <tr className="font-bold bg-[#01959a42]">
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
                            myBookings.length !== 0 && myBookings.map((booking, index) => <MyBooking key={booking._id} index={index} booking={booking}></MyBooking>)
                        }
                    </tbody>
                </table>
            </div>
            <Chart bookings={myBookings}></Chart>
            </HelmetProvider>
        </div>
    );
}

export default MyBookings;
