
import React from "react";
import DynamicSectionForm from "./forms/dynamicSectionForm";
const ManageHome = () => {
    const alias = "home";

    return (
        <div className="w-full bg-gray-100">
            <div className="w-[90%] pt-[4rem] mx-auto">
                <div className="mt-[6rem] w-[90%] min-h-screen mx-auto">
                    <h1 className="md:text-3xl text-2xl font-bold mb-6">Manage Home Page</h1>
                   <DynamicSectionForm sectionName="hero" alias="home" />
                   <DynamicSectionForm sectionName="academic" alias="home" />
                   <DynamicSectionForm sectionName="mission" alias="home" />
                   <DynamicSectionForm sectionName="research" alias="home" />
                   <DynamicSectionForm sectionName="achievements" alias="home" />
                   <DynamicSectionForm sectionName="campusNews" alias="home" />
                   <DynamicSectionForm sectionName="clubs" alias="home" />
                   <DynamicSectionForm sectionName="upcomingEvents" alias="home" />
                   <DynamicSectionForm sectionName="campusLife" alias="home" />
                   <DynamicSectionForm sectionName="parteners" alias="home" />
                   <DynamicSectionForm sectionName="testimonials" alias="home" />

                    {/* Add Review Button */}
                    <div className="w-full flex justify-center items-center mt-8">
                        <button className="px-6 py-3 text-xl bg-green-500 hover:bg-green-600 text-white rounded-lg cursor-pointer">
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageHome;
