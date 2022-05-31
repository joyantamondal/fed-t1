
import Ads from "../Ads/Ads";
import DailyActivity from "../DailyActivity/DailyActivity";
import Footer from "../Footer/Footer";
import HomeCards from "../HomeCards/HomeCards";
import MainBanner from "../MainBanner/MainBanner";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import TopNav from "../TopNav/TopNav";
import './Home.css';

const Home = () => {
    return (
    //    navbar start 
    <div className="container">
        <TopNav/>
        <NavBar/>
        <MainBanner/>
        <HomeCards/>
        <Ads/>
        <DailyActivity/>
        <Slider/>
        <Footer/>
    </div>
// navbar end 
    );
};

export default Home;