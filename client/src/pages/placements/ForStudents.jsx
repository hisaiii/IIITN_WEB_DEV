import React from "react";

export default function ForStudents() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Guidelines for Students
      </h1>

      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      <div className="bg-white pl-40 p-6 rounded-xl shadow-xl">
        <p className="text-lg mb-4">
          Students are informed to keep below documents ready for all the
          internship & placement selection processes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Documents Checklist:
        </h2>
        <ul className="list-disc pl-5 text-lg">
          <li className="mb-2">
            <strong>ID Proof:</strong> Aadhaar Card (mandatory) / PAN Card /
            Driving License / Voter ID card
          </li>
          <li className="mb-2">
            <strong>Address Proof (Any One):</strong> Electricity bill / Bank
            Passbook / Aadhar card / Rent agreement
          </li>
          <li className="mb-2">
            <strong>Self-attested marksheets:</strong>
            <ul className="list-disc pl-5">
              <li>
                10th Std, 12th Std and all B.Tech Semesters and Transcript
              </li>
              <li>Course certificates / internship certificates, etc.</li>
              <li>
                Recent Passport size Photographs in white background – 10 copies
              </li>
              <li>Updated CV in prescribed format – 2 copies</li>
            </ul>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              CV Format Click Here...
            </a>
          </li>
          <li className="mb-4">
            <a
              href="../../../pdfs/7.pdf"
              className="text-blue-600 font-semibold hover:underline"
            >
              Placement Policy Click Here...
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Internship Instructions and Evaluation Guidelines Click Here...
            </a>
          </li>
          <li className="mb-4">
            <a
              href="../../../pdfs/8.pdf"
              className="text-blue-600 font-semibold hover:underline"
            >
              Semester Internship Evaluation Guidelines Click Here...
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}