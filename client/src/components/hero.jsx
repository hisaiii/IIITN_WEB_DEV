// components/Hero.jsx
import React from 'react';

const Hero = ({ data ={} }) => {
    // Find the first image with isVisible: true
    
const activeImageUrl = data["image-1"] || "/images/admin.png";
    return (
        <div 
            className="w-full h-screen background bg-fixed" 
            style={{
                backgroundImage: activeImageUrl ? `url(${activeImageUrl})` : "none", 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundColor: !activeImageUrl ? "#e5e7eb" : "transparent" 
            }}
        >
            {!activeImageUrl && (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Hero Image Available
                </div>
            )}
        </div>
    );
};

export default Hero;
