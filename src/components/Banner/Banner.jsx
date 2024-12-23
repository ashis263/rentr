import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className="pt-20 relative">
            <div className='bg-banner h-[35vh] sm:h-[55vh] lg:h-[70vh] bg-contain bg-no-repeat w-full sm:opacity-30'>
            </div>
            <div className='w-full sm:w-11/12 mx-auto text-center'>
                <div className='sm:absolute sm:top-24 lg:top-32 xl:top-44 space-y-2 lg:space-y-5 xl:left-52'>
                    <h1 className='font-bold text-3xl sm:text-5xl lg:text:6xl xl:text-7xl text-[#01949A]'>Drive Your {' '}
                        <span className='text-[#ac203cef]'>
                            <Typewriter
                                words={['Perfect Ride!', 'Dream!']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2500}
                            />
                        </span> </h1>
                    <p className='w-3/4  mx-auto text-gray-700 sm:text-lg lg:text-xl'>Rent your favourite car at a afforable price. Options available from economy to luxury for you to choose from.</p>
                    <Link to='/cars' className="btn max-md:btn-sm btn-wide my-2 hover:bg-primary border-none bg-primary text-white lg:text-xl">View Available Cars</Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
