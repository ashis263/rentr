import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import RecentCar from "../RecentCar/RecentCar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecentListing = () => {
    AOS.init();
    const { recent } = useContext(AuthContext);
    return (
        <div  data-aos="fade-in" data-aos-duration="1000" className="mb-20 lg:mb-32">
            <p className="text-center text-primary">Recently added cars</p>
            <h4 className="drop-shadow-2xl font-semibold text-center text-xl sm:2xl lg:text-4xl xl:5xl">Recent Listing</h4>
            <div className="w-11/12 mx-auto grid gc-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pt-5 sm:pt-10 sm:gap-5">
                {recent.length !== 0 && recent.map(car => <RecentCar key={car._id} car={car}></RecentCar>)}
            </div>
            {
                recent.length === 0 && <div className="w-full flex items-center justify-center">
                    <div className="w-11/12 mx-auto grid gc-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pt-5 sm:pt-10 sm:gap-5">
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-44 dark:bg-gray-700"></div>
                            <div className="skeleton h-12 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                            <div className="skeleton h-7 w-2/3 my-5 dark:bg-gray-700"></div>
                            <div className="skeleton h-5 w-1/2 dark:bg-gray-700"></div>
                        </div>
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-44 dark:bg-gray-700"></div>
                            <div className="skeleton h-12 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                            <div className="skeleton h-7 w-2/3 my-5 dark:bg-gray-700"></div>
                            <div className="skeleton h-5 w-1/2 dark:bg-gray-700"></div>
                        </div>
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-44 dark:bg-gray-700"></div>
                            <div className="skeleton h-12 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                            <div className="skeleton h-7 w-2/3 my-5 dark:bg-gray-700"></div>
                            <div className="skeleton h-5 w-1/2 dark:bg-gray-700"></div>
                        </div>
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-44 dark:bg-gray-700"></div>
                            <div className="skeleton h-12 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                            <div className="skeleton h-7 w-2/3 my-5 dark:bg-gray-700"></div>
                            <div className="skeleton h-5 w-1/2 dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default RecentListing;