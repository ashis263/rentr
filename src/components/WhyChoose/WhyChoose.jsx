import { IoCarSportOutline, IoPricetagsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdOutlineWebhook } from "react-icons/md";


const WhyChoose = () => {
    return (
        <div className="w-11/12 mx-auto m-5 mb-20 sm:mb-20 sm:my-8 lg:mb-32 sm:-mt-16">
            <p className="text-center text-primary">Why Rentr</p>
            <h4 className="text-center text-xl sm:2xl lg:text-4xl xl:5xl">Why Choose Us</h4>
            <div className="pt-5 sm:pt-10 grid grid-cols-2 mx-auto gap-2 sm:gap-5">
                <div className="bg-slate-100 dark:bg-gray-600 justify-around px-5 py-14 space-y-2 rounded-tl-xl text-center flex items-center flex-col drop-shadow-xl">
                    <IoCarSportOutline className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Wide Variety of Cars</h3>
                    <p>From budget-friendly options to luxury vehicles.
                    </p>
                </div>
                <div className="bg-slate-100 dark:bg-gray-600 justify-around px-5 py-14 space-y-2 rounded-tr-xl text-center flex items-center flex-col drop-shadow-xl">
                    <IoPricetagsOutline className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Afordable Prices: </h3>
                    <p>Competitive daily rates you can count on.
                    </p>
                </div>
                <div className="bg-slate-100 dark:bg-gray-600 justify-around px-5 py-14 space-y-2 rounded-bl-xl text-center flex items-center flex-col drop-shadow-xl">
                    <MdOutlineWebhook className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Easy Booking Process</h3>
                    <p>Seamlessly book your ride in just a few clicks</p>
                </div>
                <div className="bg-slate-100 dark:bg-gray-600 justify-around px-5 py-14 space-y-2 rounded-br-xl text-center flex items-center flex-col drop-shadow-xl">
                    <BiSupport className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Customer Support</h3>
                    <p>24/7 assistance for all your queries.</p>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;
