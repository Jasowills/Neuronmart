import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useCart from "./useCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./MySpinner"; // Import the Spinner component

const TopDeals = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state and set it initially to true

  useEffect(() => {
    AOS.init();
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://indigo-indri-slip.cyclic.app/products"
        );
        const allProducts = await response.json();
        const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 8);
        setProducts(selectedProducts);
        setLoading(false); // Set loading to false after fetching products
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchProducts();
  }, []);

  // Use the custom cart hook
  const { addToCart, formatPrice } = useCart();

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
    <>
      <h3 className="today">Today's Best Deals For You</h3>

      {/* Conditionally render the spinner */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="top-deals">
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
              &nbsp;
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                  loading="lazy"
                  alt=""
                  className="product-star"
                />
              ))}
            </div>{" "}
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
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default TopDeals;
