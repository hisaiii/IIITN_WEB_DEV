import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-bold text-gray-800 mt-25 mb-10">
        WHO WE ARE
      </h1>

      {/* First Image - Keeps Original Size */}
      <div className="flex justify-center mb-16">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Institute Image 1"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Act PPP</h2>
          <p className="text-lg text-gray-700">
            The Indian Institute of Information Technology (IIIT), Nagpur is one
            of the IIIT under the Indian Institute of Information Technology
            (Public-Private Partnership) Act, 2017.
          </p>
          <a
            href="../../../pdfs/1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mt-4 text-blue-600 font-bold cursor-pointer underline">
              For more details Click Here
            </p>
          </a>
        </div>
        <img
          src="../../../images/2.jpg"
          alt="Institute Image 2"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg self-start"
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Statute</h2>
          <p className="text-lg text-gray-700">
            The Indian Institute of Information Technology, Nagpur governs by
            the Statutes formulated by GoI. These Statutes may be called the
            Statutes of the Indian Institute of Information Technology, Nagpur,
            2017.
          </p>
          <a
            href="../../../pdfs/2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mt-4 text-blue-600 font-bold cursor-pointer underline">
              For more details Click Here
            </p>
          </a>
        </div>
        <img
          src="../../../images/3.png"
          alt="Institute Image 3"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg self-end"
        />
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Institute Profile
          </h2>
          <p className="text-lg text-gray-700">
            IIITN is one of the 20 IIITs established under the Public-Private
            Partnership Scheme by the Ministry of Education, Government of
            India. It was declared an “Institution of National Importance” under
            the 2017 Act.
          </p>
        </div>
        <img
          src="../../../images/4.jpeg"
          alt="Institute Image 4"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg self-start"
        />
      </div>

      {/* Section 5 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">MoU</h2>
          <p className="text-lg text-gray-700">
            IIIT Nagpur has signed multiple MoUs with leading institutions for
            research and development collaborations:
            <ul className="list-disc ml-5 mt-2">
              <li>
                IIIT Nagpur signed the MoU with Swargiya Dadasaheb Kalmegh
                Smruti Dental College & Hospital, Wanadongari, Nagpur on 28th
                June 2022.
              </li>
              <li>
                IIIT Nagpur signed the MoU with Central India Institute of
                Medical Sciences (CIIMS), Nagpur on 5th January 2022.
              </li>
              <li>
                IIIT Nagpur signed the MoU with E-Spin Nanotech Pvt Ltd., IIT
                Kanpur on 27th January 2021.
              </li>
              <li>
                MoU signed between IIIT Nagpur and Datta Meghe Institute of
                Medical Sciences, Sawangi Meghe, Wardha on 13th March 2020 for
                two years.
              </li>
              <li>
                IIIT Nagpur signed the MoU with Advance Tech India Pvt. Ltd.,
                Punjab, India on 23rd December 2020 to collaborate on innovation
                with students and faculty.
              </li>
              <li>
                MoU signed between Military College of Telecommunication
                Engineering (MCTE), Madhya Pradesh, and IIIT Nagpur for PG
                Diploma - 2020.
              </li>
              <li>MoU signed between AIIMS, Nagpur and IIIT Nagpur – 2020.</li>
              <li>
                IIIT Nagpur signed an MoU with AIIMS, Nagpur for research
                collaboration and need-based projects. Under this MoU, Dr. Mayur
                Parate, Asst. Professor, Department of Electronics &
                Communication Engineering, developed a device for tracking &
                monitoring COVID-19 patients. (2020)
              </li>
              <li>
                IIIT Nagpur signed an MoU with IIM Nagpur Foundation for
                Entrepreneurship Development (InFED) to explore new-age
                digital/technical ideas, concepts, products, and services.
                (2020)
              </li>
              <li>
                IIIT Nagpur signed an MoU with Datta Meghe Institute of Medical
                Sciences, Sawangi Meghe, Wardha for research collaboration and
                need-based projects. (2020)
              </li>
            </ul>
          </p>
        </div>
        <img
          src="../../../images/5.jpeg"
          alt="Institute Image 5"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg -mt-170 "
        />
      </div>
    </div>
  );
}