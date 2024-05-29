import React, { useState } from "react";
import banner from '../assets/bluebg.jpg'

const Delivery = () => {
  const [activeTab, setActiveTab] = useState("fast");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="delivery-container">
      <h2 className="delivery-heading">Quick and Secure Delivery</h2>
      <p className="delivery-text">
        At Nike Shop, we provide rapid and secure delivery services to ensure
        you get your items swiftly and safely.
      </p>
      <div className="delivery-tabs">
        <button
          className={`delivery-tab ${activeTab === "fast" && "active"}`}
          onClick={() => handleTabChange("fast")}
        >
          Fast Delivery
        </button>
        <button
          className={`delivery-tab ${activeTab === "secure" && "active"}`}
          onClick={() => handleTabChange("secure")}
        >
          Secure Delivery
        </button>
        <button
          className={`delivery-tab ${activeTab === "track" && "active"}`}
          onClick={() => handleTabChange("track")}
        >
          Track Your Order
        </button>
      </div>
      <div className="delivery-info">
        {activeTab === "fast" && (
          <div className="delivery-option">
            <img src={banner} alt="Fast Delivery" />
            <h3 className="delivery-option-heading">Fast Delivery</h3>
            <p className="delivery-option-text">
              Get your order delivered quickly and efficiently with our expedited
              shipping options.
            </p>
          </div>
        )}
        {activeTab === "secure" && (
          <div className="delivery-option">
            <img src={banner} alt="Secure Delivery" />
            <h3 className="delivery-option-heading">Secure Delivery</h3>
            <p className="delivery-option-text">
              Rest assured that your package will be delivered securely and
              protected throughout the shipping process.
            </p>
          </div>
        )}
        {activeTab === "track" && (
          <div className="delivery-option">
            <img src={banner} alt="Track Your Order" />
            <h3 className="delivery-option-heading">Track Your Order</h3>
            <p className="delivery-option-text">
              Easily track your order in real-time and stay updated on its
              delivery status.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Delivery;
