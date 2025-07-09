import React from "react";

const partners = [
  { id: 1, name: "Shiksha Mantralay", image: "../images/moe.jpg" },
  { id: 2, name: "Maharashtra Shasan", image: "../images/gom.png" },
  { id: 3, name: "TCS", image: "../images/tcs.jpg" },
];

export default function Partners() {
  return (
    <div className="w-[90%] mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">🤝 OUR PARTNERS</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="group relative w-48 h-48 overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              {/* <span className="text-white font-bold text-lg">
                {partner.name}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
