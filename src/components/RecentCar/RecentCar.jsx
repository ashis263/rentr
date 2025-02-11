import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Car = ({ car }) => {
    const { _id, carImage, carModel, availability, dailyRentalPrice, date } = car;
    const currentDateISO = new Date().toISOString();
    const difference = Math.abs(moment(date).diff(moment(currentDateISO), 'days'));
    return (
        <div className='flex flex-col shadow p-5 rounded-xl gap-5 items-center hover:shadow-lg hover:shadow-primary text-center'>
            <div className='flex flex-col justify-center items-center drop-shadow-2xl'>
                <img className='w-52 drop-shadow-xl rounded-xl' src={carImage} alt="" />
                <p className='text-2xl font-semibold font-mono'>{carModel}</p>
                <p className={`${availability === 'true' ? 'text-green-600' : 'text-red-600'} font-bold`}>{availability === 'true' ? 'Available' : 'Not Available'}</p>
                <p><span className='text-[#ac203cef]'>{dailyRentalPrice}$</span> /day</p>
                <p><span className='text-teal-900'>Added {difference} days ago</span></p>
                <Link to={`/car/${_id}`} className="btn btn-wide px-10 my-5 btn-sm className='btn bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 text-white border-none duration-1000 hover:bg-primary btn-sm' text-xs">Book Now</Link>
            </div>
        </div>
    );
};


Car.propTypes = {
    car: PropTypes.object.isRequired
};


export default Car;
