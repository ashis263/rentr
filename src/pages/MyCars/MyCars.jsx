import { useContext, useState } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import UserCar from "../../components/MyCar.jsx/MyCar";

const MyCars = () => {
    const { myCars, setMyCars } = useContext(AuthContext);
    const [ sortBy, setSortBy ] = useState('');
    if(sortBy === 'price'){
        setMyCars(myCars.sort((a,b) => b.dailyRentalPrice - a.dailyRentalPrice));
    }else if(sortBy === 'date'){
        setMyCars(myCars.sort((a,b) => new Date(a.date) - new Date(b.date)));
    }
    return (
        <div  className='w-11/12 mx-auto shadow-lg rounded-xl'>
            <h1 className="text-4xl text-center sm:text-5xl lg:text-7xl sm:pt-0 font-bold text-primary pb-2 sm:pb-5">My Cars</h1>
            <div className="flex justify-end mr-10">
            <select onChange={(e) => setSortBy(e.target.value)} className={`border rounded-lg p-2 border-gray-200 select-sm text-xs mb-2 text-center`} name="availability" required>
                        <option disabled selected>Sort By</option>
                        <option value="date">Date</option>
                        <option value="price">Price</option>
                    </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr  className='text-center'>
                            <th className="max-sm:hidden">Image</th>
                            <th>Model</th>
                            <th>Rent/day</th>
                            <th>Availablity</th>
                            <th className="max-sm:hidden">Added</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        myCars.length !== 0 && myCars.map(car => <UserCar key={car._id} car={car}></UserCar>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyCars;
