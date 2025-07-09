// Updated ManageLatest.jsx for Dynamic Latest Page Management
import React from "react";
import { Section } from "../../components/index";

const ManageLatest = () => {
    const alias = "latest";

    return (
        <div className="w-full bg-gray-100">
            <div className="mt-[6rem] w-[90%] min-h-screen p-8 mx-auto">
                <h1 className="md:text-3xl text-2xl font-bold mb-6">Manage Latest Page</h1>

                {/* Notices Section - Upload PDFs */}
                <Section alias={alias} sectionName="notices" allowedContentTypes={["pdf"]} allowMultiple={true} />

                {/* Achievements Section - Upload Text (Heading + Description) */}
                <Section alias={alias} sectionName="achievements" allowedContentTypes={["text"]} allowMultiple={true} />

                {/* News Section - Upload Images with Title and Date */}
                <Section
                    alias={alias}
                    sectionName="news"
                    allowedContentTypes={["image"]}
                    allowMultiple={true}
                    additionalFields={{ title: "text", date: "date" }}
                />

                {/* Events Section - Upload Images with Title and Date */}
                <Section
                    alias={alias}
                    sectionName="events"
                    allowedContentTypes={["image"]}
                    allowMultiple={true}
                    additionalFields={{ title: "text", date: "date" }}
                />
            </div>
        </div>
    );
};

export default ManageLatest;



