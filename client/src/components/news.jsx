import React from 'react';
import { useNavigate } from 'react-router-dom';

const News = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 py-16">
            <div className="w-[90%] mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Campus News</h2>
                <p className="text-lg text-center text-gray-600 mb-8">Stories about people, research, and innovation across the Farm</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.slice(0, 6).map((item) => (
                        <div key={item._id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                            <img 
                                src={item.value || null}  
                                alt={item.heading || "News Image"} 
                                className="w-full h-48 object-cover" 
                            />
                            <div className="p-4 bg-white">
                                {/* <h3 className="text-lg font-bold text-gray-900">{item.title || 'No Title'}</h3> */}
                                {item.date && <p className="text-gray-500 text-sm mb-2">{item.date}</p>}
                                <p className="text-black text-sm font-semibold cursor-pointer hover:underline">Read More →</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate('/latest')}
                        className="bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:shadow-lg"
                    >
                        More campus news
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// const News = ({ data }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="w-full bg-gray-100">
//             <div className="w-[90%] mx-auto py-16 relative">
//                 <h2 className="text-4xl font-bold text-center mb-8">🗞️ IIITN in News</h2>

//                 <Swiper
//                     slidesPerView={1}
//                     spaceBetween={30}
//                     breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
//                     loop={true}
//                     pagination={{ clickable: true }}
//                     navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }}
//                     modules={[Pagination, Navigation, Autoplay]}
//                     className="news-slider"
//                 >
//                     {data?.slice(0, 3).map(item => (
//                         <SwiperSlide key={item._id}>
//                             <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full">
//                             <img 
//                                     src={item.value || null}  // ✅ Use `null` if `value` is empty to avoid error
//                                     alt={item.heading || "Uploaded Image"} 
//                                     className="w-full h-64 object-cover" 
//                                 />

//                                 <div className="p-4 bg-white">
//                                     <h3 className="text-lg font-semibold mb-2">{item.title || 'No Title'}</h3>
//                                     {item.date && <p className="text-gray-500 text-sm mb-2">{item.date}</p>}
//                                     <p className="text-blue-600 text-sm cursor-pointer hover:underline">Read More →</p>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* View All Button */}
//                 <div className="w-full flex justify-center mt-8">
//                     <button
//                         onClick={() => navigate('/latest')}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
//                     >
//                         View All
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default News;
