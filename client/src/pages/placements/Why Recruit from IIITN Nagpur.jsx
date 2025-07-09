import React from "react";

export default function WhyRecruitIIITN() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen px-16 py-20">
      {/* Title */}
      <h1 className="text-center text-6xl font-bold text-gray-800 mt-25 mb-20">
        WHY RECRUIT FROM IIITN NAGPUR?
      </h1>

      {/* Image Placeholder */}
      <div className="flex justify-center mb-20">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-6xl h-auto rounded-xl shadow-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="w-full max-w-full mx-auto bg-white px-20 py-16 rounded-2xl shadow-2xl">
        <table className="w-full border-separate border-spacing-y-12">
          <tbody>
            {/* Admission */}
            <tr className="bg-gray-50 rounded-xl shadow-lg">
              <th className="p-6 text-left text-2xl font-semibold text-white bg-blue-600 w-1/3 rounded-l-xl">
                ADMISSION
              </th>
              <td className="p-6 text-xl text-gray-700 leading-relaxed rounded-r-xl">
                Established by MHRD, Govt of Maharashtra, and Industry partners.
                Declared as Institution of National Importance by Act of
                Parliament. Admissions happen through JoSAA. Only the top 2%
                candidates taking JEE Mains Exam make it to IIITN.
              </td>
            </tr>

            {/* Industry Academia Collaboration */}
            <tr className="bg-gray-50 rounded-xl shadow-lg">
              <th className="p-6 text-left text-2xl font-semibold text-white bg-blue-600 rounded-l-xl">
                INDUSTRY ACADEMIA COLLABORATION
              </th>
              <td className="p-6 text-xl text-gray-700 leading-relaxed rounded-r-xl">
                Tie-up with Tata Consultancy Services Ltd as an Industry
                Partner. MoU with ESIEE Paris for exchange programmes.
              </td>
            </tr>

            {/* Curriculum */}
            <tr className="bg-gray-50 rounded-xl shadow-lg">
              <th className="p-6 text-left text-2xl font-semibold text-white bg-blue-600 rounded-l-xl">
                CURRICULUM
              </th>
              <td className="p-6 text-xl text-gray-700 leading-relaxed rounded-r-xl">
                Industry-relevant dynamic curriculum designed by the Board of
                Studies, consisting of tech experts from the IT industry. Core
                subjects from the 1st semester, choice-based credit system,
                industry internships, and credit-based online certifications.
                <div className="mt-8 space-x-6">
                  <button className="border border-gray-600 text-white bg-gray-800 px-6 py-3 rounded-xl text-lg font-bold hover:bg-gray-700">
                    View CSE Curriculum
                  </button>
                  <button className="border border-gray-600 text-white bg-gray-800 px-6 py-3 rounded-xl text-lg font-bold hover:bg-gray-700">
                    View ECE Curriculum
                  </button>
                </div>
              </td>
            </tr>

            {/* Research Environment */}
            <tr className="bg-gray-50 rounded-xl shadow-lg">
              <th className="p-6 text-left text-2xl font-semibold text-white bg-blue-600 rounded-l-xl">
                RESEARCH ENVIRONMENT
              </th>
              <td className="p-6 text-xl text-gray-700 leading-relaxed rounded-r-xl">
                Research focuses on solving IT industry problems. Industry
                professionals can pursue research under Industry-Academia
                Collaboration.
                <br />
                <br />
                <strong>Key Research Areas:</strong>
                <ul className="list-disc list-inside mt-6 ml-6">
                  <li>Deep Learning, Machine Learning, Data Mining, IoT</li>
                  <li>Signal, Image & Video Processing, Wireless Networks</li>
                  <li>Nanoscience, Applied Mathematics, Engineering Physics</li>
                </ul>
              </td>
            </tr>

            {/* Student Publications */}
            <tr className="bg-gray-50 rounded-xl shadow-lg">
              <th className="p-6 text-left text-2xl font-semibold text-white bg-blue-600 rounded-l-xl">
                STUDENT PUBLICATIONS
              </th>
              <td className="p-6 text-xl text-gray-700 leading-relaxed rounded-r-xl">
                <button className="border border-gray-600 text-white bg-gray-800 px-6 py-3 rounded-xl text-lg font-bold hover:bg-gray-700">
                  View Student Publications
                </button>
              </td>
            </tr>

            {/* Clubs and Communities */}
            <tr className="bg-gray-50 rounded-xl shadow-lg">
              <th className="p-6 text-left text-2xl font-semibold text-white bg-blue-600 rounded-l-xl">
                CLUBS AND COMMUNITIES AT IIITN
              </th>
              <td className="p-6 text-xl text-gray-700 leading-relaxed rounded-r-xl">
                <strong>Technical:</strong> Ack-Z (White hat security club),
                United Gamers, DotSlash (Programming).
                <br />
                <strong>Cultural:</strong> Music Club, Talartsdy (Art Club),
                Beats Spark (Dance Club).
                <br />
                <strong>Academics & Research:</strong> REAP (Research Club), 7C
                Club (Public Speaking & Leadership).
              </td>
            </tr>

            {/* Flagship Annual Events */}
            <tr className="bg-gray-50 rounded-xl shadow-lg">
              <th className="p-6 text-left text-2xl font-semibold text-white bg-blue-600 rounded-l-xl">
                FLAGSHIP ANNUAL EVENTS
              </th>
              <td className="p-6 text-xl text-gray-700 leading-relaxed rounded-r-xl">
                <strong>ABHIVYAKTI</strong> – The Annual Cultural Festival
                <br />
                <strong>TANTRAFIESTA</strong> – National Level Technical Event
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
