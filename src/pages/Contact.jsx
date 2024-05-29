import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-info">
        We would love to hear from you! If you have any questions, feedback, or
        inquiries, please feel free to reach out to us.
      </p>
      <div className="contact-details">
        <p>
          <strong>Address:</strong> 1234 Street Name, City, State, 56789
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> contact@example.com
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
      <h3 className="contact-subheading">Send us a message</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
