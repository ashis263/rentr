import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const PopularCar = ({ car }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isBtnHovered, setIsBtnHovered] = useState(false);
    AOS.init();
    return (
        <div data-aos="fade-in" data-aos-duration="500" className='text-center drop-shadow max-sm:shadow rounded-xl max-sm:p-5 flex flex-col items-center bg-white dark:bg-gray-700 p-2'>
            <div>
                <img onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} className={`${isBtnHovered ? 'opacity-20' : ''} rounded-xl hover:opacity-20 duration-1000 max-sm:w-2/3 mx-auto`} src={car.carImage} alt={car.carModel} />
                <h4 className='text-2xl font-semibold font-mono'>{car.carModel}</h4>
            </div>
            <p className='text-gray-500 mt-auto'>Booked <span className='text-primary font-semibold'>{car.bookingCount}</span> times</p>
            <Link onMouseEnter={() => {
                setIsVisible(true);
                setIsBtnHovered(true);
            }} onMouseLeave={() => setIsBtnHovered(false)} to={`/car/${car._id}`} className={`${isVisible ? '' : 'hidden'} absolute top-[65px] btn  px-10 my-5 btn-sm bg-gradient-to-r from-[#01769a86] via-[#20758a] dark:to-[#01769a86] text-white border-none hover:bg-primary text-xs duration-1000`}>View Details</Link>
        </div>
    );
};


PopularCar.propTypes = {
    car: PropTypes.object.isRequired
};


export default PopularCar;
