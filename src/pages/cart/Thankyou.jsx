import React from "react";
import { useLocation } from "react-router-dom";


const ThankYou = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get("name");

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1 className="thank-you-title">Thank You, {userName}!</h1>
        <p>Your order will arrive in 2 to 3 days.</p>
      </div>
    </div>
  );
};

export default ThankYou;
