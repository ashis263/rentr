import Banner from "../../components/Banner/Banner";
import RecentListing from "../../components/RecentListing/RecentListing";
import WhyChoose from "../../components/WhyChoose/WhyChoose";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <RecentListing></RecentListing>
        </div>
    );
}

export default Home;
