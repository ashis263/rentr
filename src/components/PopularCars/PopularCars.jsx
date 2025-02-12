import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PopularCar from "../PopularCar/PopularCar";

const PopularCars = () => {
    AOS.init();
    const { popular } = useContext(AuthContext);
    return (
        <div data-aos="fade-out" data-aos-duration="500" className="mb-20 lg:mb-32">
            <p className="text-center text-primary">Most booked cars</p>
            <h4 className="drop-shadow-2xl font-semibold text-center text-xl sm:2xl lg:text-4xl xl:5xl">Popular Cars</h4>
            <div className="w-11/12 mx-auto grid gc-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 pt-5 sm:pt-10 sm:gap-5">
                {popular.length !== 0 && popular.map(car => <PopularCar key={car._id} car={car}></PopularCar>)}
            </div>
            {
                popular.length === 0 && <div className="w-full flex items-center justify-center">
                    <div className="w-11/12 mx-auto grid gc-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 pt-5 sm:pt-10 sm:gap-5">
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-52 dark:bg-gray-700"></div>
                            <div className="skeleton h-10 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                        </div>
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-52 dark:bg-gray-700"></div>
                            <div className="skeleton h-10 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                        </div>
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-52 dark:bg-gray-700"></div>
                            <div className="skeleton h-10 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                        </div>
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-52 dark:bg-gray-700"></div>
                            <div className="skeleton h-10 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                        </div>
                        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
                            <div className="skeleton h-32 w-52 dark:bg-gray-700"></div>
                            <div className="skeleton h-10 w-[calc(100%-10px)] dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default PopularCars;
