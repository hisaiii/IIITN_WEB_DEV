import React, { useState } from 'react'
import api from '../../../utils/axiosInstance';

export default function CreatePageForm() {
    const [pageName, setPageName] = useState("");
    const [message, setMessage] = useState("");  // To show success/error messages

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevents page reload on form submit

        if (!pageName.trim()) {
            setMessage("Page name cannot be empty!");
            return;
        }

        try {
            const response = await api.post(`/page/createPage/${pageName}`);
            setMessage("Page created successfully!");
            setPageName(""); // Clear input after success
        } catch (error) {
            console.error("Error:", error);
            setMessage("Failed to create page.");
        }
    };

    return (
        <div className="w-full min-h-screen mt-[8rem] flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-1/3 h-1/3 gap-8 flex flex-col">
                <div className="flex flex-col gap-4">
                    <label htmlFor="pageName">Enter Page Name:</label>
                    <input
                        id="pageName"
                        type="text"
                        name="alias"
                        value={pageName}
                        onChange={(e) => setPageName(e.target.value)}
                        className="w-full px-3 py-1 bg-gray-100 outline-none hover:focus:ring-2"
                        placeholder="Page Name"
                    />
                </div>
                <input
                    type="submit"
                    className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
                    value="Create Page"
                />
            </form>

            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
}
