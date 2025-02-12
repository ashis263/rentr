import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Car = ({ car }) => {
    const { _id, carImage, carModel, availability, dailyRentalPrice, date } = car;
    const currentDateISO = new Date().toISOString();
    const difference = Math.abs(moment(date).diff(moment(currentDateISO), 'days'));
    return (
        <div className='flex flex-col shadow bg-white dark:bg-gray-700 duration-1000 p-5 rounded-xl gap-5 items-center hover:shadow-lg hover:shadow-primary text-center'>
            <div className='flex flex-col drop-shadow-2xl h-full justify-between gap-5'>
                <div className='flex flex-col items-center gap-5'>
                    <img className='w-52 drop-shadow-xl rounded-xl' src={carImage} alt="" />
                    <p className='text-2xl font-semibold font-mono'>{carModel}</p>
                </div>
                <div className=''>
                    <p className={`${availability === 'true' ? 'text-green-600' : 'text-red-600'} font-bold`}>{availability === 'true' ? 'Available' : 'Not Available'}</p>
                    <p><span className='text-[#ac203cef] dark:text-white'>{dailyRentalPrice}$</span> /day</p>
                    <p><span className='text-primary'>Added {difference} days ago</span></p>
                    <Link to={`/car/${_id}`} className="btn btn-wide px-10 my-5 btn-sm bg-gradient-to-r from-[#01769a86] via-[#20758a] dark:to-[#01769a86] text-white border-none duration-1000 hover:bg-primary text-xs">Book Now</Link>
                </div>
            </div>
        </div>
    );
};


Car.propTypes = {
    car: PropTypes.object.isRequired
};


export default Car;
