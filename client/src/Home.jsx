import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Decentralized Certification dApp</h1>
      <div className="home-content">
        <p>
          The Decentralized Certification dApp is a blockchain-powered application designed for secure certificate management.
          Leveraging Ethereum smart contracts and React for the frontend, it offers users the ability to securely download
          certificates with added PDF watermarking for enhanced security. The application provides a responsive and intuitive
          user interface for seamless interaction.
        </p>
        <div className="home-list">
          <ul>
            <li>Blockchain-powered application for secure certificate management.</li>
            <li>Utilizes Ethereum smart contracts for enhanced security.</li>
            <li>Allows users to securely download certificates with PDF watermarking.</li>
            <li>Responsive and intuitive user interface for seamless interaction.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
