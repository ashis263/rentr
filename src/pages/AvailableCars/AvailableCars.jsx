import { CiSearch } from "react-icons/ci";
import { PiTableFill } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import Car from "../../components/Car/Car";
import TableCar from "../../components/TableCar/TableCar";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import loader from '../../assets/loader.json';



const AvailableCars = () => {
    const { cars } = useContext(AuthContext);
    const [sortBy, setSortBy] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [isGridMode, setIsGridMode] = useState(true);
    const handleMode = () => setIsGridMode(!isGridMode);
    useEffect(() => {
        setFiltered([...cars]);
    }, [cars])
    const onSearch = (e) => {
        const query = e.target.value;
        setFiltered(cars.filter(car => car.carModel.toLowerCase().includes(query) | car.location.toLowerCase().includes(query)));

    }

    if (sortBy === 'price') {
        filtered.sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice)
    } else if (sortBy === 'date') {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
    }
    return (
        <div className="animate__animated animate__fadeIn w-11/12 mx-auto">
            <HelmetProvider>
                <Helmet>
                    <title>Rentr | Cars</title>
                </Helmet>
                <div className="mb-5 sm:mb-15">
                    <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary pb-2 sm:pb-5">Available Cars</h1>
                    <div className="flex justify-between items-center shadow-sm pb-5">
                        <div className="flex items-center">
                            <input onChange={onSearch} type="text" placeholder="Search" className="input input-sm input-bordered" />
                            <div className="relative text-xl -left-7 text-gray-400">
                                <CiSearch />
                            </div>
                        </div>
                        <div className=" flex items-center">
                            <select onChange={(e) => setSortBy(e.target.value)} className={`border rounded-xl p-2 border-gray-200    text-xs text-center mr-10`} name="availability" required>
                                <option disabled selected>Sort By</option>
                                <option value="date">Date</option>
                                <option value="price">Price</option>
                            </select>
                            <div>
                                <PiTableFill onClick={handleMode} className={`${!isGridMode ? 'hidden' : 'block'} text-4xl`} />
                            </div>
                            <div>
                                <IoGridOutline onClick={handleMode} className={`${isGridMode ? 'hidden' : 'block'} text-3xl`} />
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            (filtered.length !== 0) ? 
                                ((isGridMode) ? 
                                <div className="grid gc-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-5 sm:pt-10 sm:gap-5">
                                    {filtered.map(car => <Car key={car._id} car={car}></Car>)}
                                </div>
                                    :
                                    <table className="table">
                                        <thead>
                                            <tr className="font-bold bg-[#01959a42] text-center">
                                                <th className="max-sm:hidden">Image</th>
                                                <th>Model</th>
                                                <th>Rent/day</th>
                                                <th>Availablity</th>
                                                <th>Location</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filtered.map((car, index) => <TableCar key={car._id} index={index} car={car}></TableCar>)}
                                        </tbody>
                                    </table>)
                            :
                                (
                                    <div className="w-full flex items-center justify-center">
                                        <Lottie className='w-10' animationData={loader} loop={true} />
                                    </div>
                                )
                            
                        }
                    </div>
                </div>
            </HelmetProvider>
        </div >
    );
}

export default AvailableCars;
