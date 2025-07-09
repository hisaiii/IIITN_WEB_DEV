import React from "react";

export default function OfficialDoc() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Official Documents
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Official Documents"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Official Documents Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        {/* Establishment Section */}
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Establishment Section
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-2">Sr. No</th>
                <th className="border border-gray-300 px-4 py-2">
                  Documents Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "1",
                  "Annual Statement of Immovable Property Declaration (English)",
                  "Click here",
                ],
                [
                  "2",
                  "Annual Statement of Immovable Property Declaration (Hindi)",
                  "Click here",
                ],
                ["3", "Family Declaration Format", "Click here"],
                ["4", "Regular Staff CCL Application Form", "Click here"],
                ["5", "Regular Staff EL & HPL Application Form", "Click here"],
                ["6", "Regular Teaching EL Application Form", "Click here"],
                ["7", "Joining Report", "Click here"],
                ["8", "Teaching SCL Application Form", "Click here"],
                ["9", "Regular Teaching CL Application Form", "Click here"],
                ["10", "Regular Staff CL Application Form", "Click here"],
                ["11", "Faculty-NOC Format for Job Application", "Click here"],
                [
                  "12",
                  "Non-Teaching NOC Format for Job Application",
                  "Click here",
                ],
                [
                  "13",
                  "Non-Teaching Staff Leave Application Format",
                  "Click here",
                ],
                ["14", "Headquarter Leave Format", "Click here"],
              ].map(([sr, name, link]) => (
                <tr key={sr} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{sr}</td>
                  <td className="border border-gray-300 px-4 py-2">{name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer">
                    {link}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Exam Section */}
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Exam Section
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-2">Sr. No</th>
                <th className="border border-gray-300 px-4 py-2">
                  Documents Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Transcript Application", "Click here"],
                ["2", "Official Transcript Courier Charges", "Click here"],
                ["3", "No Dues Format for B.Tech", "Click here"],
                ["4", "No Dues Format for PhD", "Click here"],
                [
                  "5",
                  "Checklist for Verification at PhD Thesis Submission",
                  "Click here",
                ],
                [
                  "6",
                  "Notice for Pass Out Students (Authority Letter)",
                  "Click here",
                ],
                ["7", "Six Monthly Progress Seminar (PhD)", "Click here"],
              ].map(([sr, name, link]) => (
                <tr key={sr} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{sr}</td>
                  <td className="border border-gray-300 px-4 py-2">{name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer">
                    {link}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Account Section */}
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Account Section
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-2">Sr. No</th>
                <th className="border border-gray-300 px-4 py-2">
                  Documents Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Bank Details for Honorarium Transferred", "Click here"],
                [
                  "2",
                  "SOP for Adv. Settlement and Reimbursement of Expense",
                  "Click here",
                ],
              ].map(([sr, name, link]) => (
                <tr key={sr} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{sr}</td>
                  <td className="border border-gray-300 px-4 py-2">{name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer">
                    {link}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
