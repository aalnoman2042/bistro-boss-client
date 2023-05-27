import FoodCard from "../../../components/foodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
    {
      items.map(item => <FoodCard
      key={item.id}
      item={item}
      >

      </FoodCard>)
    }
    </div>
    );
};

export default OrderTab;