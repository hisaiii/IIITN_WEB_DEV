import React from 'react';
import { useNavigate } from 'react-router-dom';

const Events = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="w-[90%] mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-8">📅 Upcoming Events</h2>

            {data?.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.slice(0, 3).map(item => (
                            <div 
                                key={item._id} 
                                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
                                onClick={() => navigate('/latest')}
                            >
                                <img 
                                    src={item.value || '/placeholder.jpg'} 
                                    alt={item.title || 'No Title'} 
                                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-blue-800 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="block text-center font-bold">{item.heading || 'No Title'}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center mt-8">
                        <button
                            onClick={() => navigate('/latest')}
                            className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-lg cursor-pointer"
                        >
                            View All
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-500">No upcoming events available</div>
            )}
        </div>
    );
};

export default Events;