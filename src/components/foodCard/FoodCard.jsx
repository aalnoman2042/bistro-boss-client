const FoodCard = ({item}) => {
    const {image, recipe, name, price} = item
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 text-white bg-slate-900">${price}</p>
      <div className="flex flex-col items-center card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="justify-end card-actions">
          <button className="mt-4 border-b-4 border-orange-400 btn btn-outline bg-slate-100">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
