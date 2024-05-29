import React, { useState } from "react";
import banner1 from '../assets/firsttab.jpg'
import banner3 from '../assets/sectab.jpg'
import banner2 from '../assets/thirdtab.jpg'



const Delivery = () => {
  const [activeTab, setActiveTab] = useState("fast");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="delivery-container">
      <h2 className="delivery-heading">Quick and Secure Delivery</h2>
      <p className="delivery-text">
        Experience the unparalleled joy of receiving your exquisite jewelry pieces swiftly and securely
        with our dedicated delivery service. From the moment you place your order to the moment it arrives
        at your doorstep, we ensure the utmost care and attention to detail to guarantee a seamless and
        worry-free delivery experience. Revel in the anticipation of your precious treasures
        arriving promptly, ready to adorn your collection with elegance and sophistication.
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
            <img src={banner1} alt="Fast Delivery" />
            <h3 className="delivery-option-heading">Fast Delivery</h3>
            <p className="delivery-option-text">
              Get your order delivered quickly and efficiently with our expedited
              shipping options.
            </p>
          </div>
        )}
        {activeTab === "secure" && (
          <div className="delivery-option">
            <img src={banner2} alt="Secure Delivery" />
            <h3 className="delivery-option-heading">Secure Delivery</h3>
            <p className="delivery-option-text">
              Rest assured that your package will be delivered securely and
              protected throughout the shipping process.
            </p>
          </div>
        )}
        {activeTab === "track" && (
          <div className="delivery-option">
            <img src={banner3} alt="Track Your Order" />
            <h3 className="delivery-option-heading">Track Your Order</h3>
            <p className="delivery-option-text">
              Stay updated on the delivery status of your exquisite jewelry pieces with our real-time tracking feature.
              Whether it's a precious gemstone ring or an elegant necklace, track your order seamlessly
              and anticipate its arrival to adorn your collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Delivery;
