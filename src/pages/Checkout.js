import React, { useState, useEffect } from "react";
import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";
import MiniNav from "../components/MiniNav";
import DeliveryInfo from "../components/DeliveryInfo";
import Navbar from "../components/Navbar";
import useCart from "../components/useCart";
import { Link } from "react-router-dom";
import Spinner from "../components/MySpinner"; // Import the Spinner component

function Checkout() {
  const [proceedClicked, setProceedClicked] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state and set it initially to true

  // Check if the checkout item exists in the local storage
  const checkoutItemExists = localStorage.getItem("checkoutFormData") !== null;
  const {
    cartItems,
    subtotal,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    formatPrice,
  } = useCart();

  const totalprice = () => {
    return subtotal + 1000;
  };

  const handleProceed = () => {
    setProceedClicked(true);
  };

  useEffect(() => {
    setLoading(false); // Set loading to false after fetching cart items
  }, []);

  return (
    <div className="body">
      <MiniNav />
      <Navbar />
      <div className="checkout-info">
        <div className="info">
          {loading ? ( // Conditionally rendodyer the spinner
            <Spinner />
          ) : (
            // Render the checkout form or delivery info based on the state
            <>
              {checkoutItemExists || proceedClicked ? (
                <DeliveryInfo />
              ) : (
                <CheckoutForm onProceed={handleProceed} />
              )}
            </>
          )}
        </div>
        <div className="order">
          <div className="cart-head">
            <p>ORDER SUMMARY</p>
          </div>
          <div className="subtotal">
            <p>Item's total</p>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="subtotal">
            <p>Delivery Fee</p>
            <span>₦ 1,000</span>
          </div>
          <hr className="hr-" />
          <div className="subtotal">
            <p>Total</p>
            <span>{formatPrice(totalprice())}</span>
          </div>
          <hr className="hr-" />
          <div className="checkout">
            <Link className="link" to="/order">
              {" "}
              <button>CONFIRM ORDER</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
