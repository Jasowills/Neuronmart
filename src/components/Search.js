import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

const searchSuggestions = [];

function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Function to fetch the search results from the API
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

        setSearchResults(filteredResults); // Update the searchResults state with the filtered data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Use a delay to reduce the number of API requests while typing
    const delay = setTimeout(() => {
      fetchSearchResults();
    }, 300); // Adjust the delay time as needed

    // Cleanup the delay on component unmount or when searchTerm changes
    return () => clearTimeout(delay);
  }, [searchTerm]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Use navigate to go to another page and pass the search term as a parameter
    navigate(`/search-results?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form className="form" onSubmit={handleSearch}>
      <button type="submit">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <input
        className="input"
        placeholder="Search Products, Brands and Categories"
        required
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="reset"
        type="reset"
        onClick={() => setSearchResults([])}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      {showSuggestions && (
        <ul className="suggestion-list">
          {searchSuggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </form>
  );
}

export default Search;
