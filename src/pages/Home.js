import ApplianceCollection from "../components/AppliancesCollection";
import Banner from "../components/Banner";
import ElectronicCollection from "../components/ElectronicCollection";
import Footer from "../components/Footer";
import GamingCollection from "../components/GamingCollection";
import HealthCollection from "../components/HealthCollection";
import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import PhoneCollection from "../components/PhoneCollection";
import TopDeals from "../components/TopDeals";
import React, { useState } from "react";
import MobileNavbar from "../components/MobileMenu";

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const isMobile = window.innerWidth <= 876; // Adjust the width to define when to switch to mobileNavbar

  return (
    <div className="body">
      <MiniNav cartItems={cartItems} setCartItems={setCartItems} />
      {isMobile ? <MobileNavbar /> : <Navbar />}{" "}
      <Banner cartItems={cartItems} setCartItems={setCartItems} />
      <TopDeals cartItems={cartItems} setCartItems={setCartItems} />{" "}
      <ElectronicCollection cartItems={cartItems} setCartItems={setCartItems} />
      <PhoneCollection cartItems={cartItems} setCartItems={setCartItems} />
      <Offer cartItems={cartItems} setCartItems={setCartItems} />
      <ApplianceCollection cartItems={cartItems} setCartItems={setCartItems} />
      <HealthCollection cartItems={cartItems} setCartItems={setCartItems} />
      <GamingCollection cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default Home;
