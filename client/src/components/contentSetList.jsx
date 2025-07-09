const ContentSetList = ({ contentSets, handleSetActive, handleDelete }) => {
    return (
      <div className="w-full">
        <h3 className="text-lg font-bold mt-4">Existing Content</h3>
        <div className="space-y-4 flex flex-wrap gap-4">
          {contentSets.map((contentSet) => (
            <div key={contentSet._id} className="min-w-min min-h-min p-2 bg-gray-100 border rounded-lg">
              <div className="flex flex-wrap gap-2">
                {contentSet.fields.map((field, index) => (
                  <div key={index} className="w-full flex flex-col items-center justify-center rounded-lg p-2">
                    {field.type === "image" ? (
                      <img src={field.url} alt="Preview" className="h-50 w-50  object-cover rounded" />
                    ) : (
                       <p className="w-full"><span className="font-semibold">{field.field} </span>: {field.value}</p>
                    )}
                  </div>
                ))}
              </div>
  
              {/* Buttons Section */}
              <div className="mt-4 flex gap-2 justify-between">
                <button
                  onClick={() => handleSetActive(contentSet._id, contentSet.isActive)}
                  className={`px-2 py-1 cursor-pointer rounded ${contentSet.isActive ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"} text-white`}
                >
                  {contentSet.isActive ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleDelete(contentSet._id)}
                  className="bg-red-500 hover:bg-red-700 cursor-pointer text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ContentSetList;