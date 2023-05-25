import { Helmet } from "react-helmet-async";

import Cover from "../shared/cover/Cover";
import menuImg from '../../../src/assets/menu/banner3.jpg'
import PopularMenu from "../Home/popularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;