import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/UseCart";

const FoodCard = ({item}) => {
    const {image, recipe, name, price, _id} = item
   
      const {user} = useContext(AuthContext)
      const navigate = useNavigate()
      const location = useLocation()
      const [,refetch] = useCart()
      

    const handleAddToCart = item =>{
      console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, image, price, email: user?.email}
        fetch(`http://localhost:5000/carts`,{
          method: 'POST',
          headers: { 
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
              refetch(); // refetch cart to update the number of items in the cart
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Food added on the cart.',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
      })
      }
      else{
        Swal.fire({
            title: 'Please login to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
    }
            
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
          <button onClick={()=>handleAddToCart(item)} className="mt-4 border-b-4 border-orange-400 btn btn-outline bg-slate-100">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
