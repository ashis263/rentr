import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Car = ({ car }) => {
    const { _id, carImage, carModel, availability, dailyRentalPrice, description, features, location } = car;
    return (
        <div className='flex shadow p-5 rounded-xl gap-5 items-center    '>
            <div className='flex flex-col items-center w-2/5 drop-shadow-2xl'>
                <img className='w-52' src={carImage} alt="" />
                <p className={`${availability === 'true' ? 'text-green-600' : 'text-red-600'} font-bold`}>{availability === 'true' ? 'Available' : 'Not Available'}</p>
                <Link to={`/car/${_id}`} className="btn px-10 my-5 btn-sm hover:bg-slate-700 text-gray-100 border-none bg-slate-700 text-xs">Book Now</Link>
            </div>
            <div className='w-1/2'>
                <p className='text-2xl font-semibold font-mono'>{carModel}</p>
                <p><span className='text-[#ac203cef]'>{dailyRentalPrice}$</span> /day</p>
                <p className='text-xs text-gray-500 pt-5'>{description}</p>
                <p><span className='font-semibold'>Features:</span> {features}</p>
                <p><span className='font-semibold'>Location: </span><span  className='text-primary'>{location}</span></p>
            </div>
        </div>
    );
};


Car.propTypes = {
    car: PropTypes.object.isRequired
};


export default Car;
