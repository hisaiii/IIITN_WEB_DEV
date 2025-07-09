import React from "react";

export default function Consultancy() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Consultancy
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Consultancy"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Consultancy Information */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        {/* Measurement Facility */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Measurement Facility
        </h2>
        <p className="mb-2">
          "Measurement using Vector Network Analyzer"{" "}
          <a href="#" className="text-blue-500 hover:underline font-semibold">
            For More Details Click Here
          </a>
        </p>
        <p className="mb-4">
          "Nano SciTech Laboratory Facility"{" "}
          <a href="#" className="text-blue-500 hover:underline font-semibold">
            For More Details Click Here
          </a>
        </p>

        {/* Industrial Research and Consultancy */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Industrial Research and Consultancy
        </h2>
        <p className="mb-4">
          The institute engages in education, research, training, technology
          development, and related activities in almost all areas of
          technological and scientific interest. The mandate of the institute
          states collaborations with the industry.
        </p>

        {/* Benefits of Industry Interactions */}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          What are the benefits of industry interactions?
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>New & Emerging areas are identified jointly</li>
          <li>Real-life problems are addressed</li>
          <li>Impactful quality of research</li>
          <li>The Institute's skill base is complemented</li>
        </ul>

        {/* Consultancy Projects */}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Consultancy Projects
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Short-term projects to solve specific problems of industry, lasting
            1-2 years
          </li>
          <li>
            Expected results at the end of the project are jointly defined at
            the beginning
          </li>
          <li>
            Cost of a consultancy project depends on the nature of the problem
            to be solved
          </li>
        </ul>

        {/* Sponsored Research Projects */}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Sponsored Research Projects
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Long-term projects for new knowledge generation, lasting 2-5 years
          </li>
          <li>Deliverables are more open than those in consultancy projects</li>
          <li>
            A detailed project plan with budget must be submitted and approved
            by the industry
          </li>
        </ul>

        {/* Completed & Ongoing Projects */}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Completed and Ongoing Projects
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Department of Basic Sciences
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Department of Computer Science and Engineering
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Department of Electronics and Communication Engineering
            </a>
          </li>
        </ul>

        {/* Sponsored Research Labs / Facilities */}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Sponsored Research Labs / Facilities
        </h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Industry may sponsor a facility or lab to help build IIITN
            infrastructure.
          </li>
          <li>
            Facilities and labs will be shared with the sponsoring industry on a
            case-to-case basis.
          </li>
        </ul>

        <p className="mb-2">
          <a href="#" className="text-blue-500 hover:underline font-semibold">
            Nano SciTech Laboratory
          </a>
        </p>
        <p className="mb-4">
          <a href="#" className="text-blue-500 hover:underline font-semibold">
            Areas of Expertise
          </a>
        </p>
      </div>
    </div>
  );
}
