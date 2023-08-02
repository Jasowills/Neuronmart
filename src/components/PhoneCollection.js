import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useCart from "../components/useCart";
import Spinner from "./MySpinner"; // Import the Spinner component

function PhoneCollection() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state and set it initially to true

  // Use the custom cart hook
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init();
    const fetchProducts = async () => {
      try {
        const productIds = [
          "64b155d18b9260aa5f4e8d0f",
          "64b158a7fbe28928d2ac9808",
          "64b159b9fbe28928d2ac980e",
          "64b15ba20bc2e1df48d09689",
        ];

        const productPromises = productIds.map(async (id) => {
          const response = await fetch(
            `https://indigo-indri-slip.cyclic.app/products/product/${id}`
          );
          const productData = await response.json();

          return productData;
        });

        const fetchedProducts = await Promise.all(productPromises);
        setProducts(fetchedProducts);
        setLoading(false); // Set loading to false after fetching products
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchProducts();
  }, []);

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(price);
  };
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
    <div className="electronics-collection">
      <div className="collection-head">
        <div></div>
        <h3>Top Phone Deals</h3>
        <div></div>
        <div></div>
        <Link className="link" to="/phones&tablets">
          <p>See All</p>
        </Link>
        <div></div>
      </div>
      <br />
      {/* Conditionally render the spinner */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="top-deals">
          {products.map((product) => (
            <div
              key={product.id}
              // data-aos="zoom-in"
              className="product-container"
              onClick={() => handleProductClick(product)}
            >
              <div className="product-container-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h4>
                  {product.name} <br />
                </h4>
                <span className="detailsp">{formatPrice(product.price)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <br />
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhoneCollection;
