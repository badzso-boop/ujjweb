import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { WorkerMessageHandler } from "pdfjs-dist/build/pdf.worker.min.mjs"; // Adjust path if needed

import oneletrajz from "../files/ujj_norbert_oneletrajz.pdf"; // Adjust path as needed

// No need to define 'pdfjs' here

const CV = () => {
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="CV w-50">
      <Document file={oneletrajz} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            className="border"
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={800}
            height={200}
          />
        ))}
      </Document>
    </div>
  );
};

export default CV;
