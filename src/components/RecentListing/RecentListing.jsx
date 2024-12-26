import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import RecentCar from "../RecentCar/RecentCar";
import Lottie from "lottie-react";
import loader from '../../assets/loader.json';

const RecentListing = () => {
    const { isCarModified } = useContext(AuthContext)
    const [recent, setRecent] = useState([]);
    useEffect((() => {
        axios.get('http://localhost:5000/cars/recent')
            .then(res => setRecent(res.data))
    }), [isCarModified]);
    return (
        <div>
            <p className="text-center text-primary">Recently added cars</p>
            <h4 className="drop-shadow-2xl font-semibold text-center text-xl sm:2xl lg:text-4xl xl:5xl">Recent Listing</h4>
            <div className="w-4/5 mx-auto grid gc-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-5 sm:pt-10 sm:gap-5">
                {recent.length !== 0 && recent.map(car => <RecentCar key={car._id} car={car}></RecentCar>)}
            </div>
            {
                    recent.length === 0 && <div className="w-full flex items-center justify-center">
                        <Lottie className='w-10' animationData={loader} loop={true} />
                    </div>
                }
        </div>
    );
}

export default RecentListing;
