import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";


export const Checkout = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    // Perform checkout logic here, e.g., sending data to a server
    console.log("Checkout data:", formData);

    // Clear the cart after successful checkout
    checkout();

    // Redirect to the thank you page with the user's name as a parameter
    navigate(`/thank-you?name=${encodeURIComponent(formData.name)}`);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <h1 className="checkout-title">Complete Your Order</h1>
        <div className="checkout-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <button className="checkout-btn" onClick={handleCheckout}>
            Complete Order
          </button>
        </div>
        <div className="total-amount">
          Total: ${totalAmount.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
