import React from "react";

const Research = ({ data = {} }) => {

  const stats = [
    { number: data["number-1"], text: data["relatedText-1"] },
    { number: data["number-2"], text: data["relatedText-2"] },
    { number: data["number-3"], text: data["relatedText-3"] },
  ];

  return (
    <div className="w-full">
       <div className=" w-[90%] mx-auto md:px-12 text-center px-6 py-12 bg-white">
      {/* Title and Description */}
      <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
        {data.heading}
      </h2>
      <p className="text-lg text-gray-600 mt-2 tracking-wide">{data.description}</p>

      {/* Image Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[data["image-1"], data["image-2"], data["image-3"]].map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img}
              alt={`Research Image ${index + 1}`}
              className="w-full h-64 object-cover shadow-lg transition-transform duration-300 group-hover:opacity-80"
            />
          </div>
        ))}
      </div>

      {/* Research Stats */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-64"
          >
            <strong className="text-3xl font-bold text-blue-600">{item.number}+</strong>
            <p className="text-gray-700 font-medium mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <a
        href="/facilities"
        className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg font-bold text-lg mt-6 transition-colors hover:bg-blue-700"
      >
        Explore Research
      </a>
    </div>

    </div>
    
  );
};

export default Research;
