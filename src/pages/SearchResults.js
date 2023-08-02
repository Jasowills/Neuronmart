import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MiniNav from "../components/MiniNav";
import Navbar from "../components/Navbar";
import useCart from "../components/useCart"; // Import the custom hook
import Spinner from "../components/MySpinner"; // Import the Spinner component

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("term");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state and set it initially to true

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://indigo-indri-slip.cyclic.app/products`
        );
        const data = await response.json();

        // Filter the products based on the searchTerm
        const filteredResults = data.filter((product) => {
          const productName = product.name.toLowerCase();
          const productDescription = product.description.toLowerCase();
          const productCategory = product.category.toLowerCase();
          const searchTermLower = searchTerm.toLowerCase();

          // Check if the product name, description, or category contains the searchTerm
          return (
            productName.includes(searchTermLower) ||
            productDescription.includes(searchTermLower) ||
            productCategory.includes(searchTermLower)
          );
        });

        setSearchResults(filteredResults);
        setLoading(false); // Set loading to false after fetching search results
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const { addToCart, formatPrice } = useCart();
  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // Use the addToCart function from the hook
      setSelectedProduct(null);
      setIsModalOpen(false);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <MiniNav />
      <Navbar />
      <br />
      <div className="top-deals searchdeals">
        {loading ? ( // Conditionally render the spinner
          <Spinner />
        ) : (
          // Render the search results when loading is false
          <>
            {searchResults.length === 0 ? (
              <p className="notfound">No products found, Looking for something else?</p>
            ) : (
              searchResults.map((product) => (
                <div
                  key={product.id}
                  data-aos="zoom-in"
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
              ))
            )}
          </>
        )}
      </div>
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
            </div>{" "}
            <div
              className="product-details description"
              id="selected-product-details"
            >
              <h3>Description: {selectedProduct.description}</h3>
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
    </>
  );
}

export default SearchResults;
