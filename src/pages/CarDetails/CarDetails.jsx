import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CarDetails = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMybookings] = useState([]);
    const car = useLoaderData();
    const { _id, carImage: img, ...data } = car;
    const [ carToRender, setCarToRender ] = useState(car);
    const { carImage, carModel, availability, dailyRentalPrice, description, features, location, vehicleRegistrationNumber, bookingCount } = carToRender;
    const date = new Date();
    const booking = {
        carId: _id,
        ...data,
        bookedBy: user.email,
        bookingDate: date,
        findingKey: _id + user.email
    }
    const axiosSecure = useAxiosSecure();
    useEffect((() => {
        axiosSecure.get(`/userBookings/?email=${user.email}`)
            .then(res => {
                setMybookings(res.data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [carToRender]);
    const handleBook = () => {
        const existed = myBookings.find(booking => booking.findingKey === _id + user.email)
        if(existed){
            Toast.fire({
                icon: "warning",
                title: 'Already booked!'
            });
        }else{
            axios.post('https://rentr-server.vercel.app/bookings', booking)
            .then(res => {
                if (res.data.insertedId) {
                    carToRender.bookingCount = bookingCount + 1;
                    setCarToRender({...carToRender});
                    Swal.fire({
                        title: "Booking confirmed!",
                        html: `
                        <p>Car: ${carModel}</p>
                        <p>Daily rent: ${dailyRentalPrice} $</p>
                        <p>Vehicle registration number: ${vehicleRegistrationNumber}</p>
                    `,
                        icon: "success"
                    });
                }
            })
            .catch(err => {
                Toast.fire({
                    icon: "error",
                    title: err.message
                });
            })
        }
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
        <div className="animate__animated animate__fadeIn w-11/12 sm:w-2/3 mx-auto shadow-xl p-5 rounded-xl">
            <HelmetProvider>
                <Helmet>
                    <title>Rentr | {carModel}</title>
                </Helmet>
            <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl sm:pt-0 font-bold text-primary pb-2 sm:pb-5">{carModel}</h1>
            <div className='flex gap-5'>
                <div className='flex flex-col items-center w-2/5 drop-shadow-2xl'>
                    <img className='w-80 rounded-xl mb-5' src={carImage} alt="" />
                    <p className="text-xl mb-5"><span className='text-[#ac203cef] font-bold'>{dailyRentalPrice}$</span> /day</p>
                    <p className={`${availability === 'true' ? 'text-green-600' : 'text-red-600'} font-bold`}>{availability === 'true' ? 'Available' : 'Not Available'}</p>
                    <p><span className='font-semibold'>Location: </span><span className='text-primary'>{location}</span></p>
                </div>
                <div className='w-1/2 space-y-5'>
                    <p className=' text-gray-500'>{description}</p>
                    <p><span className='font-semibold'>Features:</span> {features}</p>
                    <p className="">Total bookings: <span className=' text-primary font-extrabold'>{bookingCount}</span></p>
                </div>
            </div>
            <button onClick={handleBook} to={`/car/${_id}`} className="btn w-full className='btn bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 text-white border-none duration-1000 hover:bg-primary btn-sm' px-10 my-5 max-sm:btn-sm sm:text-lg text-xs">Book Now</button>
            </HelmetProvider>
        </div>
    );
}

export default CarDetails;
