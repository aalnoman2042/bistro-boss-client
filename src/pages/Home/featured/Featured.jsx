import SectionTitle from "../../../components/SectionTitle";
import feImg from '../../../assets/home/featured.jpg'

import './featured.css'


const Featured = () => {
    return (
      <section className="pt-8 my-20 text-white bg-fixed featured-item">
           <SectionTitle
    heading={'Featured Items'}
    subHeading={'Cheack it Out'}
    ></SectionTitle>
    <div className="items-center justify-center pt-12 pb-20 px-36 md:flex bg-slate-500 bg-opacity-40">
        <div>
            <img src={feImg} alt="" />
        </div>
        <div className="md:ml-10">
            <p>Aug 20,2029</p>
            <p className="uppercase">where i can get some</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptates eaque dicta perspiciatis sint libero dolorum consequuntur porro molestias. Non nisi, accusantium maiores reprehenderit ab sequi rerum est exercitationem id, tempora optio porro accusamus asperiores nostrum. Provident temporibus magnam cupiditate, quas ullam nostrum illum tenetur, excepturi corporis suscipit sint animi?</p>
            <button className="mt-4 border-0 border-b-4 btn btn-outline">Order Now</button>
        </div>
    </div>
      </section>
    );
};

export default Featured;