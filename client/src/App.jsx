import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import DownloadCertificate from './DownloadCertificate';
import ContactUs from './ContactUs';

// The main App component that defines the overall structure of the application.
const App = () => {
  return (
    // Set up the React Router using BrowserRouter as the router component.
    <Router>
      {/* The top-level container for the entire application. */}
      <div>
        {/* Include the navigation bar component at the top of the application. */}
        <NavigationBar />

        {/* Define the routes for different pages using the Routes component. */}
        <Routes>
          {/* Route for the Home page. */}
          <Route path="/" element={<Home />} />

          {/* Route for the DownloadCertificate page. */}
          <Route path="/download-certificate" element={<DownloadCertificate />} />

          {/* Route for the ContactUs page. */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;