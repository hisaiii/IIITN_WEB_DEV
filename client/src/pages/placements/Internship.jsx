import React from "react";

export default function Internship() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Internship
      </h1>

      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* A4 Images Section (Vertical Layout) */}
      <div className="flex flex-col items-center gap-6 mb-10">
        <img
          src="../../../images/doc1.jpg"
          alt="A4 Document 1"
          className="w-full max-w-3xl h-auto shadow-xl"
        />
        <img
          src="../../../images/doc2.jpg"
          alt="A4 Document 2"
          className="w-full max-w-3xl h-auto shadow-xl"
        />
        <img
          src="../../../images/doc3.jpg"
          alt="A4 Document 3"
          className="w-full max-w-3xl h-auto shadow-xl"
        />
        <img
          src="../../../images/doc4.jpg"
          alt="A4 Document 4"
          className="w-full max-w-3xl h-auto shadow-xl"
        />
        <img
          src="../../../images/doc5.jpg"
          alt="A4 Document 5"
          className="w-full max-w-3xl h-auto shadow-xl"
        />
      </div>

      {/* Internship Documents Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Format Internship Registration Form and Report:
        </h2>
        <ul className="list-disc pl-5 text-lg">
          <li className="mb-4">
            Internship Application Form{" "}
            <a
              href="../../../pdfs/9.pdf"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download
            </a>
          </li>
          <li className="mb-4">
            Internship Joining Application{" "}
            <a
              href="../../../pdfs/10.pdf"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download
            </a>
          </li>
          <li className="mb-4">
            Internship Report Submission Guideline{" "}
            <a
              href="../../../pdfs/11.docx"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download
            </a>
          </li>
          <li className="mb-4">
            Internship Evaluation Form{" "}
            <a
              href="../../../pdfs/12.pdf"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}