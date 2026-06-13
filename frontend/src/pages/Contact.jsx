import React, { useState } from "react";
import { saveContactForm } from "../axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveContactForm(formData);

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Contact;