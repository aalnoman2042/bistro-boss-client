import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/UseCart";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Pk);

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <SectionTitle
        subHeading="please process"
        heading="payment"
      ></SectionTitle>
      <h2 className="text-3xl">taka o taka</h2>
      <Elements stripe={stripePromise}>
        <CheckOut price={price} cart={cart}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
