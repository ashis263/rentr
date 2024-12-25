import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import UserCar from "../../components/MyCar.jsx/MyCar";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import loader from '../../assets/loader.json';

const MyCars = () => {
    const { user, myCars, setMyCars, isCarModified } = useContext(AuthContext);
    const [sortBy, setSortBy] = useState('');
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const navigate = useNavigate();
    if (sortBy === 'price') {
        setMyCars(myCars.sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice));
    } else if (sortBy === 'date') {
        setMyCars(myCars.sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
    useEffect((() => {
        axios.get(`http://localhost:5000/userCars/?email=${user.email}`, {
            withCredentials: true
        })
            .then(res => {
                setMyCars(res.data);
                setIsDataLoaded(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [isCarModified])
    if (isDataLoaded && !myCars.length) {
        Swal.fire({
            title: "No added cars!",
            text: "Do you want to add new car?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#01949A",
            cancelButtonColor: "gray",
            confirmButtonText: "Continue"
        })
            .then(result => {
                if (result.isConfirmed) {
                    navigate('/addCar')
                }
            })
    }
    return (
        <div className='w-11/12 mx-auto rounded-xl'>
            <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary pb-2 sm:pb-5">My Cars</h1>
            <div className="flex justify-end mr-10 shadow-sm">
                <select onChange={(e) => setSortBy(e.target.value)} className={`border rounded-lg p-2 border-gray-200 select-sm text-xs mb-2 text-center`} name="availability" required>
                    <option disabled selected>Sort By</option>
                    <option value="date">Date</option>
                    <option value="price">Price</option>
                </select>
            </div>
            <div className="overflow-x-auto shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th className="max-sm:hidden">Image</th>
                            <th>Model</th>
                            <th>Rent/day</th>
                            <th>Availablity</th>
                            <th className="max-sm:hidden">Added</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCars.length !== 0 && myCars.map(car => <UserCar key={car._id} car={car}></UserCar>)
                        }
                    </tbody>
                </table>
                {
                    myCars.length === 0 && <div className="w-full flex items-center justify-center">
                        <Lottie className='w-10' animationData={loader} loop={true} />
                    </div>
                }
            </div>
        </div>
    );
}

export default MyCars;
