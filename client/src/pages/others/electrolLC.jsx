import React from "react";

export default function ElectoralLiteracyClub() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Electoral Literacy Club
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/ThumbnailImage.jpg"
          alt="Electoral Literacy Club"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* National Voter Awareness Contest */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          National Voters Awareness Contest
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-2">Guidelines</th>
                <th className="border border-gray-300 px-4 py-2">Poster 1</th>
                <th className="border border-gray-300 px-4 py-2">Poster 2</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-blue-600 underline">
                    National Voters Awareness Contest Guidelines
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-blue-600 underline">
                    Poster 1
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-blue-600 underline">
                    Poster 2
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Government Notices */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Government Notices & Posters
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-2">
                  Government Notice 1
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Government Notice 2
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Poster (English)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Poster (Marathi)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-blue-600 underline">
                    Government Notice 1
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-blue-600 underline">
                    Government Notice 2
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-blue-600 underline">
                    Poster (English)
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="#" className="text-blue-600 underline">
                    Poster (Marathi)
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* About Electoral Literacy Club */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          About Electoral Literacy Club
        </h2>
        <p className="mb-4">
          <a href="#" className="text-blue-600 underline">
            Click here
          </a>{" "}
          to learn more about the Electoral Literacy Club.
        </p>

        {/* List of Events Held in January 2022 */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          List of Events Held in January 2022
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
                <th className="border border-gray-300 px-4 py-2">Event Name</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Introductory Event", "Jan 10, 2022", "#"],
                ["2", "Debate Competition", "Jan 16, 2022", "#"],
                ["3", "Meme Competition", "Jan 10, 2022 to Jan 17, 2022", "#"],
                [
                  "4",
                  "Webinar on Voting List Myth and Reality",
                  "Jan 21, 2022",
                  "#",
                ],
              ].map(([sr, event, date, link]) => (
                <tr key={sr} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{sr}</td>
                  <td className="border border-gray-300 px-4 py-2">{event}</td>
                  <td className="border border-gray-300 px-4 py-2">{date}</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer">
                    <a href={link}>Click here</a>
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
