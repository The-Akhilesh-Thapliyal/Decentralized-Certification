
<h1 align="center">Decentralized Certification</h1>

<p align="center">
<img src="http://drive.google.com/uc?export=view&id=1UhzpQUs8-5PbhJuo91U6CFHPQ4nrQSYk">
</p>


Decentralized Certification is a decentralized application (dApp) designed for secure and efficient certificate management. Leveraging Ethereum smart contracts and React for the frontend, this application empowers users to securely download certificates while incorporating PDF watermarking for enhanced security.

## Components

- **Home**
    
![Home](http://drive.google.com/uc?export=view&id=1iKj85jk2QtMjY0i1o2qtLDldavh6cr_j)

The Home page provides an introduction to the CertificateChain dApp. It outlines the project's purpose, features, and benefits. Users can learn about the application's capabilities and its role in secure certificate management.


- **Download Certificate**
![Download Certificate](http://drive.google.com/uc?export=view&id=1Ax02N39IwUzKdpsa-4PEgA3vv-R_g_bY)
    
The Download Certificate page is where users can interact with the dApp to securely download certificates. Users are prompted to enter their registered email, and the application verifies the blockchain for the corresponding certificate. If found, the user can download the certificate with added PDF watermarking.- **


- **Contact Us**

![Contact Us](http://drive.google.com/uc?export=view&id=1MWKw4k34Thi2jgSXjg4XJWxiN8FAKMtD)
    

## Features

- **Blockchain Integration**: Utilizes the Ethereum blockchain for secure and transparent certificate management.
- **PDF Watermarking**: Adds a unique watermark to downloaded PDF certificates for heightened security.
- **Responsive UI**: Delivers an intuitive and responsive user interface for seamless interaction.
## Project Structure

The project follows a structured organization:

- **`src/`**: Contains the React frontend source code.
  - **`jsx/`**: Houses React components integral to the application.
  - **`contracts/`**: Holds Ethereum smart contract JSON files.
  - **`css/`**: Custom styles designed for the application.
  - **`utils/`**: Utility functions for blockchain interaction, PDF manipulation, and form handling.
- **`public/`**: Includes static assets and serves as the HTML entry point for the React application.
- **`package.json`**: Node.js project configuration file.
- **`README.md`**: Comprehensive project documentation.## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js and npm
- Truffle (for local Ethereum development)
## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/The-Akhilesh-Thapliyal/Decentralized-Certification.git
   cd Decentralized-Certification

2. **Install dependencies:**
   ```bash
   npm install

3. **Migrate smart contract:**
   ```bash
   cd truffle
   truffle compile
   truffle migrate

4. **Start the React development server:**
   ```bash
   cd client
   npm start
   

## 🚀 About Me
Hello, I'm Akhilesh Thapliyal! 👋

## Contact

- **Email:** akhileshthapliyal20@gmail.com
- **LinkedIn:** www.linkedin.com/in/akhilesh-thapliyal
- **GitHub:** https://github.com/The-Akhilesh-Thapliyal
