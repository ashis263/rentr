import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import 'animate.css';

const Testimonials = () => {
    return (
        <div className="w-3/4 sm:w-1/2 mx-auto my-5 sm:my-8 lg:my-20">
            <p className="text-center text-primary">Testimonials</p>
            <h4 className="text-center text-xl sm:2xl lg:text-4xl xl:5xl">What our clients say</h4>
            <Carousel className="" showStatus="" showThumbs="" infiniteLoop autoPlay showIndicators="">
                <div className="w-11/12 mx-auto py-5 sm:py-10 flex justify-center items-center gap-10 sm:gap-20">
                    <div className="sm:w-4/5 mx-auto text-start p-5 bg-slate-100 rounded-2xl">
                        <FaQuoteLeft className="text-4xl text-primary" />
                        <p className="ml-6 py-10 mb-5">Seamless Car Rental Experience!
                            I recently rented a car through rentr, and the process was incredibly easy and hassle-free. The booking interface was intuitive, and I loved the variety of vehicles available. Pickup and drop-off were smooth, and the car was in great condition. Highly recommend!</p>
                        <h4 className="text-secondary font-semibold font-mono ml-20 pb-5 text-xl">Rajib Bhowmik</h4>
                        <div className="absolute left-1 sm:left-3 lg:left-16 bottom-8 sm:bottom-10 border-primary border-2 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full">
                            <img className="w-full h-full rounded-full outline outline-white outline-[20px]" src="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" alt="person" />
                        </div>
                            <div className="text-primary -right-3 sm:text-2xl lg:text-5xl bg-white p-5 rounded-full absolute top-2 flex sm:right-5 lg:right-10 max-sm:top-0 max-lg:top-1">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStarHalf />
                            </div>
                    </div>
                </div>
                <div className="w-11/12 mx-auto py-5 sm:py-10 flex justify-center items-center gap-10 sm:gap-20">
                    <div className="sm:w-4/5 mx-auto text-start p-5 bg-slate-100 rounded-2xl">
                        <FaQuoteLeft className="text-4xl text-primary" />
                        <p className="ml-6 py-10 mb-5">The website was very user-friendly, and the customer service team was responsive and helpful. However, the prices were a bit higher compared to other options. Still, the experience was worth it for the convenience and quality.</p>
                        <h4 className="text-secondary font-semibold font-mono ml-20 pb-5 text-xl">Shahadat Hossain</h4>
                        <div className="absolute left-5 sm:left-8 lg:left-16 bottom-16 border-primary border-2 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full">
                            <img className="w-full h-full rounded-full outline outline-white outline-[20px]" src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" alt="person" />
                        </div>
                            <div className="text-primary -right-3 sm:text-2xl lg:text-5xl bg-white p-5 rounded-full absolute top-2 flex sm:right-5 lg:right-10 max-sm:top-0 max-lg:top-1">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                    </div>
                </div>
                <div className="w-11/12 mx-auto py-5 sm:py-10 flex justify-center items-center gap-10 sm:gap-20">
                    <div className="sm:w-4/5 mx-auto text-start p-5 bg-slate-100 rounded-2xl">
                        <FaQuoteLeft className="text-4xl text-primary" />
                        <p className="ml-6 py-10 mb-5">Booked a car for my weekend getaway, and it was perfect. The search filters made it easy to find the right vehicle, and the rental policies were clear and transparent. Definitely using this site again!</p>
                        <h4 className="text-secondary font-semibold font-mono ml-20 pb-5 text-xl">Ananya Joya</h4>
                        <div className="absolute left-8 max-sm:left-5 lg:left-16 lg:bottom-14 bottom-28 border-primary border-2 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full">
                            <img className="w-full h-full rounded-full outline outline-white outline-[20px]" src="https://media.istockphoto.com/id/468110313/photo/portrait-of-confused-and-uncertain-hispanic-girl.jpg?s=612x612&w=0&k=20&c=0mi4SABFymR4vdEx5-imWds2ZempxkjzD3sGhwP0-os=" alt="person" />
                        </div>
                            <div className="text-primary -right-3 sm:text-2xl lg:text-5xl bg-white p-5 rounded-full absolute top-2 flex sm:right-5 lg:right-10 max-sm:top-0 max-lg:top-1">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Testimonials;
