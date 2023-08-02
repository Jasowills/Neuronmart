import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/App.css";
import "../styles/Mediaqueries.css"

const CheckoutForm = ({ onProceed }) => {
  const initialState = {
    first_name: "",
    last_name: "",
    phone_number: "",
    state: "",
    city: "",
    street_address: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Save the form data to localStorage
    localStorage.setItem("checkoutFormData", JSON.stringify(formData));
    toast.success("Information Received");
    onProceed(); // Notify the parent component that the "Proceed" button is clicked
    // You can also redirect the user to the next page here if needed
  };

  return (
    <form className="checkout-form" onSubmit={handleFormSubmit}>
      <div className="cart-head">
        <p>1. &thinsp;&thinsp;BILLING & SHIPPING</p>
      </div>
      <div className="names">
        <label className="floating-label">
          First Name <span>*</span>
          <input
            type="text"
            placeholder=" "
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />
        </label>&nbsp;
        <label className="floating-label">
          Last Name &thinsp; <span>*</span>
          <input
            type="text"
            placeholder=" "
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div className="phone-number">
        <label className="floating-label">
          Phone Number &thinsp;<span>*</span>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div className="phone-number">
        <label className="floating-label">
          Your State &thinsp;<span>*</span>
          <input
            type="text"
            name="state"
            list="stateOptions"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
          <datalist id="stateOptions">
            <option value="Lagos" />
            <option value="Abuja" />
            <option value="Jos" />
            <option value="Ibadan" />
            <option value="Akure" /> <option value="Benin City" />
            <option value="Sokoto" />
            <option value="Abeokuta" /> <option value="Enugu" />
            <option value="Calabar" /> <option value="Owerri" />
            <option value="Uyo" />
            <option value="Onitsha" />
            <option value="Makurdi" />
            <option value="Osogbo" />
            <option value="Port Harcout" />
            <option value="Kano" />
          </datalist>
        </label>
      </div>
      <div className="phone-number">
        <label className="floating-label">
          Local Government Area &thinsp;<span>*</span>
          <input
            type="text"
            name="city"
            list="cityOptions"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <datalist id="cityOptions">
            <option value="Surulere" />
            <option value="Alimosho" />
            <option value="Ikeja" />
            <option value="Ikorodu" />
            <option value="Lagos Mainland" /> <option value="Epe" />
            <option value="Mushin" />
            <option value="Ibeju-Lekki" /> <option value="Kosofe" />
            <option value="Calabar" /> <option value="Eti-osa" />
            <option value="Agege" />
            <option value="Agbada" />
            <option value="Shagamu" />
            <option value="Ifo" />
            <option value="Abaji" />
            <option value="Shomolu" />{" "}
          </datalist>
        </label>
      </div>
      <div className="phone-number">
        <label className="floating-label">
          Street Address &thinsp;<span>*</span>
          <input
            type="text"
            name="street_address"
            value={formData.street_address}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div className="save-button">
        <button className="save" type="submit">
          Proceed
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
