import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TableCar = ( { car }) => {
    const { _id, carImage, carModel, availability, dailyRentalPrice, location } = car;
    return (
        <tr className='text-center shadow mt-5 sm:mt-10'>
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
                <Link to={`/car/${_id}`} className="btn hover:bg-transparent hover:text-primary text-gray-700 btn-outline px-10 my-5 btn-sm text-xs max-sm:w-10">Book Now</Link>
            </th>
        </tr>
    );
};


TableCar.propTypes = {
    car: PropTypes.object.isRequired
};


export default TableCar;
