import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
    return (
        <div className="w-11/12 mx-auto my-5 mb-20 sm:my-8 lg:my-20 lg:mb-32">
            <p className="text-center text-primary">Testimonials</p>
            <h4 className="text-center text-xl sm:2xl lg:text-4xl xl:5xl">What our clients say</h4>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                spaceBetween={50}
                className="mt-5 sm:mt-10"
            >
                <SwiperSlide>
                    <div className="bg-white dark:bg-gray-700 dark:text-gray-400 p-5 rounded-xl shadow-lg text-gray-500 space-y-3">
                        <FaQuoteLeft className="text-4xl text-primary" />
                        <p className="pl-8 text-justify overflow-y-scroll h-[15vh] text-xs pt-5">Seamless Car Rental Experience! I recently rented a car through rentr, and the process was incredibly easy and hassle-free. The booking interface was intuitive, and I loved the variety of vehicles available. Pickup and drop-off were smooth, and the car was in great condition. Highly recommend!</p>
                        <div className="flex justify-center">
                            <img src="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" alt="display photo" className="w-1/5 aspect-square rounded-full" />
                        </div>
                        <h4 className="text-xl font-medium text-primary text-center">Shahadat Islam</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white dark:bg-gray-700 dark:text-gray-400 p-5 rounded-xl shadow-lg text-gray-500 space-y-3">
                        <FaQuoteLeft className="text-4xl text-primary" />
                        <p className="pl-8 text-justify overflow-y-scroll h-[15vh] text-xs pt-5">I recently rented a car through Rentr, and the entire process was seamless from start to finish. The booking interface was user-friendly, offering a great selection of vehicles to choose from. Both pickup and drop-off were quick and hassle-free, and the car was in excellent condition. Overall, a fantastic experience—I highly recommend Rentr for stress-free rentals!</p>
                        <div className="flex justify-center">
                            <img src="https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg" alt="display photo" className="w-1/5 aspect-square rounded-full" />
                        </div>
                        <h4 className="text-xl font-medium text-primary text-center">Pranta Roy</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white dark:bg-gray-700 dark:text-gray-400 p-5 rounded-xl shadow-lg text-gray-500 space-y-3">
                        <FaQuoteLeft className="text-4xl text-primary" />
                        <p className="pl-8 text-justify overflow-y-scroll h-[15vh] text-xs pt-5">The website was very user-friendly, and the customer service team was responsive and helpful. However, the prices were a bit higher compared to other options. Still, the experience was worth it for the convenience and quality.</p>
                        <div className="flex justify-center">
                            <img src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" alt="display photo" className="w-1/5 aspect-square rounded-full" />
                        </div>
                        <h4 className="text-xl font-medium text-primary text-center">Reaz Hossain</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white dark:bg-gray-700 dark:text-gray-400 p-5 rounded-xl shadow-lg text-gray-500 space-y-3">
                        <FaQuoteLeft className="text-4xl text-primary" />
                        <p className="pl-8 text-justify overflow-y-scroll h-[15vh] text-xs pt-5">Booked a car for my weekend getaway, and it was perfect. The search filters made it easy to find the right vehicle, and the rental policies were clear and transparent. Definitely using this site again!</p>
                        <div className="flex justify-center">
                            <img src="https://media.istockphoto.com/id/468110313/photo/portrait-of-confused-and-uncertain-hispanic-girl.jpg?s=612x612&w=0&k=20&c=0mi4SABFymR4vdEx5-imWds2ZempxkjzD3sGhwP0-os=" alt="display photo" className="w-1/5 aspect-square rounded-full" />
                        </div>
                        <h4 className="text-xl font-medium text-primary text-center">Tabassum</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonials;
