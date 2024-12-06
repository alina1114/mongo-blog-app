import React, { useState } from "react"; // Ensure React and useState are imported
import { createBlog } from "../api"; // Import the API function for creating blogs

const AddBlog = ({ authorId }) => {
    const [blogName, setBlogName] = useState("");
    const [blogURL, setBlogURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form default submission
        const blogData = { name: blogName, URL: blogURL, author: authorId }; // Prepare the blog data
        createBlog(blogData)
            .then((response) => {
                console.log("Blog added:", response.data); // Log success
                setBlogName(""); // Clear input fields
                setBlogURL("");
            })
            .catch((error) => console.error("Error adding blog:", error)); // Log errors
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Blog Name"
                value={blogName}
                onChange={(e) => setBlogName(e.target.value)} // Update state for blog name
                required
            />
            <input
                type="url"
                placeholder="Blog URL"
                value={blogURL}
                onChange={(e) => setBlogURL(e.target.value)} // Update state for blog URL
                required
            />
            <button type="submit">Add Blog</button> {/* Submit button */}
        </form>
    );
};

export default AddBlog; // Export the component
