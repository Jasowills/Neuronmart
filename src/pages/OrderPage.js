import React from "react";
import { Elements } from "@stripe/react-stripe-js"; // Import Elements
import { loadStripe } from "@stripe/stripe-js"; // Import loadStripe
import Navbar from "../components/Navbar";
import Order from "../components/Order";
import MiniNav from "../components/MiniNav";
import Footer from "../components/Footer";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY"); // Replace with your Stripe publishable key

function OrderPage() {
  return (
    <div className="body">
    <MiniNav/>
      <Navbar />
      <Elements stripe={stripePromise}>
        {" "}
        {/* Wrap with Elements provider */}
        <Order />
      </Elements>
      <Footer/>
    </div>
  );
}

export default OrderPage;
