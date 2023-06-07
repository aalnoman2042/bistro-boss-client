import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/USeAuth";

const CheckOut = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useAuth()
    const [axiosSecure] =useAxiosSecure()
    const [cardError,  setCardError] = useState("")
    const [clientSecret, setClientSecret]= useState("")


    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{
            price
        })
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[])

    

        const handleSubmit = async(event) =>{
            event.preventDefault()
            if(!stripe || ! elements){
                return
            }

            const card = elements.getElement(CardElement)
            if(card === null){
                return
            }

            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card
            })
            if(error){
                console.log(error);
                setCardError(error.message)
            }
            else{
                setCardError('')
                console.log("payment meythod", paymentMethod);
            }
            const {paymentIntent, error: confirError} = await stripe.confirmCardPayment(clientSecret,{
                payment_method: {
                    card: card,
                    billing_details:{
                        email:user?.email || "anonymos",
                        name: user?.dispplayName || "anonymous"
                    }
                }
            })
            if(confirError){
                console.log(confirError);
            }
            
        }


    return (
     <>
        <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="mt-12 btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError&& <p className="ml-8 text-red-600">{cardError}</p>
    }
     </>
    );
};

export default CheckOut;