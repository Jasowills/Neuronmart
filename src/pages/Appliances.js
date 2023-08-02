import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CategoryBanner from "../components/CategoryBanner";
import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import appliance from "../images/kettle1.png";
import useCart from "../components/useCart";
import Spinner from "../components/MySpinner"; // Import the Spinner component

function Appliances() {
  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, formatPrice } = useCart();
  const [loading, setLoading] = useState(true); // Add loading state and set it initially to true

  useEffect(() => {
    AOS.init();
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://indigo-indri-slip.cyclic.app/products/Appliances"
        );
        const productData = await response.json();

        // Randomize the products array
        const shuffledProducts = productData.sort(() => Math.random() - 0.5);

        setProducts(shuffledProducts);
        setLoading(false); // Set loading to false after fetching products
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // Use the addToCart function from the hook
      setSelectedProduct(null);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="body" cartItems={cartItems} setCartItems={setCartItems}>
      <MiniNav />
      <Navbar />
      <CategoryBanner name={"Appliances"} image={appliance} />
      {/* Conditionally render the spinner */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="top-deals fixed-child">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-container"
              onClick={() => handleProductClick(product)}
            >
              <div className="product-container-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h4>{product.name}</h4>
                <p>{formatPrice(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-modal-btn"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div
              className="product-container-image"
              id="selected-product-image"
            >
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="product-details" id="selected-product-details">
              <h3>{selectedProduct.name}</h3>
              <h3>{formatPrice(selectedProduct.price)}</h3>
            </div>
            <div className="star-wrap">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                  loading="lazy"
                  alt=""
                  className="product-star"
                />
              ))}
            </div>
            <div
              className="product-details description"
              id="selected-product-details"
            >
              <h3>Specs: {selectedProduct.description}</h3>
            </div>
            <div className="product-button">
              <button className="addtocart" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Appliances;
