import FoodCard from "../../../components/foodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";


const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    
    return (
        <div >
  
     <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
            {
      items.map(item => <FoodCard
      key={item.id}
      item={item}
      >

      </FoodCard>)
    }
            </div>
     
        </SwiperSlide>
     
      </Swiper>
    </div>
    );
};

export default OrderTab;