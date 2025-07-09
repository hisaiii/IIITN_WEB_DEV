import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatsCounter from './statsCounter';

const Mission = ({ data = {}, counterData = {} }) => {
    const navigate = useNavigate();
    // const visibleData = data.filter(item => item.isVisible);
    const heading=data["heading"]?data["heading"]:"";
    const description=data["description"]?data["description"]:""
    const imageUrl=data["image-1"]?data["image-1"]:""

    return (
        <div className="w-full min-h-min bg-[url(imageUrl)] py-12 overflow-hidden">
            <div className="w-[90%] mx-auto space-y-10">
                    <div  className="text-center md:px-12">
                        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
                        <p className="text-xl sm:text-2xl  my-6 tracking-wide">{description}</p>
                        <div className="w-full flex justify-center items-center">
                            <button 
                                className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer"
                                onClick={() => navigate('/about')}
                            >
                                Know More
                            </button>
                        </div>
                    </div>
                  <StatsCounter counters={counterData ||{}} />
            </div>
          
        </div>
    );
};

export default Mission;
