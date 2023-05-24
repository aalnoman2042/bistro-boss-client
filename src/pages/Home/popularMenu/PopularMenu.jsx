import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
    const [menu , setMenu] = useState([])
   useEffect(()=>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data =>{
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)
    } )
   },[])
    return (
<section className="mb-12 ">
    <SectionTitle
    heading={'From Our Menu'}
    subHeading={'Popular Items'}
    ></SectionTitle>
        <div className="grid gap-10 md:grid-cols-2">
            {
                menu.map(item=> <MenuItem
                key={item.id}
                item={item}
                ></MenuItem>)
            }
        </div>
</section>
    );
};

export default PopularMenu;