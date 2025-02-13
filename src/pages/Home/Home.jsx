import Banner from "../../components/Banner/Banner";
import PopularCars from "../../components/PopularCars/PopularCars";
import RecentListing from "../../components/RecentListing/RecentListing";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    return (
        <div className="animate__animated animate__fadeIn ">
            <HelmetProvider>
                <Helmet>
                    <title>Rentr | Home</title>
                </Helmet>
                <Banner></Banner>
                <WhyChoose></WhyChoose>
                <PopularCars></PopularCars>
                <RecentListing></RecentListing>
                <SpecialOffers></SpecialOffers>
                <Testimonials></Testimonials>
            </HelmetProvider>
        </div>
    );
}

export default Home;
