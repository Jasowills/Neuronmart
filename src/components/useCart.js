import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useCart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    // Save the cartItems to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);

    const existingCartItem = cartItems.find((item) => item._id === product._id);

    if (existingCartItem) {
      // If the product already exists in the cart, update its quantity
      console.log("Product already in cart:", existingCartItem);
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product doesn't exist in the cart, add it with quantity set to 1
      console.log("Adding new product to cart:", product);
        toast.success("Item Added to Cart Sucessfully");
        console.log("Item added successful");

      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    console.log("Removing from cart:", productId);

    const updatedCartItems = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCartItems);
      toast.success("Item Removed from Cart");

  };

  const decreaseQuantity = (productId) => {
    console.log("Decreasing quantity of:", productId);

    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
     toast.success("Item Removed from Cart ");

  };

  const increaseQuantity = (productId) => {
    console.log("Increasing quantity of:", productId);

    const updatedCartItems = cartItems.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
     toast.success("Item Added to Cart Sucessfully");

  };

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(price);
  };

  // Calculate and set the subtotal whenever the cartItems change
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return {
    cartItems: [...cartItems], // Create a copy of the cart items to avoid modifying the original objects
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    formatPrice,
    subtotal,
  };
};

export default useCart;
