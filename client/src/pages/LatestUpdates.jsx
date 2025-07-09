import React, { useState } from "react";

export default function LatestUpdates() {
  // State to track the selected section
  const [selectedSection, setSelectedSection] = useState("latest");

  // Data for different sections with PDF links
  const latestUpdates = [
    {
      title: "Recruitment Notice for the Post of Registrar",
      pdf: "/pdfs/recruitment_notice.pdf",
    },
    {
      title:
        "Schedule of Written Test and Interview Admission Schedule Notification Winter 2024-2025",
      pdf: "/pdfs/admission_schedule.pdf",
    },
    {
      title: 'Online Certificate Programme on "Foundations of Cybersecurity"',
      pdf: "/pdfs/cybersecurity_certificate.pdf",
    },
    {
      title: "Revised PhD Admission Schedule Notification Winter 2024-2025",
      pdf: "/pdfs/phd_admission.pdf",
    },
    {
      title:
        'Online Winter FDP on "Biometrics Security in the Generative AI Era"',
      pdf: "/pdfs/biometrics_fdp.pdf",
    },
    {
      title: 'FDP on "Intricacies of Analog & Mixed Signal design"',
      pdf: "/pdfs/analog_mixed_fdp.pdf",
    },
    {
      title: 'Online Winter FDP on "Quantum Computing"',
      pdf: "/pdfs/quantum_fdp.pdf",
    },
    {
      title: "Five Months Online Certification Programme on Generative AI",
      pdf: "/pdfs/genai_course.pdf",
    },
    {
      title: "Holiday list 2025",
      pdf: "/pdfs/holiday_list_2025.pdf",
    },
    {
      title: "Notice Regarding Changes in Official Institute Bank Account",
      pdf: "/pdfs/bank_account_changes.pdf",
    },
  ];

  const studentNotices = [
    { title: "Circular for Hostel Student", pdf: "/pdfs/hostel_circular.pdf" },
    {
      title: "Notice For Mukhyamantri Medhavi Vidyarthi Yojana Scholarship",
      pdf: "/pdfs/scholarship_notice.pdf",
    },
    {
      title: "Schedule for Next Semester Fees Payment & Registration",
      pdf: "/pdfs/fees_schedule.pdf",
    },
    {
      title: "Hostel Fees Extension Notice",
      pdf: "/pdfs/hostel_fees_extension.pdf",
    },
    { title: "Hostel Fees Notice December 2024", pdf: "/pdfs/hostel_fees.pdf" },
  ];

  const facultyNotices = [
    { title: "Faculty Notice 1", pdf: "/pdfs/faculty_notice_1.pdf" },
    { title: "Faculty Notice 2", pdf: "/pdfs/faculty_notice_2.pdf" },
    { title: "Faculty Notice 3", pdf: "/pdfs/faculty_notice_3.pdf" },
  ];

  // Function to get the notices based on the selected section
  const getNotices = () => {
    if (selectedSection === "latest") return latestUpdates;
    if (selectedSection === "student") return studentNotices;
    if (selectedSection === "faculty") return facultyNotices;
    return [];
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Image at the top */}
      <div className="flex justify-center mt-20 mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-5xl h-auto rounded-xl shadow-2xl"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-blue-700 mb-6">
        Latest Updates
      </h1>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-6 py-3 font-semibold rounded-lg ${
            selectedSection === "latest"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setSelectedSection("latest")}
        >
          Latest Updates
        </button>
        <button
          className={`px-6 py-3 font-semibold rounded-lg ${
            selectedSection === "student"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setSelectedSection("student")}
        >
          Student Notices
        </button>
        <button
          className={`px-6 py-3 font-semibold rounded-lg ${
            selectedSection === "faculty"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setSelectedSection("faculty")}
        >
          Faculty Notices
        </button>
      </div>

      {/* Notices List */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <ul className="space-y-3">
          {getNotices().map((notice, index) => (
            <li key={index} className="text-lg">
              <a
                href={notice.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {notice.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
