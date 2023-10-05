import { PDFDocument, rgb } from 'pdf-lib';

// Function to fetch a PDF with a watermark based on the provided returnHash.
export const fetchPdfWithWatermark = async (returnHash) => {
  try {
    // Fetch the PDF file from the server using the returnHash.
    const response = await fetch(`http://localhost:8080/${returnHash}.pdf`);

    // Check if the response is successful.
    if (response.ok) {
      // Read the PDF bytes from the response.
      const pdfBytes = await response.arrayBuffer();

      // Load the PDF document using the pdf-lib library.
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Iterate through each page of the PDF to add a watermark.
      const pages = pdfDoc.getPages();
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const { height } = page.getSize();

        // Define watermark properties.
        const textWidth = 14;
        const textHeight = height / 5;
        const leftMargin = 140;

        // Add the watermark text to the page.
        page.drawText(returnHash, {
          x: textWidth + leftMargin,
          y: textHeight,
          size: 14,
          color: rgb(1, 0, 0),
          opacity: 0.5,
        });
      }

      // Save the modified PDF bytes.
      const modifiedPdfBytes = await pdfDoc.save();

      // Create a Blob from the modified PDF bytes.
      const modifiedPdfUrl = URL.createObjectURL(new Blob([modifiedPdfBytes], { type: 'application/pdf' }));

      // Return the URL of the modified PDF with watermark.
      return modifiedPdfUrl;
    } else {
      // Throw an error if the PDF fetching fails.
      throw new Error('Failed to fetch PDF with watermark');
    }
  } catch (error) {
    // Log and rethrow the error if there is an issue fetching the PDF.
    console.error('Error fetching PDF with watermark:', error);
    throw error;
  }
};
