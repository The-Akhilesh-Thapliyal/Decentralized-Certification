import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      {/* Email contact item */}
      <div className="contact-item">
        <label>Email:</label>
        <p>akhileshthapliyal20@gmail.com</p>
      </div>
      {/* GitHub profile contact item */}
      <div className="contact-item">
        <label>GitHub Profile:</label>
        {/* Using anchor tag to create a clickable link to the GitHub profile */}
        <p><a href="https://github.com/The-Akhilesh-Thapliyal" target="_blank" rel="noopener noreferrer">The-Akhilesh-Thapliyal</a></p>
      </div>
      {/* LinkedIn profile contact item */}
      <div className="contact-item">
        <label>LinkedIn Profile:</label>
        {/* Using anchor tag to create a clickable link to the LinkedIn profile */}
        <p><a href="https://www.linkedin.com/in/akhilesh-thapliyal" target="_blank" rel="noopener noreferrer">Akhilesh Thapliyal</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
