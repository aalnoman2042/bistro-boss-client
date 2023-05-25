import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonila/Testimonials";

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
         <Banner></Banner>
         <Category></Category>
         <PopularMenu></PopularMenu>
         <Featured></Featured>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;