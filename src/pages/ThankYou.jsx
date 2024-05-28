import React, { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://adorniya.netlify.app/"; // Redirect URL after 5 seconds
    }, 5000);
    window.scrollTo(0, 0); // Scroll to the top of the page on component load
  }, []);

  return (
    <div className="thank-you">
      <h1 className="thank-you-heading">Thank you for your order!</h1>
      <p className="thank-you-message">
        Your order has been received. Our specialists will contact you shortly
        to confirm it.
      </p>
    </div>
  );
}
