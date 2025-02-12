import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Car = ({ car }) => {
    AOS.init();
    const { _id, carImage, carModel, availability, dailyRentalPrice, description, features, location } = car;
    return (
        <div  data-aos="fade-in" data-aos-duration="1000"  className='flex flex-col shadow p-5 rounded-xl gap-5 items-center bg-white dark:bg-gray-700'>
            <div className='flex flex-col items-center drop-shadow-2xl'>
                <img className='w-80 rounded-xl mb-5' src={carImage} alt="" />
                <div className='flex justify-between w-full'>
                    <div>
                        <p className={`${availability === 'true' ? 'text-green-600' : 'text-red-600'} font-bold`}>{availability === 'true' ? 'Available' : 'Not Available'}</p>
                        <p><span className='font-semibold'>Location: </span><span className='text-primary'>{location}</span></p>
                    </div>
                    <div className=''>
                        <p className="text-xl mb-5"><span className='text-[#ac203cef] font-bold'>{dailyRentalPrice}$</span> /day</p>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
                <p className='text-2xl font-semibold font-mono'>{carModel}</p>
                <p className='text-xs text-gray-500 dark:text-gray-400 py-5 h-32 overflow-scroll'>{description}</p>
                <p className=' h-20 overflow-scroll'><span className='font-semibold'>Features:</span> {features}</p>
                <Link to={`/car/${_id}`} className="btn w-full px-10 my-5 btn-sm bg-gradient-to-r from-[#01769a86] via-[#20758a] dark:to-[#01769a86] text-white border-none duration-1000 hover:bg-primary text-xs">Book Now</Link>
            </div>
        </div>
    );
};


Car.propTypes = {
    car: PropTypes.object.isRequired
};


export default Car;
