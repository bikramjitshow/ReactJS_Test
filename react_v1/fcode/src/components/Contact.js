import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <form className="contact-form">

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            className="form-control"
            id="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
