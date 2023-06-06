import SectionTitle from "../../../components/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


    const img_hosting_token = import.meta.env.VITE_Image_upload_Token

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit , reset} = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
       const formData = new FormData()
       formData.append('image', data.image[0])
        

       fetch(image_hosting_url,{
        method: 'POST',
        body: formData
       })
       .then(res => res.json())
       .then(imgResponse =>{
        console.log(imgResponse);
        if(imgResponse.success){
            const imgUrl = imgResponse.data.display_url
            const {name, price, category, recipe} = data;
           const  newItem = {name, price:parseFloat(price), category, recipe, image: imgUrl}
            console.log(newItem);
            axiosSecure.post(`/menu` , newItem)
            .then(data => {
                console.log("after posting new menu item", data.data);
                if(data.data.insertedId){
                    reset()
                    Swal.fire('Item added')  
                }
            })
        }
       })
    };

    console.log(img_hosting_token);
  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="Whatss new"
        heading="Add An Item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full form-control">
          <label className="label">
            <span className="font-semibold label-text">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            {...register("name", {required: true, maxLength: 120})}
            className="w-full input input-bordered"
          />
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select 
          defaultValue="Pick One"
          {...register("category", { required: true })}
          className="select select-bordered">
            <option disabled >
              Pick One
            </option>
            <option>pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>dessert</option>
            <option>Drinks</option>
            <option>Dessi</option>
          </select>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="w-full input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
            {...register("recipe", { required: true })}
              className="h-24 textarea textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Item Image</span>
              
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full file-input file-input-bordered"
            />
       
          </div>
        </div>
      
        <input className="mt-4 btn btn-xs" type="submit" value="Add Item" />
       
      </form>
    </div>
  );
};

export default AddItem;
