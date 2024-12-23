import { useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TbDragDrop } from "react-icons/tb";
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddCar = () => {
    const { user } = useContext(AuthContext);
    const [uploadedFile, setUploadedFile] = useState([]);
    const [uploadedFileError, setUploadedFileError] = useState('');
    const handleDrop = (acceptedFile) => {
        setUploadedFile(acceptedFile);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        accept: 'image/*',
        multiple: false,
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (uploadedFile.length === 0) {
            setUploadedFileError('Please choose an image!');
        } else {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const date = new Date();
            const car = {
                ...data,
                image: uploadedFile[0],
                date,
                user: {
                    name: user.displayName, email: user.email, photo: user.photoURL
                }

            }
            axios.post('http://localhost:5000/cars', car, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then(res => {
                if(res.data.insertedId){
                    Toast.fire({
                        icon: "success",
                        title: "Car Added successfully"
                    });
                }
                e.target.reset();
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
        <div className="sm:w-2/3 mx-auto drop-shadow">
            <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary">Add Car</h1>
            <form onSubmit={handleFormSubmit} className="w-11/12 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Car Model</span>
                    </label>
                    <input type="text" name="carModel" placeholder="Car Model" className="input max-lg:input-sm input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Daily Rental Price</span>
                    </label>
                    <input type="text" name="dailyRentalPrice" placeholder="Daily Rental Price" className="input max-lg:input-sm input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Availablity</span>
                    </label>
                    <select className={`border rounded-lg p-2 border-gray-200`} name="availablity" required>
                        <option></option>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Vehicle Registration Number</span>
                    </label>
                    <input type="text" name="vehicleRegistrationNumber" placeholder="Vehicle Registration Number" className="input max-lg:input-sm input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Features</span>
                    </label>
                    <textarea name="features" placeholder="Please Add Fetures Using Comma" className="textarea max-lg:textarea-sm textarea-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Description</span>
                    </label>
                    <textarea name="description" placeholder="Description" className="textarea max-lg:textarea-sm textarea-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Booking Count</span>
                    </label>
                    <input type="number" name="bookingCount" defaultValue={0} placeholder="Booking Count" className="input max-lg:input-sm input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Location" className="input max-lg:input-sm input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text`}>Image</span>
                    </label>
                    <div {...getRootProps()} className="w-full border-2 rounded-lg p-5 text-center flex items-center justify-center flex-col">
                        <input {...getInputProps()} />
                        <TbDragDrop className='text-2xl sm:text-5xl' />
                        <p className='max-sm:text-xs'>Drag and drop image file or click here to select.</p>
                        {
                            uploadedFile.length > 0 ? <p className='max-sm:text-xs text-primary'><span className='text-gray-500'>Selected file: </span>{uploadedFile[0].name} <br /></p> : <p className='text-red-500 font-bold'>{uploadedFileError}</p>
                        }
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn max-lg:btn-sm hover:bg-primary border-none bg-primary text-white lg:text-xl">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddCar;
