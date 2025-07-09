import React, { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";
import toast from "react-hot-toast";

const CampusGalleryUpload = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        images: [],
    });

    // ✅ Fetch gallery items
    const fetchGalleryItems = async () => {
        try {
            const response = await api.get("/campus-gallery");
            setGalleryItems(response.data.data || []);
        } catch (error) {
            toast.error("Failed to load gallery items");
        }
    };

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    // ✅ Handle File Selection (Multiple files)
    const handleFileChange = (e) => {
        setFormData({ ...formData, images: [...e.target.files] });
    };

    // ✅ Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.category || formData.images.length === 0) {
            toast.error("All fields and at least one image are required");
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("description", formData.description);
            formDataToSend.append("category", formData.category);
            formData.images.forEach((file) => formDataToSend.append("images", file)); // Append multiple files

            await api.post("/campus-gallery/create", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Gallery item added successfully");
            fetchGalleryItems();
            setFormData({ title: "", description: "", category: "", images: [] });
        } catch (error) {
            toast.error("Failed to add gallery item");
        }
    };

    // ✅ Handle Delete
    const handleDelete = async (id) => {
        try {
            await api.delete(`/campus-gallery/${id}`);
            toast.success("Gallery item deleted");
            fetchGalleryItems();
        } catch (error) {
            toast.error("Failed to delete item");
        }
    };

    return (
        <div className="w-full ">
        <div className="w-2/3 mt-[8rem] mx-auto bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Manage Campus Gallery</h1>

            {/* ✅ Upload Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
                <label className="block font-semibold mb-2">Title</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded mb-4"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                />

                <label className="block font-semibold mb-2">Description</label>
                <textarea
                    className="w-full border p-3 rounded-lg h-24 mb-4"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>

                <label className="block font-semibold mb-2">Category</label>
                <select
                    className="w-full p-2 border rounded mb-4"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Labs">Labs</option>
                    <option value="Sports">Sports</option>
                    <option value="Campus">Campus</option>
                    <option value="Events">Events</option>
                    <option value="Others">Others</option>
                </select>

                <label className="block font-semibold mb-2">Upload Images (Max: 5)</label>
                <input type="file" multiple onChange={handleFileChange} className="w-full p-2 border rounded mb-4" />

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full mt-4">
                    Add Gallery Item
                </button>
            </form>

            {/* ✅ Gallery Display */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Existing Gallery Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div key={item._id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
                            <div className="grid grid-cols-2 gap-2 p-2">
                                {item.images.map((img, index) => (
                                    <img key={index} src={img.url} alt={item.title} className="w-full h-32 object-cover" />
                                ))}
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                <button className="text-white bg-red-500 px-3 py-1 rounded mt-2" onClick={() => handleDelete(item._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>

    );
};

export default CampusGalleryUpload;
