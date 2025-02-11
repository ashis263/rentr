import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TableCar = ( { car, index }) => {
    const { _id, carImage, carModel, availability, dailyRentalPrice, location } = car;
    return (
        <tr className={`${index%2===0 ? 'text-center shadow mt-5 hover:bg-slate-200 sm:mt-10' : 'text-center shadow mt-5 hover:bg-slate-200 sm:mt-10 bg-gray-100'}`}>
            <td className='flex justify-center max-sm:hidden'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={carImage}
                                alt="car" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{carModel}</td>
            <td>{dailyRentalPrice}$</td>
            <td className=''>{availability ? 'Available' : 'Not available'}</td>
            <td>{location}</td>
            <th className='text-center sm:space-x-2'>
                <Link to={`/car/${_id}`} className="btn hover:bg-transparent className='btn bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 text-white border-none duration-1000 hover:bg-primary btn-sm'btn-outline px-10 my-5 btn-sm text-xs max-sm:w-10">Book Now</Link>
            </th>
        </tr>
    );
};


TableCar.propTypes = {
    car: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
    
};


export default TableCar;
