import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MiniNav from "../components/MiniNav";
import Footer from "../components/Footer";
import useCart from "../components/useCart";
import { Link } from "react-router-dom";
import Spinner from "../components/MySpinner"; // Import the Spinner component
import "../styles/Mediaqueries.css"
function Cart() {
  const {
    cartItems,
    subtotal,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    formatPrice,
  } = useCart();
  const [loading, setLoading] = useState(true); // Add loading state and set it initially to true

  useEffect(() => {
    setLoading(false); // Set loading to false after fetching cart items
  }, []);

  return (
    <div className="body">
      <MiniNav />
      <Navbar />
      <div className="cart-summary">
        <div className="cart-container">
          <div className="cart-head">
            <h3>Cart</h3>
          </div>
          <div className="cart-items">
            {/* Conditionally render the spinner */}
            {loading ? (
              <Spinner />
            ) : (
              <>
                {/* Render cart items */}
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-wrap">
                      <div className="cart-image">
                        <img src={item.image} alt={item.name} /> &thinsp;
                        <h4>
                          {item.name} <span> {item.description}</span>
                        </h4>
                      </div>
                      <div className="">
                        <p>{formatPrice(item.price)}</p>
                      </div>
                    </div>
                    <div className="buttons">
                      <div className="remove-button">
                        <button onClick={() => removeFromCart(item._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M5.5 6.5L5.5 18.5C5.5 19.3284 6.17157 20 7 20H17C17.8284 20 18.5 19.3284 18.5 18.5L18.5 6.5" />
                            <path d="M9 6V4C9 3.46957 9.21071 2.96086 9.58579 2.58579C9.96086 2.21071 10.4696 2 11 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V6M3 6L21 6M10 11V17M14 11V17" />
                          </svg>{" "}
                          &thinsp; REMOVE
                        </button>
                      </div>
                      <div className="quantity-container">
                        <button
                          onClick={() => decreaseQuantity(item._id)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item._id)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>{" "}
                    </div>
                    <hr className="line" />
                  </div>
                ))}
                {/* Display a message if the cart is empty */}
                {cartItems.length === 0 && <p>Your cart is empty.</p>}
              </>
            )}
          </div>
        </div>
        <div className="order-summary-container">
          <div className="order-summary">
            <div className="cart-head">
              <p>CART SUMMARY</p>
            </div>
            <div className="subtotal">
              <p>Subtotal</p>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="checkout">
              <Link className="link" to="/checkout">
                <button>CHECKOUT</button>
              </Link>
            </div>
          </div>
          <br />
          <div className="refunds">
            <div className="cart-head">
              <p className="returns">Returns are easy</p>
            </div>
            <p>
              To know more about our return and refund policy, please contact:
              +2349134551849
            </p>
          </div>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default Cart;
