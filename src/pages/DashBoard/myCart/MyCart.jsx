import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/UseCart";
import {FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  
    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,{
                    method: 'DELETE',
                    
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount>0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }


  return (
    <div>
      <Helmet>
        <title>Bistro | My cart</title>
      </Helmet>
      <div className="flex items-center font-semibold uppercase justify-evenly h-[60px]">
        <h3 className="text-3xl">Total Items:{cart.length}</h3>
        <h3 className="text-3xl">Total price:${total}</h3>
        <button className="btn btn-outline btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>
                    {index+1}
                </td>
                <td>
                  
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                   
        
                </td>
                <td>
                  {item.name}
                </td>
                <td className="text-end">
                  ${item.price}
                </td>
                
                <td>
                  <button onClick={()=>handleDelete(item)} className="bg-red-600 btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
