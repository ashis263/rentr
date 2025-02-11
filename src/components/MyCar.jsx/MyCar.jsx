import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from "axios";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useDropzone } from 'react-dropzone';
import { TbDragDrop } from "react-icons/tb";

const UserCar = ({ car, index }) => {
    const { myCars, setMyCars, isCarModified, setIsCarModified } = useContext(AuthContext);
    const [uploadedFile, setUploadedFile] = useState([]);
    const [isModalOpened, SetIsModalOpened] = useState(false);
    const handleModal = () => SetIsModalOpened(!isModalOpened);
    const carsWithoutCurrent = myCars.filter(item => item._id !== car._id);
    const handleDrop = (acceptedFile) => {
        setUploadedFile(acceptedFile);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        accept: 'image/*',
        multiple: false,
    });
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ac203cef",
            cancelButtonColor: "#01949A",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://rentr-server.vercel.app/cars/?id=${car._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            setMyCars(carsWithoutCurrent)
                            setIsCarModified(!isCarModified)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your car has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        Toast.fire({
                            icon: "error",
                            title: err
                        });
                    })
            }
        });
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
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleModal();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const updatedCar = {
            _id: car._id,
            ...data,
            image: uploadedFile[0],
            date: car.date,
            user: car.user,
            email: car.email,
            photo: car.photo,

        }
        axios.patch(`https://rentr-server.vercel.app/cars`, updatedCar, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
                if (res.data.modifiedCount) {
                    setIsCarModified(!isCarModified)
                    setMyCars([...carsWithoutCurrent, updatedCar]);
                    Toast.fire({
                        icon: "success",
                        title: "Car updated successfully"
                    });
                } else {
                    Toast.fire({
                        icon: "warning",
                        title: "Please change some data to update!"
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
    return (
        <tr className={`${index % 2 === 0 ? 'hover:bg-slate-200 text-center ' : 'hover:bg-slate-200 text-center bg-gray-100'}`}>
            <td className='flex justify-center max-sm:hidden'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={car.carImage}
                                alt="car" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{car.carModel}</td>
            <td>{car.dailyRentalPrice} $</td>
            <td>{car.availability ? 'Available' : 'Not available'}</td>
            <td className="max-sm:hidden">{car.date.split('T')[0]}</td>
            <th className='text-center sm:space-x-2'>
                <button onClick={handleModal} id='edtBtn' className="btn text-lg btn-ghost btn-xs">
                    <MdOutlineEdit />
                </button>
                <Tooltip anchorSelect="#edtBtn" place="top">
                    Update
                </Tooltip>
                <button onClick={handleDelete} id='dltBtn' className="btn text-lg btn-ghost btn-xs"><MdDeleteOutline /></button>
                <Tooltip anchorSelect="#dltBtn" place="top">
                    Delete
                </Tooltip>
            </th>
            <Modal className="" open={isModalOpened} onClose={handleModal}>
                <h1 className="w-full text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary px-20 sm:px-32 lg:px-56 xl:px-60">Update Car</h1>
                <form className='px-5' onSubmit={handleFormSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Car Model</span>
                        </label>
                        <input defaultValue={car.carModel} type="text" name="carModel" placeholder="Car Model" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Daily Rental Price</span>
                        </label>
                        <input defaultValue={car.dailyRentalPrice} type="number" name="dailyRentalPrice" placeholder="Daily Rental Price" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Availablity</span>
                        </label>
                        <select className={`border rounded-xl p-2 border-gray-200 max-sm:select-sm`} name="availability" required>
                            <option></option>
                            <option selected={car.availability === 'true'} value="true">Available</option>
                            <option selected={car.availability !== 'true'} value="false">Not Available</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Vehicle Registration Number</span>
                        </label>
                        <input defaultValue={car.vehicleRegistrationNumber} type="text" name="vehicleRegistrationNumber" placeholder="Vehicle Registration Number" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Features</span>
                        </label>
                        <textarea defaultValue={car.features} name="features" placeholder="Please Add Fetures Using Comma" className="textarea max-lg:textarea-sm textarea-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Description</span>
                        </label>
                        <textarea defaultValue={car.description} name="description" placeholder="Description" className="textarea max-lg:textarea-sm textarea-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Booking Count</span>
                        </label>
                        <input type="number" name="bookingCount" defaultValue={car.bookingCount} placeholder="Booking Count" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Location</span>
                        </label>
                        <input defaultValue={car.location} type="text" name="location" placeholder="Location" className="input max-lg:input-sm input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text`}>Image</span>
                        </label>
                        <div {...getRootProps()} className="w-full border-2 rounded-xl p-5 text-center flex items-center justify-center flex-col">
                            <input {...getInputProps()} />
                            <TbDragDrop className='text-2xl sm:text-5xl' />
                            <p className='max-sm:text-xs'>Drag and drop image file or click here to select.</p>
                            {
                                uploadedFile.length > 0 ? <p className='max-sm:text-xs text-primary'><span className='text-gray-500'>Selected file: </span>{uploadedFile[0].name} <br /></p> : ''
                            }
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn max-lg:btn-sm className='btn bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 text-white border-none duration-1000 hover:bg-primary btn-sm' lg:text-xl">Update</button>
                    </div>
                </form>
            </Modal>
        </tr>
    );
}


UserCar.propTypes = {
    car: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};


export default UserCar;
