import React from "react";

export default function Director() {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
      {/* Director's Image and Title */}
      <div className="flex flex-col md:flex-row items-center md:items-center">
        <img
          src="/images/Director.png"
          alt="Director"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Professor Prem Lal Patel
          </h2>
          <p className="text-gray-600 text-lg">Director, IIIT Nagpur</p>
        </div>
      </div>

      {/* Director's Message */}
      <div className="mt-6 text-gray-700 text-lg leading-relaxed">
        <p className="font-semibold text-blue-700">Director Message</p>
        <p className="mt-4">
          Professor Prem Lal Patel, Director, VNIT, Nagpur took over the additional charge as Director of IIIT, Nagpur on 1st October, 2024. He is Professor (HAG) of Hydraulics and Water Resources in the Department of Civil Engineering, Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat. He served as Deputy Director of SVNIT from September 17, 2019, to September 16, 2022. He worked as Dean (PG), Dean (R&C), Dean (Academic), and the Head of the Civil Engineering Department at SVNIT Surat.
        </p>
        <p className="mt-4">
          Prior to joining SVNIT in 2007, he served as Associate Professor in the Civil Engineering Department at Delhi College of Engineering (now DTU) for eight years. Before that, he worked as an Assistant Executive Engineer (Civil) in the Border Roads Organization (BRO), Ministry of Road Transport and Highways of India, from 1995 to 1999.
        </p>
        <p className="mt-4">
          He completed his Bachelor's in Civil Engineering from Government Engineering College, Rewa, Madhya Pradesh, India. Later, he pursued his Master's and Doctoral Degrees in Civil Engineering from the Indian Institute of Technology Roorkee (formerly the University of Roorkee).
        </p>
        <p className="mt-4">
          His research areas include River Mechanics and Flood Control; Hydrological Modelling and optimization of water systems; and Impact of climate change on water resources systems. He guided 14 Doctoral Theses, 49 Master Theses and executed more than six high-value sponsored research projects and more than 25 Consultancy Projects. He has more than 260 papers in peer-reviewed journals and conferences of repute. He is a member of various Technical Societies and Expert Committees. Prof. Patel visited various countries like the United States of America, Netherlands, China, Italy, Japan, and Dubai for presenting his research work.
        </p>
        <p className="mt-4">
          He was earlier in the climate change working group of IAHR dealing with Fluvial Mechanism. He is also a Fellow member of the Indian Society for Hydraulics, Indian Water Resources Society, and the Institution of Civil Engineers, India. He has been instrumental in setting up a Centre of Excellence (CoE) on Water Resources & Flood Management in SVNIT Surat through a research grant from the World Bank-sponsored TEQIP-II.
        </p>
        <p className="mt-4 font-semibold text-gray-800">Dr. Prem Lal Patel</p>
        <p className="text-gray-600">Director</p>
      </div>
    </div>
  );
}