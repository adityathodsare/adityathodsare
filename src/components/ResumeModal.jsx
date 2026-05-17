"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiX, FiDownload } from "react-icons/fi";
import { SITE } from "@/lib/site";
import { BrutalButton } from "./ui/BrutalUI";

// Correct CSS paths for newer react-pdf versions
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeModal({ isOpen, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      // Subtract padding to fit nicely on small screens
      setWidth(Math.min(w - 64, 800)); 
    };
    if (isOpen) {
      handleResize();
      window.addEventListener("resize", handleResize);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative flex max-h-full w-full max-w-4xl flex-col rounded-2xl bg-[#FAFAF7] brutal-border brutal-shadow-lg overflow-hidden animate-float-soft">
        {/* Header */}
        <div className="flex items-center justify-between border-b-[2.5px] border-[#2D2D2D] bg-[#F0EBE0] p-4 shrink-0">
          <h2 className="font-display text-lg font-bold">Resume</h2>
          <div className="flex gap-2">
            <BrutalButton
              href={SITE.resumeUrl}
              download={SITE.resumeFilename}
              variant="primary"
              className="!px-3 !py-1.5 text-sm"
            >
              <FiDownload />
              <span className="hidden sm:inline">Download PDF</span>
            </BrutalButton>
            <button
              onClick={onClose}
              className="rounded-lg brutal-border bg-white p-2 brutal-shadow-sm brutal-hover transition-transform"
              aria-label="Close modal"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto p-4 flex justify-center bg-[#2D2D2D]/5">
          <Document
            file={SITE.resumeUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col items-center gap-4"
            loading={
              <div className="flex items-center justify-center p-10 font-bold text-[#2D2D2D]/70">
                Loading PDF...
              </div>
            }
          >
            {Array.from(new Array(numPages || 0), (el, index) => (
              <div key={`page_${index + 1}`} className="brutal-border brutal-shadow-sm bg-white overflow-hidden shrink-0">
                <Page
                  pageNumber={index + 1}
                  width={width > 0 ? width : undefined}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  loading={<div className="h-96 flex items-center justify-center">Loading page...</div>}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
