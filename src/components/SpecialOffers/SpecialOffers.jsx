import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sale1 from '../../assets/sale1.png'
import sale2 from '../../assets/sale2.png'
import { useState } from "react";
import { motion } from "motion/react"
import { Link } from "react-router-dom";


const SpecialOffers = () => {
    const [current, setCurrent] = useState();
        const fadeInVariants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 3 } },
          };
    return (
        <div className="w-11/12 mx-auto my-5 mb-20 sm:my-8 lg:my-20 lg:mb-32">
            <p className="text-center text-primary">Deals</p>
            <h4 className="text-center text-xl sm:2xl lg:text-4xl xl:5xl">Special Offers</h4>
            <Carousel onChange={(index) => setCurrent(index)} className="" showStatus="" showThumbs="" infiniteLoop autoPlay showIndicators="" showArrows={false}>
                <div className="pt-5 sm:pt-10 flex justify-center items-center gap-10 sm:gap-20">
                    <motion.div variants={fadeInVariants} animate={current === 0 ? "visible" : "hidden"} className="w-full flex sm:h-[60vh]">
                        <div className="w-3/4 mx-auto sm:w-1/2 flex space-y-3 py-10 flex-col justify-center max-sm:rounded-xl sm:rounded-l-xl bg-slate-100">
                            <h4 className="text-lg sm:text-xl lg:text-2xl">Clearance Sale</h4>
                            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary">Upto 70% OFF</h2>
                            <p className="w-4/5 mx-auto">Do not miss the biggest clearance sale of the year!
                                Shop now and grab your favorite items before they are gone.</p>
                            <div className="flex justify-center">
                                <Link to="/cars" className="max-lg:btn-sm w-52 mt-20 rounded-xl btn border-none bg-gradient-to-r from-[#01769a86] via-[#2 text-[#ffffffee] to-[#20758a86]">Book Now</Link>
                            </div>
                        </div>
                        <div className="bg-primary w-1/2 sm:rounded-r-xl max-sm:hidden flex justify-center items-center">
                            <div className="w-1/2">
                                <img src={sale2} alt="" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="pt-5 sm:pt-10 flex justify-center items-center gap-10 sm:gap-20">
                    <motion.div variants={fadeInVariants} animate={current === 1 ? "visible" : "hidden"} className="w-full flex sm:h-[60vh]">
                        <div className="bg-primary w-1/2 sm:rounded-l-xl max-sm:hidden flex justify-center items-center">
                            <div className="w-1/2">
                                <img src={sale1} alt="" />
                            </div>
                        </div>
                        <div className="w-3/4 mx-auto sm:w-1/2 flex space-y-3 py-10 flex-col justify-center max-sm:rounded-xl sm:rounded-r-xl bg-slate-100">
                            <h4 className="text-lg sm:text-xl lg:text-2xl">Christmas Sale</h4>
                            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary">Flat 20% OFF</h2>
                            <p className="w-4/5 mx-auto">Celebrate the season with amazing deals on your favorite items!
                                Perfect gifts, joyful prices, and holiday cheer await you.</p>
                            <div className="flex justify-center">
                                <Link to="/cars" className="max-lg:btn-sm w-52 mt-20 rounded-xl btn border-none bg-gradient-to-r from-[#01769a86] via-[#20758a] shadow-xl text-[#ffffffee] to-[#20758a86]">Book Now</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Carousel>
        </div>
    );
}

export default SpecialOffers;