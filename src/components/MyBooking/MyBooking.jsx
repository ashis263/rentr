import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiTrash } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import Swal from 'sweetalert2';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import moment from 'moment';


const MyBooking = ({ booking: current, index }) => {
    const [booking, setBooking] = useState(current);
    const [isModalOpened, SetIsModalOpened] = useState(false);
    const handleModal = () => SetIsModalOpened(!isModalOpened);
    const date = new Date(booking.date);
    let formattedDate;
    if (/to/.test(booking.date)) {
        formattedDate = booking.date;
    } else {
        formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }
    const handleCancel = () => {
        if (booking.availability === 'Cancelled') {
            Toast.fire({
                icon: "error",
                title: 'Already cancelled!'
            });
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to undo this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#ac203cef",
                cancelButtonColor: "#01949A",
                confirmButtonText: "Yes",
                cancelButtonText: "No"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.patch(`https://rentr-server.vercel.app/bookings/availability/?id=${booking._id}`, { availability: "Cancelled" })
                        .then(res => {
                            if (res.data.modifiedCount) {
                                const { availability, ...data } = booking;
                                setBooking({ ...data, availability: 'Cancelled' })
                                Swal.fire({
                                    title: "Cancelled!",
                                    text: "Your booking has been cancelled.",
                                    icon: "success"
                                });
                            }
                        })
                }
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
    const handleDate = (e) => {
        e.preventDefault();
        handleModal();
        const start = e.target.start.value;
        const end = e.target.end.value;
        const formattedStart = moment(start, "YYYY-MM-DD").format("DD-MM-YYYY");
        const formattedEnd = moment(end, "YYYY-MM-DD").format("DD-MM-YYYY");
        const momentDate1 = moment(formattedStart, "DD-MM-YYYY");
        const momentDate2 = moment(formattedEnd, "DD-MM-YYYY");
        const difference = Math.abs(momentDate1.diff(momentDate2, 'days'));
        const newPrice = booking.dailyRentalPrice * difference;
        console.log(difference);
        axios.patch(`https://rentr-server.vercel.app/bookings/date/?id=${booking._id}`, { date: start + ' to ' + end, dailyRentalPrice: newPrice })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    const { date, dailyRentalPrice, ...data } = booking;
                    setBooking({ ...data, dailyRentalPrice: newPrice, date: formattedStart + ' to ' + formattedEnd })
                    Swal.fire({
                        title: "Modified!",
                        text: "Your booking date has been modified!.",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <tr className={`${index % 2 === 0 ? 'hover:bg-slate-200 ' : 'hover:bg-slate-200 bg-gray-100'}`}>
            <td className='flex justify-center max-sm:hidden'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={booking.carImage}
                                alt="car" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{booking.carModel}</td>
            <td>{formattedDate}</td>
            <td className='max-sm:hidden'>{booking.dailyRentalPrice} $</td>
            {
                booking.availability === 'Cancelled' ? <td>Cancelled</td> : <td>{booking.availability === 'true' ? 'Confirmed' : 'Pending'}</td>
            }
            <th className='text-center lg:space-x-2'>
                <button onClick={handleCancel} className="btn btn-sm bg-red-400 hover:bg-red-500 hover:text-white"><span className='max-lg:hidden'>Cancel</span><CiTrash /></button>
                <button onClick={handleModal} className="btn btn-sm bg-blue-400 hover:bg-blue-500 hover:text-white"><span className='max-lg:hidden max-sm:pl-0'>Modify Date</span><CiCalendarDate /></button>
                <Modal className="pt-[30vh]" open={isModalOpened} onClose={handleModal}>
                    <p className='text-2xl px-20 py-5 text-primary font-bold'>Select Date Range</p>
                    <form onSubmit={handleDate} className='text-center flex justify-center flex-col'>
                        From:<input className='input input-bordered input-sm my-5' type="date" placeholder='start' name="start" required />
                        <br />
                        To:<input className='input input-bordered input-sm my-5' type="date" name="end" required />
                        <div className='flex justify-center gap-12'>
                            <button className='btn btn-sm bg-gradient-to-r from-[#01769a86] via-[#20758a] text-white border-none duration-1000 hover:bg-primary mr-5'>Confirm</button>
                            <button type='button' onClick={handleModal} className='btn bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 text-white border-none duration-1000 hover:bg-primary btn-sm'>Close</button>
                        </div>
                    </form>
                </Modal>
            </th>
        </tr>
    );
};


MyBooking.propTypes = {
    booking: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};


export default MyBooking;
