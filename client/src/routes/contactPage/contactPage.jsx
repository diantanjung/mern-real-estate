import { useState } from "react";
import "./contactPage.scss";

function ContactPage() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      workEmail: "",
      message: "",
      country: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form data submitted:", formData);
      // Tambahkan logika pengiriman data ke server di sini
      alert("Formulir berhasil dikirim!");
    };
  return (
    <div className="contactPage">
      <div className="textContainer">
        <div className="wrapper">
          <h2>Contact Us</h2>
          <h1 className="title">Get in touch with sales</h1>
          <p>
            We’ll help you find the right solutions and pricing for your
            business. Fill out the form below and our team will get back to you
            shortly.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group-row">
              <div className="input-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="workEmail">Work email</label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="Work email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="6"
              />
            </div>

            <button type="submit" className="submit-button">
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/meet-sales.png" alt="" />
      </div>
    </div>
  );
}

export default ContactPage;
