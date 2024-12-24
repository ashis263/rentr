import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

const UserCar = ({ car }) => {
    return (
        <tr  className='text-center'>
            <td className='flex justify-center max-sm:hidden'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={car.carImage}
                                alt="car" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{car.carModel}</td>
            <td>{car.dailyRentalPrice}</td>
            <td>{car.availability ? 'Available' : 'Not available'}</td>
            <td className="max-sm:hidden">{car.date.split('T')[0]}</td>
            <th className='text-center sm:space-x-2'>
                <button id='edtBtn' className="btn text-lg btn-ghost btn-xs">
                    <MdOutlineEdit />
                </button>
                <Tooltip anchorSelect="#edtBtn" place="top">
                    Update
                </Tooltip>
                <button id='dltBtn' className="btn text-lg btn-ghost btn-xs"><MdDeleteOutline /></button>
                <Tooltip anchorSelect="#dltBtn" place="top">
                    Delete
                </Tooltip>
            </th>
        </tr>
    );
}


UserCar.propTypes = {
    car: PropTypes.object.isRequired
};


export default UserCar;
