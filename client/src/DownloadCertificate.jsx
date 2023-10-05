import React, { useState, useEffect } from 'react';
import { SHA256 } from 'crypto-js';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { loadBlockchainData } from './blockchain';
import { fetchPdfWithWatermark } from './pdfUtils';
import { handleSubmit, resetPage } from './formUtils';
import CertificateDisplay from './CertificateDisplay';

// Functional component representing the main download certificate page.
const DownloadCertificate = () => {
  // State variables for managing user input, blockchain data, loading status, PDF URL, and form submission.
  const [email, setEmail] = useState('');
  const [returnHash, setReturnHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);

  // Use effect to initialize the blockchain data when the component mounts.
  useEffect(() => {
    const initBlockchain = async () => {
      try {
        // Load blockchain data and update state variables.
        const { web3, contract } = await loadBlockchainData();
        setWeb3(web3);
        setContract(contract);
      } catch (error) {
        console.error('Error initializing blockchain:', error);
      }
    };

    initBlockchain();
  }, []);

  // Use effect to fetch PDF and display the hash when the user submits the form.
  useEffect(() => {
    const fetchPdf = async () => {
      try {
        setLoading(true);

        // Check the hash on the blockchain for the provided email.
        if (email !== '') {
          const result = await contract.methods.checkHash(SHA256(email).toString()).call();
          setReturnHash(result);

          // If a valid hash is found, fetch the PDF with watermark.
          if (result !== '0x0000000000000000000000000000000000000000000000000000000000000000') {
            const modifiedPdfUrl = await fetchPdfWithWatermark(returnHash);
            setPdfUrl(modifiedPdfUrl);
          }
        }
      } catch (error) {
        console.error('Error checking hash:', error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch PDF if the form is submitted and blockchain data and email are available.
    if (submitClicked && contract && web3 && email !== '') {
      fetchPdf();
    }
  }, [email, contract, web3, returnHash, submitClicked]);

  // Render the main content of the DownloadCertificate component.
  return (
    <div className="app-container">
      {/* Display the heading for the page. */}
      <h2 className="heading">Enter Registered Email to Download Certificate</h2>

      {/* Form for entering the email and submitting the request. */}
      <Form onSubmit={(event) => handleSubmit(event, setSubmitClicked)} className="form-container">
        <Row className="align-items-center">
          <Col xs={3}>
            <Form.Label>Email</Form.Label>
          </Col>
          <Col xs={6}>
            {/* Input field for entering the email. */}
            <Form.Control type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="form-input" onClick={() => resetPage(setEmail, setReturnHash, setLoading, setPdfUrl, setSubmitClicked)} />
          </Col>
          <Col xs={3}>
            {/* Submit button for submitting the form. */}
            <Button variant="primary" type="submit" className="form-button">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Display the certificate hash using the CertificateDisplay component. */}
      <CertificateDisplay returnHash={returnHash} submitClicked={submitClicked} />

      {/* Display a message if the email is not present and the form has been submitted. */}
      {!loading && submitClicked && returnHash === '' && email !== '' && (
        <div className="message-container">
          <p className="message">Email Address not Present</p>
        </div>
      )}

      {/* Display a loading message while the PDF is being loaded. */}
      {loading ? (
        <p className="loading">Loading PDF...</p>
      ) : (
        <>
          {/* Display the embedded PDF if available. */}
          {submitClicked && pdfUrl && (
            <div className="pdf-container">
              <embed src={pdfUrl} width="500" height="400" type="application/pdf" className="pdf-embed" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DownloadCertificate;
