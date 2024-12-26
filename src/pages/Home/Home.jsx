import Banner from "../../components/Banner/Banner";
import RecentListing from "../../components/RecentListing/RecentListing";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <RecentListing></RecentListing>
            <Testimonials></Testimonials>
            <SpecialOffers></SpecialOffers>
        </div>
    );
}

export default Home;
