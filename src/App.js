import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./redux/store"; // Import the Redux store
import Appliances from "./pages/Appliances";
import AuthComponent from "./pages/Auth";
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import Gaming from "./pages/Gaming";
import Healthbeauty from "./pages/Health&beauty";
import Home from "./pages/Home";
import Phones from "./pages/Phones&Tablets";
import Signup from "./pages/Signup";
import SearchResults from "./pages/SearchResults";
import Checkout from "./pages/Checkout";
import Order from "./components/Order"; // Import the Order component
import { Elements } from "@stripe/react-stripe-js"; // Import Elements
import { loadStripe } from "@stripe/stripe-js"; // Import loadStripe
import OrderPage from "./pages/OrderPage";
import Navbar from "./components/Navbar"; // Import the Navbar component
import MobileNavbar from "./components/MobileMenu"; // Import the MobileNavbar component

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY"); // Replace with your Stripe publishable key

function App() {
  // Determine if the screen width is a phone width (<= 768 pixels)
  const isMobile = window.innerWidth <= 768; // Adjust the width to define when to switch to mobileNavbar

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/health&beauty" element={<Healthbeauty />} />
            <Route path="/phones&tablets" element={<Phones />} />
            <Route path="/auth" element={<AuthComponent />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route
              element={
                <Elements stripe={stripePromise}>
                  <Order />
                </Elements>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
