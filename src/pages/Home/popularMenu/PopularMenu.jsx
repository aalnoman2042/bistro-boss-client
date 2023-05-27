
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    

    return (
<section className="mb-12 ">
    <SectionTitle
    heading={'From Our Menu'}
    subHeading={'Popular Items'}
    ></SectionTitle>
        <div className="grid gap-10 md:grid-cols-2">
            {
                popular.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
      <div className="flex justify-center">
      <button className="mt-4 border-0 border-b-4 btn btn-outline">view Full Menu</button>
      </div>
</section>
    );
};

export default PopularMenu;