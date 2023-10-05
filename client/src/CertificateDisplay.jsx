import React from 'react';
import HashDisplay from './HashDisplay';

// Functional component responsible for displaying the certificate hash.
const CertificateDisplay = ({ returnHash, submitClicked }) => {
  return (
    // Render the component only if the submit button is clicked and there is a valid returnHash.
    <>
      {submitClicked && returnHash !== '' && (
        // Container for displaying the hash using the HashDisplay component.
        <div className="hash-display-container">
          {/* Display the hash using the HashDisplay component with appropriate label and value. */}
          <HashDisplay label="Hash of Certificate" value={returnHash} />
        </div>
      )}
    </>
  );
};

export default CertificateDisplay;
