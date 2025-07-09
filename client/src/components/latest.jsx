import React from "react";
import { useNavigate } from "react-router-dom";

const Latest = ({ data, sectionType }) => {
  const navigate = useNavigate();
  const sectionTitleMap = {
    notices: "📢 Latest Notices",
    achievements: "🏆 Achievements",
    news: "🗞️ IIITN in News",
    events: "📅 Upcoming Events",
  };

  return (
    <div className="w-full py-12">
      <div className="w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          {sectionTitleMap[sectionType] || "Latest Updates"}
        </h2>

        {data?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.slice(0, 3).map(
                (
                  item,
                  index // Show only 3 items
                ) => (
                  <div
                    key={item._id || index}
                    className="border rounded-xl p-4 shadow-lg"
                  >
                    <h3 className="text-lg font-semibold">
                      {item.heading || "No Title"}
                    </h3>
                    {item.date && (
                      <p className="text-gray-500 text-sm">{item.date}</p>
                    )}
                    <p className="text-gray-700 mt-2">
                      {item.description || "No Description"}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="w-full flex justify-center mt-8">
              <button
                onClick={() => navigate("/latest")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
              >
                View All
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">No updates available</div>
        )}
      </div>
    </div>
  );
};

export default Latest;
