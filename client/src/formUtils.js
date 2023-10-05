// Utility functions related to form handling.

// Function to handle form submission by preventing the default form behavior and setting the submitClicked state.
export const handleSubmit = (event, setSubmitClicked) => {
  // Prevent the default form submission behavior.
  event.preventDefault();
  // Set the submitClicked state to true to trigger further actions.
  setSubmitClicked(true);
};

// Function to reset page-related states when called, including email, returnHash, loading, pdfUrl, and submitClicked.
export const resetPage = (setEmail, setReturnHash, setLoading, setPdfUrl, setSubmitClicked) => {
  // Reset email state to an empty string.
  setEmail('');
  // Reset returnHash state to an empty string.
  setReturnHash('');
  // Set loading state to false to indicate that loading is not in progress.
  setLoading(false);
  // Set pdfUrl state to null to clear any existing PDF URL.
  setPdfUrl(null);
  // Set submitClicked state to false to reset the form submission flag.
  setSubmitClicked(false);
};
