import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

// Functional component representing a hash display with copy-to-clipboard functionality.
const HashDisplay = ({ label, value }) => {
  // Ref to the input element for selecting and copying to clipboard.
  const hashRef = useRef(null);

  // Function to copy the hash value to the clipboard.
  const copyToClipboard = () => {
    // Select the text in the input field.
    hashRef.current.select();
    // Execute the copy command to copy the selected text.
    document.execCommand('copy');
  };

  // Render the hash display component.
  return (
    <div className="hash-display">
      {/* Display the label for the hash. */}
      <label>{label}</label>

      {/* Container for the hash value and copy-to-clipboard button. */}
      <div className="hash-value-container">
        {/* Input field for displaying the hash value (read-only). */}
        <input ref={hashRef} type="text" readOnly value={value} className="hash-value" />

        {/* Button to trigger the copy-to-clipboard functionality. */}
        <Button variant="secondary" onClick={copyToClipboard}>
          Copy
        </Button>
      </div>
    </div>
  );
};

export default HashDisplay;
