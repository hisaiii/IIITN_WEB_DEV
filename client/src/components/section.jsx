import React, { useState, useEffect } from "react";
import FileUploader from "./fileUploader";
import FileGallery from "./contentSetList";
import api from "../utils/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

const Section = ({ alias, sectionName, allowedContentTypes = [], allowMultiple = false, additionalFields = {}, uploadTogether = false }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const response = await api.get(`/admin/page/${alias}/${sectionName}`);
            setFiles(response.data.data.content || []);
        } catch (error) {
            toast.error("Failed to load content");
        } finally {
            setLoading(false);
        }
    };

    const handleUploadSuccess = () => fetchFiles();
    const handleDeleteSuccess = (contentId) => setFiles(files.filter((file) => file._id !== contentId));
    const handleToggleVisibility = async (contentId, isVisible) => {
        try {
            const updatedFiles = files.map((file) =>
                file._id === contentId ? { ...file, isVisible: !file.isVisible } : file
            );
            setFiles(updatedFiles);

            const response = await api.put(`/admin/page/${alias}/${sectionName}/select/${contentId}`, { isVisible });
            if (response.status === 200) {
                toast.success("Visibility updated");
            } else {
                toast.error("Unexpected response from server");
            }
        } catch (error) {
            toast.error("Visibility update failed");
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div className="w-full bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
            <Toaster />
            <h2 className="md:text-2xl text-xl font-bold mb-4">{sectionName.replace("-", " ").toUpperCase()}</h2>

            {uploadTogether ? (
            <FileUploader
                alias={alias}
                sectionName={sectionName}
                allowedContentTypes={allowedContentTypes}
                allowMultiple={allowMultiple}
                additionalFields={additionalFields}
                onUploadSuccess={handleUploadSuccess}
                uploadTogether={true}
            />
        ) : (
            allowedContentTypes.map((type, index) => (
                <FileUploader
                    key={index}
                    alias={alias}
                    sectionName={sectionName}
                    type={type}   // Pass "pdf" type here
                    allowMultiple={allowMultiple}
                    additionalFields={additionalFields}
                    onUploadSuccess={handleUploadSuccess}
                />
            ))
        )}

            {loading ? (
                <div className="text-center my-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                <FileGallery
                    alias={alias}
                    sectionName={sectionName}
                    files={files}
                    onDeleteSuccess={handleDeleteSuccess}
                    onSelectSuccess={handleToggleVisibility}
                />
            )}
        </div>
    );
};

export default Section;


