import React from "react";
import Verified from "./Verified";

function DeliveryInfo() {
  // Retrieve the checkout form data from localStorage
  const checkoutFormData =
    JSON.parse(localStorage.getItem("checkoutFormData")) || {};
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Extract the firstname, lastname, and email from the checkout form data
  const { first_name, last_name, state, street_address, city, phone_number } =
    checkoutFormData;

  // Placeholder for the formatPrice function - replace it with the actual implementation

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(price);
  };
  return (
    <div className="">
      <div className="delivery-info1">
        <div className="cart-head">
          <p>
            <Verified />
            &thinsp;DELIVERY ADDRESS
          </p>
        </div>
        <div className="info-name">
          <p className="">
            {" "}
            {first_name} &thinsp;
            {last_name}
          </p>
        </div>
        <p className="info-details">
          {" "}
          {state} - {city} | {street_address} | {phone_number}{" "}
        </p>
      </div>{" "}
      <br />
      <div className="delivery-info1">
        <div className="cart-head">
          <p>
            <Verified />
            &thinsp;DOOR DELIVERY
          </p>
        </div>
        <div className="type">
          <p>Door delivery</p>
          <p>Delivery scheduled <strong>in a week</strong></p>
        </div>
        <div className="shipment">
          <p>Shipment 1/1</p>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item shipment-cart-item">
              <div className="cart-wrap ">
                <div className="cart-image shipment-cart-wrap">
                  <img src={item.image} alt={item.name} /> &thinsp;
                  <h4>
                    {item.name} <span> {item.description}</span>
                  </h4>
                </div>
                <div className="shipment-cart-wrap">
                  <p>QTY: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="delivery-info1">
        <div className="cart-head">
          <p>
            <Verified />
            &thinsp;PAYMENT METHOD
          </p>
        </div>
        <div className="info-name">
          <p className="">Pay with Cards, Bank Transfer or USSD</p>
        </div>
        <p className="info-details">
          {" "}
          You will be redirected to our secure checkout page{" "}
        </p>
      </div>{" "}
    </div>
  );
}

export default DeliveryInfo;
