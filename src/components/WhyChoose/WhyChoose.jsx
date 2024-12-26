import { IoCarSportOutline, IoPricetagsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdOutlineWebhook } from "react-icons/md";


const WhyChoose = () => {
    return (
        <div className="w-11/12 mx-auto my-5 sm:my-8 lg:my-20">
            <p className="text-center text-primary">Why Rentr</p>
            <h4 className="text-center text-xl sm:2xl lg:text-4xl xl:5xl">Why Choose Us</h4>
            <div className="mt-5 grid grid-cols-2 lg:w-2/3 xl:w-3/5 mx-auto gap-2 sm:gap-5">
                <div className="bg-slate-100 px-5 py-10 shadow-inner rounded-tl-[50px] drop-shadow-xl">
                    <IoCarSportOutline className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Wide Variety of Cars</h3>
                    <p>From budget-friendly options to luxury vehicles.
                    </p>
                </div>
                <div className="bg-slate-100 px-5 py-10 shadow-inner rounded-tr-[50px] drop-shadow-xl">
                    <IoPricetagsOutline className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Afordable Prices: </h3>
                    <p>Competitive daily rates you can count on.
                    </p>
                </div>
                <div className="bg-slate-100 px-5 py-10 shadow-inner rounded-bl-[50px] drop-shadow-xl">
                    <MdOutlineWebhook className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Easy Booking Process</h3>
                    <p>Seamlessly book your ride in just a few clicks</p>
                </div>
                <div className="bg-slate-100 px-5 py-10 shadow-inner rounded-br-[50px] drop-shadow-xl">
                    <BiSupport className="text-5xl text-primary" />
                    <h3 className="text-secondary text-2xl font-semibold font-mono">Customer Support</h3>
                    <p>24/7 assistance for all your queries.</p>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;
